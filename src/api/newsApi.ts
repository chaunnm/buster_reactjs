import axios, { AxiosInstance } from 'axios';
import queryString from 'query-string';

const axiosClientNews: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_NEWS_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify({ ...params, "api-key": import.meta.env.VITE_NEWS_API_KEY }),
});

// Add a request interceptor
axiosClientNews.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClientNews.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

const newsApi = {
    getMovieNews: () => {
      const url = `topstories/v2/movies.json`;
      return axiosClientNews.get(url, { params: {} });
    },
    getReviews: () => {
      const url = `news/v3/content/nyt/movies.json`;
        return axiosClientNews.get(url, { params: {} });
    }
};

export default newsApi;
