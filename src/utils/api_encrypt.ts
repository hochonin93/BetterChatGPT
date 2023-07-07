import CryptoJS from 'crypto-js';

export const encrypt = () => {
  const KEY = import.meta.env.VITE_KEY;
  const KEY_MD5 = import.meta.env.VITE_KEY_MD5;
  let key = CryptoJS.enc.Utf8.parse(KEY_MD5);
  let iv = CryptoJS.enc.Utf8.parse(KEY + KEY);
  let data = JSON.stringify({
    time: Math.floor(Date.now() / 1000),
    key: KEY,
  });

  let srcs = CryptoJS.enc.Utf8.parse(data);
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
};
