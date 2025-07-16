import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getCoins = async () => {
  const { data } = await axios.get(`${BASE_URL}/coins`);
  return data;
};
