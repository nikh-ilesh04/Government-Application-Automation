# GovAssist - Government Application Automation

GovAssist is a full-stack academic demo SaaS application for government-application workflow automation.

## Tech Stack
- Frontend: React + TypeScript + Tailwind + Vite
- Backend: Node.js + Express + TypeScript + Prisma
- Database: PostgreSQL
- Auth: JWT + role-based access

## Features
- Authentication with Citizen / Agent / Admin roles
- Consent recording
- Mock Aadhaar/PAN KYC endpoints
- Document upload + OCR mock extraction
- State-machine-based workflow
- Government portal simulation with configurable failure rate (default 30%)
- Retry engine with max 3 retries
- eSign mock with OTP
- Admin analytics/retry stats
- Billing and audit log models

## Project Structure
- `backend/` Express + Prisma API
- `frontend/` React app
- `docs/schema.sql` SQL schema reference
- `docs/api-endpoints.md` API list

## Run with Docker
```bash
docker-compose up --build
```

Services:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- DB: localhost:5432

## Local Development
### Backend
```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run seed
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Seeded Admin User
- Email: `admin@govassist.local`
- Password: `admin123`

