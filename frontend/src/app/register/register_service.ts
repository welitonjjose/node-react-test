import axios from '../../util/axiosInstance';

export const registerUser = async (username: string, password: string): Promise<any> => {
  return await axios.post('/api/auth/register', {
    username,
    password,
  });
}