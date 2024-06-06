import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

// Create an axios instance with a base URL
const httpService = axios.create({
  baseURL: '', //BASE URL GOES IN HERE
});

// Request interceptor to set the appropriate Content-Type header
httpService.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<any>) => {
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    } else {
      config.headers!['Content-Type'] = 'application/json';
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// Response interceptor to handle responses and errors
httpService.interceptors.response.use(
  (response: AxiosResponse<any, any>) => response,
  async (error: AxiosError<any, any>) => {
    if (!error.response) {
      return Promise.reject(error.message);
    } else {
      return Promise.reject(error.response.data);
    }
  },
);

export default httpService;
