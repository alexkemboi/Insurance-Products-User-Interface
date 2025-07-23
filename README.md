
# 🛡️ Insurance App

A full-stack web application for managing insurance products with role-based login. This project is built with **Next.js (App Router)** using **TypeScript**, **Tailwind CSS**, and **React**. All data (users and products) is stored in-memory using mock data, so no external database setup is needed.

---

## 🚀 Features

- 🔐 **Mock Login API** with hardcoded users (admin, student, teacher)
- 📦 **Insurance Product Management** with mock data
- 🖥️ **Dashboard** showing a table of insurance products
- 💅 Clean, responsive UI with Tailwind CSS
- 🔧 Fully functional mock APIs for CRUD operations

---

## 📦 Tech Stack

- **Frontend**: React, Next.js (App Router), TypeScript, TailwindCSS
- **Backend**: Next.js API Routes (App Router style)
- **State**: useState, useEffect (no Redux)
- **Data**: Mock arrays (in-memory, resets on reload)

---

## 🔑 Mock Login Credentials

| Email               | Password     | Role     |
|---------------------|--------------|----------|
| admin@college.com   | 123          | admin    |
| student@college.com | student123   | student  |
| al@gmail.com        | al@gmail.com | teacher  |

---

## 📂 Project Structure

\`\`\`
/app
│
├── api/
│   ├── login/route.ts         # Handles mock login
│   └── products/route.ts      # CRUD for insurance products
│
├── dashboard/page.tsx         # Main dashboard
├── layouts/                   # Shared layout components
├── TopCards.tsx               # Placeholder for future metrics
└── page.tsx                   # Root entry page
\`\`\`

---

## ⚙️ Installation & Setup

\`\`\`bash
# Clone the repository
git clone https://github.com/your-username/insurance-app.git
cd insurance-app

# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Then go to \`http://localhost:3000\`.

---

## 📬 API Endpoints

### 1. `/api/login` (POST)

Authenticates users against mock credentials.

**Request Body**:
\`\`\`json
{
  "email": "admin@college.com",
  "password": "123"
}
\`\`\`

**Success Response**:
\`\`\`json
{
  "message": "Login successful",
  "user": {
    "email": "admin@college.com",
    "role": "admin"
  }
}
\`\`\`

**Error Response**:
\`\`\`json
{
  "error": "Invalid credentials"
}
\`\`\`

---

### 2. `/api/products` (GET, POST, PUT, DELETE)

Mock in-memory insurance products.

#### Example Product:
\`\`\`json
{
  "id": 1,
  "name": "Health Protect Plus",
  "type": "Health",
  "coverage": "Full",
  "price": 120
}
\`\`\`

#### `GET`
Returns all products.

#### `POST`
Adds a new product.

**Body**:
\`\`\`json
{
  "name": "Auto Secure",
  "type": "Auto",
  "coverage": "Liability",
  "price": 90
}
\`\`\`

#### `PUT`
Updates an existing product.

**Body**:
\`\`\`json
{
  "id": 1,
  "name": "Updated Name",
  "price": 150
}
\`\`\`

#### `DELETE`
Deletes a product.

**Query**: \`?id=1\`

---

## 🧪 Sample Mock Data

### Users (in \`login\` route):
\`\`\`ts
const users = [
  { email: "admin@college.com", password: "123", role: "admin" },
  { email: "student@college.com", password: "student123", role: "student" },
  { email: "al@gmail.com", password: "al@gmail.com", role: "teacher" }
];
\`\`\`

### Products (in \`products\` route):
\`\`\`ts
let products = [
  { id: 1, name: "Health Protect Plus", type: "Health", coverage: "Full", price: 120 },
  { id: 2, name: "Auto Secure", type: "Auto", coverage: "Collision + Liability", price: 90 },
  { id: 3, name: "Home Shield", type: "Home", coverage: "Fire, Theft, Natural Disasters", price: 150 }
];
\`\`\`

> ⚠️ Changes are not persistent — data resets on server restart.



## 📊 UI Overview

- Dashboard displays all insurance products in a table.
- Login screen accepts mock credentials.
- Product operations (add/update/delete) via API.
- Responsive design with Tailwind.

---

## ✨ Future Improvements

- Add JWT authentication with secure sessions
- Connect to a real database (e.g. PostgreSQL, MySQL)
- Add role-based routing and dashboards
- Integrate real-time updates or websocket support
- Pagination, sorting, and filtering for product table



## 🙋‍♂️ Author

Made with ❤️ by **[Your Name]**

- GitHub: [github.com/your-alexkemboi](https://github.com/alexkemboi/Insurance-Products-User-Interface.git)
- LinkedIn: [linkedin.com/in/alex-kemboi-49b5a5276](https://www.linkedin.com/in/alex-kemboi-49b5a5276/)

---
