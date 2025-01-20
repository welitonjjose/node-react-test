import axios from '../../util/axiosInstance';

export const autenticate = async (username: string, password: string): Promise<any> => {
  return await axios.post('/api/auth/login', {
    username,
    password,
  });
}