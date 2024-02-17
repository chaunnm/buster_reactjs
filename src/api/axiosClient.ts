import axios, { AxiosInstance } from 'axios';
import queryString from 'query-string';

const axiosClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_MOVIES_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify({ ...params, api_key: import.meta.env.VITE_MOVIES_API_KEY }),
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosClient;
