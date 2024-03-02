import axios, { AxiosInstance } from 'axios';
import queryString from 'query-string';

const baseUrl = 'https://api.nytimes.com/svc/';
const apiKey = 'Gtumb6AYLNcTjYQ0nSHQ1VABIamawrR1';

const axiosClient2: AxiosInstance = axios.create({ //TODO: Rename
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify({ ...params, "api-key": apiKey }),
});

// Add a request interceptor
axiosClient2.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient2.interceptors.response.use(
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
      return axiosClient2.get(url, { params: {} });
    },
    getReviews: () => {
      const url = `news/v3/content/nyt/movies.json`;
        return axiosClient2.get(url, { params: {} });
    }
};

export default newsApi;
