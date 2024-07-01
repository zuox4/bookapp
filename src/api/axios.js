import axios from 'axios';

const axiosPrivate = axios.create({
  baseURL: 'http://192.168.22.37:5001',
});

// Добавляем перехватчик запроса для установки заголовка Authorization
axiosPrivate.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem('accessToken');
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
}, function (error) {
  return Promise.reject(error);
});

export { axiosPrivate };