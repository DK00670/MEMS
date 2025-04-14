import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Update later with your backend URL
  headers: { 'Content-Type': 'application/json' }
});

export default api;
