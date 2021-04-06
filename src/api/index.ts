import axios from 'axios';
import { BASE_URL, AUTH_HEADER } from '@env';

const axiosConfig = axios.create({
  baseURL: BASE_URL,
});

axiosConfig.defaults.headers.common['Authorization'] = AUTH_HEADER;

export default axiosConfig;
