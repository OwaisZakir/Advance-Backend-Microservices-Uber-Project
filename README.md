# Advance-Backend-Microservices-Uber-Project

🚖 **Advanced Uber-style Ride Hailing Backend**
📌 Built with **MERN + Microservices** | Features: **Real-time, Scalable, GeoSpatial, Authentication**
🎯 _Learning Project showcasing backend architecture, realtime communication, and microservices in practice._

---

## 📌 Overview

This project is a **learning-focused Uber-style ride hailing system** built with **MERN stack** and a **microservices architecture**.
It simulates how a real-world ride-sharing app like Uber works: riders request trips, drivers accept, live tracking happens, and payments are processed.

---

## 🚀 Key Features

- 🔐 **Authentication & Authorization** (JWT, role-based: Rider, Driver, Admin)
- 🌍 **GeoSpatial Queries** using MongoDB `2dsphere` (find nearby drivers)
- ⚡ **Real-time Communication** with Socket.io (driver–rider live updates)
- 🧩 **Microservices Architecture** (Auth, Users, Drivers, Trips, Payments)
- 💳 **Payment Flow** (mock/Stripe for learning)
- 📊 **Scalable Project Structure** with API gateway & shared modules
- 📝 **Logging & Activity Tracking** for trip lifecycle

---

## 🛠️ Tech Stack

- **Frontend:** React, TailwindCSS (for Rider/Driver/Admin dashboards)
- **Backend:** Node.js, Express, Socket.io
- **Database:** MongoDB (with GeoSpatial queries), Redis (for caching/sessions)
- **Auth:** JWT + Role-based access control
- **Others:** Docker (for containerized services), Mapbox/Google Maps APIs

---

## 📂 Project Structure (planned)

```
/server
  /services
    auth/
    users/
    drivers/
    trips/
    payments/
  /gateway          # API Gateway
  /common           # shared utilities, constants, models
/client-rider       # React frontend for riders
/client-driver      # React frontend for drivers
/admin-dashboard    # Admin UI
```

---

## 🎯 Learning Goals

- Understand **microservices design** in Node.js
- Practice **real-time systems** with Socket.io
- Work with **GeoSpatial data** in MongoDB
- Learn **event-driven architecture** for ride lifecycle
- Build a **scalable and modular project** for future apps

---

## ⚡ Getting Started

1. Clone the repo

   ```bash
   git clone https://github.com/OwaisZakir/Advance-Backend-Microservices-Ubar-Project.git
   ```

2. Install dependencies for backend services

   ```bash
   cd server/services/auth && npm install
   ```

   (repeat for other services as needed)

3. Setup environment variables (`.env`)

   ```
   MONGO_URI=your_mongo_url
   JWT_SECRET=your_secret
   SOCKET_PORT=5000
   ```

4. Run services

   ```bash
   npm start
   ```

5. (Optional) Run client apps in their respective folders

---

## 📚 API Documentation

### **User Routes**

#### **POST /users/register**

Registers a new user into the system.

**Request Body:**

```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123"
}
```

**Responses:**

- ✅ **201 Created** → Returns `token` and `user` object
- ❌ **400 Bad Request** → Validation errors
- ❌ **500 Internal Server Error** → Server issues

#### **POST /users/login**

Logs in an existing user.

**Request Body:**

```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

**Responses:**

- ✅ **200 OK** → Returns `token` and `user` object
- ❌ **400 Bad Request** → Validation errors
- ❌ **401 Unauthorized** → Invalid email or password
- ❌ **500 Internal Server Error** → Server issues

#### **GET /users/profile**

Fetches the authenticated user's profile.

**Responses:**

- ✅ **200 OK** → Returns `user` object
- ❌ **401 Unauthorized** → Invalid or missing token

#### **GET /users/logout**

Logs out the authenticated user and blacklists the token.

**Responses:**

- ✅ **200 OK** → User logged out successfully
- ❌ **401 Unauthorized** → Invalid or missing token

---

### **Captain Routes**

#### **POST /captain/register**

Registers a new captain (driver).

**Request Body:**

```json
{
  "fullName": {
    "firstName": "Ali",
    "lastName": "Khan"
  },
  "email": "alikhan@example.com",
  "password": "password123",
  "vehicle": {
    "vehicleType": "car",
    "color": "black",
    "plateNumber": "ABC-123",
    "capacity": 4
  }
}
```

**Responses:**

- ✅ **201 Created** → Returns `token` and `captain` object
- ❌ **400 Bad Request** → Validation errors / Captain already exists
- ❌ **500 Internal Server Error** → Server issues

#### **POST /captain/login**

Logs in an existing captain.

**Request Body:**

```json
{
  "email": "alikhan@example.com",
  "password": "password123"
}
```

**Responses:**

- ✅ **200 OK** → Returns `token` and `captain` object
- ❌ **400 Bad Request** → Validation errors
- ❌ **401 Unauthorized** → Invalid email or password
- ❌ **500 Internal Server Error** → Server issues

#### **GET /captain/profile**

Fetches the authenticated captain's profile.

**Responses:**

- ✅ **200 OK** → Returns `captain` object
- ❌ **401 Unauthorized** → Invalid or missing token

#### **GET /captain/logout**

Logs out the authenticated captain and blacklists the token.

**Responses:**

- ✅ **200 OK** → Captain logged out successfully
- ❌ **401 Unauthorized** → Invalid or missing token

---

## 📚 Note

⚠️ This is a **learning project** — not production-ready.
The goal is to **practice MERN + Microservices** and simulate how a real ride-hailing system like Uber can be structured.

---

✨ _Built with passion for learning & backend mastery._ 🚀
