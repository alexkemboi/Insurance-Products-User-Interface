# Insurance Products Application - Backend (Node.js)

## 📋 Overview
A Node.js + Express backend providing a secured REST API for insurance products, protected with OAuth 2.0 (Resource Owner Password Credentials Grant) using JWT.

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v14+ recommended)
- npm (Node Package Manager)

### Installation
```bash
# Clone the repository
git clone <your-repository-url>
cd insurance-backend

# Install dependencies
npm install

# Run the server
npm start
```
The server runs by default on `http://localhost:3000`.

---

## 🔒 OAuth 2.0 Configuration

- **Client Credentials:**
  - `client_id`: `test_client`
  - `client_secret`: `test_secret`

- **User Credentials:**
  - `username`: `user1`
  - `password`: `pass1`

- **Token Expiry:** 1 hour

---

## 🔗 API Endpoints & Sample Requests

### 1. Get Access Token
**Endpoint:**
```
POST /oauth/token
```
**Request Body:**
```json
{
  "username": "user1",
  "password": "pass1",
  "client_id": "test_client",
  "client_secret": "test_secret"
}
```
**Response:**
```json
{
  "access_token": "<JWT_TOKEN>",
  "token_type": "Bearer",
  "expires_in": "1h"
}
```

### 2. Get Insurance Products
**Endpoint:**
```
GET /api/products
```
**Headers:**
```
Authorization: Bearer <JWT_TOKEN>
```
**Response:**
```json
[
  {
    "id": "prod_001",
    "name": "Premium Health Plan",
    "type": "HEALTH",
    "coverage": "Full medical + dental",
    "price": 200.0
  },
  {
    "id": "prod_002",
    "name": "Basic Car Insurance",
    "type": "AUTO",
    "coverage": "Accident + Liability",
    "price": 120.0
  },
  {
    "id": "prod_003",
    "name": "Home Safe Plan",
    "type": "HOME",
    "coverage": "Fire + Theft",
    "price": 80.0
  }
]
```

### 3. Unauthorized Requests
If no token or an invalid token is provided:
```json
{
  "error": "Access token required"
}
```
or
```json
{
  "error": "Invalid token"
}
```

---

## ✅ Additional Notes
- This implementation uses **mock data** and **hardcoded credentials** for demonstration purposes only.
- For production, consider using a secure OAuth provider and a persistent database.

---

## 🚀 Frontend Setup (Optional)
- A React/Angular/Vue frontend can be developed to:
  1. Authenticate via `/oauth/token`.
  2. Store the access token.
  3. Fetch products from `/api/products`.

Let me know if you need frontend code or further guidance!
