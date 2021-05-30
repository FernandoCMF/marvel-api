import axios from 'axios';
import md5 from 'md5';

const publicKey = 'f23050bc34a891f86c796afc527f81a1';
const privateKey = '1308cef4b5ad795116fd671b7d4691cdc0f9ba3e';
const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public',
    params: {
        ts,
        apikey: publicKey,
        hash
    }
})

export default api;