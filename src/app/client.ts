import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND,
});

instance.interceptors.request.use((config) => {
  const session = localStorage.getItem("session");
  if (session) {
    config.headers.session = session;
  }
  return config;
});
