import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.eventogy.com/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
