import axios from 'axios';
// @ts-ignore
import { BASE_URL, AUTH_HEADER } from 'react-native-dotenv';

export default axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: AUTH_HEADER },
});
