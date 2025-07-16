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
  - `GET /api/coins/history/:coinId` – fetch historical data (optional)

---

## Setup Instructions

### 1. Clone the Repository

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



