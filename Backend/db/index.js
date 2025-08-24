// ====================================================
//              💾 Database Configuration
// ====================================================
const mongoose = require("mongoose"); // MongoDB ODM

// ====================================================
//              🔗 Database Connection Function
// ====================================================
function connectDB() {
  mongoose
    .connect(process.env.MONGODB_URI) // MongoDB connection URI from .env
    .then(() => {
      console.log("✅ MongoDB connected successfully");
    })
    .catch((err) => {
      console.error("❌ MongoDB connection error:", err);
    });
}

// ====================================================
//              📦 Export Module
// ====================================================
module.exports = connectDB;
