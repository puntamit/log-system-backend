# Backend - log-system

## Setup (local dev)
1. Copy `.env.example` to `.env` and set DATABASE_URL.
2. Install dependencies:
   ```
   npm install
   ```
3. Seed example data:
   ```
   npm run seed
   ```
4. Start dev server:
   ```
   npm run dev
   ```
API endpoints:
- GET /api/problems
- GET /api/users
- GET /api/locations
- POST /api/logs
- GET /api/logs
- GET /api/export  -> download logs.xlsx
