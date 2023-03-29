import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:4000',
});

// instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
