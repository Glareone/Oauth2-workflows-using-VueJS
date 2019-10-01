import axios from 'axios';
import { GOOGLE_BASE_URL } from './constants';

const axiosGoogleInstance = axios.create({
  baseURL: GOOGLE_BASE_URL,
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
  },
});

export default axiosGoogleInstance;