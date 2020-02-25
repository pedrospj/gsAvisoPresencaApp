import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://10.10.1.123:1717',
});

export default axiosInstance;
