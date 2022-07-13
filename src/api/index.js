import axios from 'axios';

const api = axios.create({
    // ip kailany
    // baseURL: "http://192.168.0.13:3000"

    // ip yasmin
    // baseURL: "http://192.168.0.15:3000"

    baseURL: "http://localhost:3000"
});

export default api;