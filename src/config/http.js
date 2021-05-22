import axios from 'axios';
import { getToken } from '../helpers/authToken';
import { api } from 'config/constants';

const http = axios.create({
  baseURL: api,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

http.interceptors.request.use(async (config) => {
  try {
    const authToken = getToken();
    config.headers.Authorization = `Bearer ${authToken}`;
  } catch (e) {
    console.log(e, 'REQUEST ERROR');
  }
  return config;
});

export default http;
