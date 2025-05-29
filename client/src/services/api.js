import axios from 'axios';

// Determine base URL based on build tool (Create React App or Vite) with fallback
const API_URL = (typeof process !== 'undefined' && process.env?.REACT_APP_API_URL) ||
                (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_URL) ||
                'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Retained for CORS with credentials
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
