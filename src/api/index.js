import axios from 'axios';

const api = axios.create({
    // ip kailany
    // baseURL: "http://192.168.0.3:3000"

    // ip yasmin
    // baseURL: "http://192.168.0.14:3000"

    // ip senai
    // baseURL: "http://10.3.60.86:3000"

    baseURL: "http://localhost:3000"

});

export default api;