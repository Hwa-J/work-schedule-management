import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:4000',
});
const token = localStorage.getItem('access_token');
instance.defaults.headers.common['Authorization'] = token
  ? `Bearer ${token}`
  : null;
