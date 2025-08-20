
# Advance-Backend-Microservices-Ubar-Project

<p align="center">
  <img src="https://img.shields.io/badge/Status-Learning_Project-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/Frontend-React-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Database-MongoDB-brightgreen?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/Architecture-Microservices-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Realtime-Socket.io-lightgrey?style=for-the-badge&logo=socket.io" />
</p>

🚖 **Advanced Uber-style Ride Hailing Backend**  
📌 Built with **MERN + Microservices** | Features: **Real-time, Scalable, GeoSpatial, Authentication**  
🎯 *Learning Project showcasing backend architecture, realtime communication, and microservices in practice.*

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

````

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
````

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

## 📚 Note

⚠️ This is a **learning project** — not production-ready.
The goal is to **practice MERN + Microservices** and simulate how a real ride-hailing system like Uber can be structured.

---

✨ *Built with passion for learning & backend mastery.* 🚀
