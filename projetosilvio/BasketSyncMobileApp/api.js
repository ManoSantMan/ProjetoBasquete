import axios from 'axios';

const api = axios.create({
  baseURL: 'https://webapptech.site/apiagendamentos/api',
});

export default api;