import API from '@/config/axios';
import { endpoints } from '@/config/endpoints';
import { IFact } from '../types/api';

const fetchFacts = async (url: string): Promise<IFact[]> => {
  const { data } = await API.get(endpoints.facts + url);
  return data.data;
};

export default fetchFacts;
