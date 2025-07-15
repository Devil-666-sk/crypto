require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const syncHistory = require('./cron/syncHistory');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('✅ MongoDB connected');
  syncHistory(); // Start cron job after DB is connected
});

app.use('/api/coins', require('./routes/coins'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
