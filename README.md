## Tech Stack Used

| Layer      | Technology                                  |
| ---------- | ------------------------------------------- |
| Frontend   | React.js, Tailwind CSS                      |
| Backend    | Node.js, Express.js                         |
| Database   | MongoDB (via Mongoose)                      |
| API Source | [CoinGecko API](https://www.coingecko.com/) |
| Scheduler  | `node-cron`                                 |
| Deployment | Render (Backend), Vercel (Frontend)         |

---

## Project Features

- 📈 Displays top 10 cryptocurrencies by market cap.
- 🔄 Auto-refreshes every 30 minutes in frontend.
- 💾 Backend fetches and stores both current and historical data.
- 🕒 Cron job syncs historical prices every hour.
- 🔍 Search and filter by coin name.
- 📡 RESTful API endpoints:
  - `GET /api/coins` – current data
  - `POST /api/coins/history` – save snapshot
  - `GET /api/coins/history/:coinId` – fetch historical data 

---

## Setup Instructions

###  Clone the Repository

```bash
git clone https://github.com/Devil-666-sk/crypto.git
cd crypto
npm install
frontend - npm run dev
backend - npm run start

---

##  How the Cron Job Works

- `node-cron` runs every hour (`0 * * * *`)
- It fetches the top 10 coins from CoinGecko API
- Updates the `current` collection with the latest snapshot
- Appends a record to the `historical` collection for tracking over time
- Logs the sync timestamp to console (and viewable in Render logs)



---


##  Live Demo

- 🔗 **Frontend (Vercel)**: [https://crypto-eight-zeta.vercel.app/]
- 🔗 **Backend API (Render)**: [https://crypto-132j.onrender.com/api/coins]
---


🔹 Frontend: Vercel
Steps:

Go to https://vercel.com

Click "New Project" and import the GitHub repository

Choose the /frontend folder as the root

Add an environment variable:

VITE_API_BASE_URL=https://crypto-132j.onrender.com/api

Vercel will auto-detect Vite or React and deploy the app

After deployment, you'll get a public URL like:

arduino
Copy
Edit
https://crypto-eight-zeta.vercel.app/




🔹 Backend: Render
Steps:

Visit https://render.com

Click "New Web Service"

Connect your GitHub repo and select the /backend folder

Set the following Environment Variables:

MONGO_URI=mongodb+srv://Shubham:1iF10kPQQyuWEIbk@cluster0.e7vlgk1.mongodb.net/

PORT=5000

Build command: npm install

Start command: npm start

After deployment, you'll get a URL like:

arduino
Copy
Edit
https://crypto-132j.onrender.com



🔹 Database: MongoDB Atlas
Steps:

Go to https://cloud.mongodb.com

Create a free cluster

Create a database named crypto-db (or any name)

Create two collections:

current

historical

Whitelist your IP or allow access from anywhere (0.0.0.0/0)

Copy the connection string and add to backend .env as:

bash
Copy
Edit


MONGO_URI=mongodb+srv://Shubham:1iF10kPQQyuWEIbk@cluster0.e7vlgk1.mongodb.net/


🔄 Cron Job Verification
The backend includes a node-cron job that runs every hour

You can verify that it’s running by checking the Render Logs




