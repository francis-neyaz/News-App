import axios from 'axios';

// Determine base URL based on build tool with production-ready fallback
const API_URL = (typeof process !== 'undefined' && process.env?.REACT_APP_API_URL) ||
                (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_URL) ||
                'https://your-backend-url.com/api'; // Replace with your hosted backend URL

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Retained for CORS with credentials
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
