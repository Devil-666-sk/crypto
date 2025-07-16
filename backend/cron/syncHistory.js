const cron = require('node-cron');
const fetchCoins = require('../services/fetchCoins');
const HistoryData = require('../models/HistoryData');
const CurrentData = require('../models/CurrentData');

const syncHistory = () => {
  cron.schedule('0 */1 * * *', async () => {
    const data = await fetchCoins();

    
    await CurrentData.deleteMany({});
    await CurrentData.insertMany(data);

    
    await HistoryData.insertMany(
      data.map((coin) => ({ ...coin, timestamp: new Date() }))
    );

    console.log('🔄 Synced at', new Date());
  });
};

module.exports = syncHistory;
