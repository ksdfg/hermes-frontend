import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND,
  withCredentials: true,
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);
