import axios from '../../util/private';

export const listPeople = async (): Promise<any> => {
  return await axios.post('/api/people', { private: true });
}