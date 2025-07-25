import axios from "axios";
const api = axios.create({
  // Vite dev proxy lets us keep a relative baseURL in development
  baseURL: import.meta.env.VITE_API_URL || "/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  // Optional: time‑out after 10s
  timeout: 10_000,
});
// interceptor for token
const PUBLIC_ENDPOINTS = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
];
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    if (!PUBLIC_ENDPOINTS.includes(config.url)) {
      const token = localStorage.getItem("token");
      if (token) {
        // If token exists, set it in the Authorization header
        config.headers["X-Auth-Token"] = token;
      }
      return config;
    }
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);
export default api;
