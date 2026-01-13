import axios from "axios";

const API = axios.create({
  baseURL: "https://shl-project-d9gt.onrender.com/api", // backend URL
});

export const fetchRecommendations = (query) =>
  API.post("/recommend", { query });
