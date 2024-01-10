
import axios from 'axios';

const SERVER_URL = 'https://freekarvapaisabackend.onrender.com'


export const api = axios.create({
    baseURL: SERVER_URL,
    timeout: 15000,
    headers: {
        "Content-Type": "application/json",
    }
})
