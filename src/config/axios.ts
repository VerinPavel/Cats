import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'https://catfact.ninja/';

const API = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
