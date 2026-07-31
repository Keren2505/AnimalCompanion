import axios from "axios";

console.log("API URL:", "https://animalcompanion-production.up.railway.app");

const api = axios.create({
  baseURL: "https://animalcompanion-production.up.railway.app",
});

export default api;