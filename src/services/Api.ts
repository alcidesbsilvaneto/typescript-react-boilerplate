import axios from "axios";
import { toast } from "react-toastify";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const Api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://api.production.com/v1"
      : "http://localhost:1337/v1",
  headers,
});

Api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("user_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

Api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (
      error.response &&
      error.response.data &&
      error.response.data.message === "token-expired"
    ) {
      toast("Sua sessão expirou, faça login novamente");
      localStorage.clear();
      return window.location.replace("/login?expired=true");
    }
    return Promise.reject(error);
  }
);

export default Api;
