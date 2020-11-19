import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend.hxmais.com.br/admins',
});

export default api;
