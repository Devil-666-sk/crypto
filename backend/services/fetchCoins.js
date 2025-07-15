// const axios = require('axios');

// const fetchCoins = async () => {
//   const url =
//     'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1';
//   const { data } = await axios.get(url);
//   return data.map((coin) => ({
//     coinId: coin.id,
//     name: coin.name,
//     symbol: coin.symbol,
//     price: coin.current_price,
//     marketCap: coin.market_cap,
//     change24h: coin.price_change_percentage_24h,
//     lastUpdated: new Date(coin.last_updated),
//   }));
// };

// module.exports = fetchCoins;
const axios = require('axios');

const fetchCoins = async () => {
  try {
    const url =
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1';

    const { data } = await axios.get(url);

    if (!Array.isArray(data)) {
      throw new Error('Unexpected response format from CoinGecko API');
    }

    return data.map((coin) => ({
      coinId: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      price: coin.current_price,
      marketCap: coin.market_cap,
      change24h: coin.price_change_percentage_24h,
      lastUpdated: new Date(coin.last_updated),
    }));
  } catch (error) {
    console.error('Error in fetchCoins():', error.message);
    return []; // Return empty array to avoid crashing your API
  }
};

module.exports = fetchCoins;
