import { useRouter } from 'next/router';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    const router = useRouter();
    router.push('/login');
  }

  return config;
}, error => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response) {
    if (error.response.data.status === 401 || error.response.data.status === 403) {
      console.log(error.response.data.status)
      const router = useRouter();
      router.push('/login');
    }
  } else {
    console.error('Erro ao configurar a requisição:', error.message);
  }
  return Promise.reject(error);
});


export default axiosInstance;