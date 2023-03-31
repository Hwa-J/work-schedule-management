import axios from 'axios';

const localData = localStorage.getItem('access_token');
const token = JSON.parse(localData).state.token;
const instance = axios.create({
  baseURL: 'http://54.180.9.59:8080/api',
});
instance.defaults.headers.common['Authorization'] = token
  ? `Bearer ${token}`
  : null;

export default instance;
