import { NextApiRequest, NextApiResponse } from 'next'

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

    const body = JSON.stringify(messages)

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify(req.body),
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
