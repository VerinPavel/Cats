import API from '@/config/axios';
import { endpoints } from '@/config/endpoints';
import { IFact } from '../types/api';

const fetchRandomFact = async (): Promise<IFact> => {
  const { data } = await API.get<IFact>(endpoints.randomFact);
  return data;
};

export default fetchRandomFact;
