import axios from "axios";

const API_BASE_URL = "https://fakestoreapi.com";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    console.log(`Petición: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error("Error en la petición:", error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    console.log(`Respuesta exitosa de: ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error(`Error en la respuesta de: ${error.config?.url}`, error.message);
    return Promise.reject(error);
  }
);