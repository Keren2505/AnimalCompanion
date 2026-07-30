import axios from 'axios';

const api = axios.create({
  baseURL: 'https://animalcompanion-production.up.railway.app'
});

export default api;