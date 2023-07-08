import { NextApiRequest, NextApiResponse } from 'next'
import { decrypt } from '../../src/utils/api_decrypt';
import Redis from 'ioredis';

const redis = new Redis({
    host: 'redis.bugwc.com', // Redis服务器的主机名
    port: 6379, // Redis服务器的端口号
    password: process.env.REDIS_PASSWORD, // Redis服务器的密码
});

export default async function createMessage(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { messages } = req.body
    const apiKey = process.env.OPENAI_API_KEY
    const url = 'https://api.openai.com/v1/chat/completions'

    const firstMessage = {
        role: 'system',
        content: 'You are a helpful assistant.',
    }

    let body = req.body
    const api_key = req.body.api_key
    delete body.api_key
    const decrypt_key = JSON.parse(decrypt(api_key))
    const ho_key = process.env.VITE_KEY
    if (ho_key !== decrypt_key.key) {
        res.status(500).json({ error: '出現問題1' })
    } else {
        const listData = await redis.lrange('gpt', 0, -1);
        const exists = listData.includes(api_key);
        if (exists) {
            res.status(500).json({ error: '出現問題2' })
        } else {
            await redis.lpush('gpt', api_key);
        }
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify(body),
        })

        const reader = response.body.getReader()
        const decoder = new TextDecoder('utf-8')
        let result = ''
        let done = false

        while (!done) {
            const { value, done: readerDone } = await reader.read()
            const chunk = decoder.decode(value)
            result += chunk

            done = readerDone

            if (!done && result) {
                res.write(result)
                result = ''
            }
        }

        res.end()
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
