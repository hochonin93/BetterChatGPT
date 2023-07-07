import CryptoJS from 'crypto-js';

export const decrypt = (encryptedData: string): string => {
    const KEY = process.env.VITE_KEY ? process.env.VITE_KEY : '';
    const KEY_MD5 = process.env.VITE_KEY_MD5 ? process.env.VITE_KEY_MD5 : '';
    let key = CryptoJS.enc.Utf8.parse(KEY_MD5);
    let iv = CryptoJS.enc.Utf8.parse(KEY + KEY);

    var decrypted = CryptoJS.AES.decrypt(encryptedData, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
};
