import React, { useEffect, useState } from 'react';
import { getCoins } from '../api';

const CryptoTable = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    const data = await getCoins();
    setCoins(data);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const filtered = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-8'>
      <h1 className='text-3xl font-bold mb-6 text-center text-gray-800'>
         Live Crypto Tracker
      </h1>

      <div className='mb-6'>
        <input
          type='text'
          placeholder='🔍 Search cryptocurrencies...'
          className='w-full p-3 border border-black-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className='overflow-x-auto bg-white rounded-xl shadow-lg'>
        <table className='min-w-full text-sm text-left text-black-700'>
          <thead className='bg-gray-50 sticky top-0 z-10'>
            <tr>
              <th className='py-3 px-4 font-medium'>Name</th>
              <th className='py-3 px-4 font-medium'>Symbol</th>
              <th className='py-3 px-4 font-medium'>Price</th>
              <th className='py-3 px-4 font-medium hidden sm:table-cell'>
                Market Cap
              </th>
              <th className='py-3 px-4 font-medium'>24h Change</th>
              <th className='py-3 px-4 font-medium hidden md:table-cell'>
                Last Updated
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((coin) => (
                <tr
                  key={coin.coinId}
                  className='hover:bg-gray-50 transition duration-200'
                >
                  <td className='py-3 px-4 font-semibold flex items-center gap-2'>
                    {/* Optional: Add icon if you have a coin.icon */}
                    {/* <img src={coin.icon} alt="" className="w-5 h-5" /> */}
                    {coin.name}
                  </td>
                  <td className='py-3 px-4 uppercase text-gray-500'>
                    {coin.symbol}
                  </td>
                  <td className='py-3 px-4 font-medium text-gray-800'>
                    ${coin.price.toLocaleString()}
                  </td>
                  <td className='py-3 px-4 hidden sm:table-cell'>
                    ${coin.marketCap.toLocaleString()}
                  </td>
                  <td className='py-3 px-4'>
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full font-semibold ${
                        coin.change24h >= 0
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {coin.change24h?.toFixed(2)}%
                    </span>
                  </td>
                  <td className='py-3 px-4 hidden md:table-cell text-gray-400 text-xs'>
                    {new Date(coin.lastUpdated).toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='6' className='text-center py-6 text-gray-500'>
                  No coins found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTable;
