# IDHUB
IDHUB is a privacy-friendly Self-Sovereign Identity wallet that allows users to own and manage their digital identity.  
This is a minimal demonstrator aligned with European eIDAS 2.0 / EUDI Wallet goals.  
**Not for production use.**

## Architecture Overview
- `frontend` – React + TypeScript app (user interface)
- `backend` – Node.js + TypeScript server (API endpoints like /verify and /create-did)

## Local development (conceptually)
```bash
cd frontend
npm install
npm run dev
cd backend
npm install
npm run dev
The backend runs on http://localhost:5000

The frontend runs on http://localhost:5173
