import axios from 'axios';
import { toast } from 'react-toastify';

const httpService = axios.create({
  baseURL: 'https://hrm-multi-backend.herokuapp.com/api/v1/',
});

httpService.interceptors.request.use((config) => {
  if (!config.headers.Authorization && localStorage.getItem('auth')) {
    config.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('auth')).token
    }`;
  }
  return config;
});

httpService.interceptors.response.use(
  (response) => response,
  (response) => {
    toast.error(response.response.data.message);
  }
);

export default httpService;
