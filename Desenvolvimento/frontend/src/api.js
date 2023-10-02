import axios from 'axios';

const api = axios.create({
    baseURL: 'http://144.22.155.241:8000/api'
});

export default api;
