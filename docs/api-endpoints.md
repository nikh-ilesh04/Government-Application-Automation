# GovAssist API Endpoints

## Auth
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/profile

## User
- GET /api/users/:id
- POST /api/users/consent

## KYC
- POST /api/kyc/aadhaar
- POST /api/kyc/pan

## OCR
- POST /api/ocr/upload

## Applications
- POST /api/applications/start
- GET /api/applications/:id
- POST /api/applications/:id/validate
- POST /api/applications/:id/submit
- POST /api/applications/:id/retry

## eSign
- POST /api/esign/:applicationId

## Admin
- GET /api/admin/applications
- GET /api/admin/analytics
- GET /api/admin/retry-stats
