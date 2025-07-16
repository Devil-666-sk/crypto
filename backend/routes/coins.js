const express = require('express');
const router = express.Router();
const CurrentData = require('../models/CurrentData');
const HistoryData = require('../models/HistoryData');
const fetchCoins = require('../services/fetchCoins');


router.get('/', async (req, res) => {
  const coins = await CurrentData.find({});
  res.json(coins);
});


router.post('/history', async (req, res) => {
  const data = await fetchCoins();
  await HistoryData.insertMany(
    data.map((coin) => ({ ...coin, timestamp: new Date() }))
  );
  res.json({ message: 'History stored successfully' });
});


router.get('/history/:coinId', async (req, res) => {
  const { coinId } = req.params;
  const history = await HistoryData.find({ coinId }).sort({ timestamp: 1 });
  res.json(history);
});

module.exports = router;
