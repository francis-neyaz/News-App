// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api', // Use port 5001 to match .env
  withCredentials: true, // Keep this if you need credentials
});

export default api;
