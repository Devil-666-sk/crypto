import axios from 'axios';
const BASE_URL =
  'http://localhost:5000/api/coins' || 'https://my-backend-api.onrender.com/';

export const getCoins = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};
