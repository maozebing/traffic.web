import axios from 'axios';

axios.defaults.baseURL = axiosBaseURL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.changeOrigin = true;
/**
 * http请求过滤器
 */
axios.interceptors.request.use(
  config => {
    config.changeOrigin = true;
    return config;
  },
  error => {
    return Promise.error(error);
  }
);
/**
 * http返回过滤器
 */
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  });
