import axios from 'axios';

// Configure axios to search in github's api
const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;
