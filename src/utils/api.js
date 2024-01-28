
import axios from 'axios';

// const SERVER_URL = 'https://freekarvapaisabackend.onrender.com'
const SERVER_URL = 'http://localhost:9808'


export const api = axios.create({
    baseURL: SERVER_URL,
    timeout: 15000,
    headers: {
        "Content-Type": "application/json",
    }
})
