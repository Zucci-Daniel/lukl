import axios, {AxiosRequestConfig} from 'axios';

export const devInstance = axios.create({
  baseURL: 'https://opentdb.com',
});

devInstance.interceptors.request.use(
  async (config: any) => {
    config.headers = {
      'Content-Type': 'application/json',
      ...config.headers,
    };
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);
