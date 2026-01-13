import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api", // backend URL
});

export const fetchRecommendations = (query) =>
  API.post("/recommend", { query });
