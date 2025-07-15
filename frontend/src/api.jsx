import axios from 'axios';
const BASE_URL = 'http://localhost:5000/api/coins';

export const getCoins = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};
