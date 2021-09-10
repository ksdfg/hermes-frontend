import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND,
  withCredentials: false,
});

instance.interceptors.request.use(function (err) {
  return Promise.reject(err);
});
