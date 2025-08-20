// ====================================================
//              🌐 Core Imports & Config
// ====================================================
const dotenv = require("dotenv"); // Load environment variables
dotenv.config(); // Initialize dotenv

const express = require("express"); // Express framework
const cookieParser = require("cookie-parser");
const cors = require("cors"); // Enable CORS
const connectDB = require("./db"); // MongoDB connection utility
const userRoutes = require("./routes/user.routes"); // User routes

// ====================================================
//              🚀 Initialize Express App
// ====================================================
const app = express();

// ====================================================
//              💾 Connect to Database
// ====================================================
connectDB(); // Establish MongoDB connection

// ====================================================
//              🛡️ Middlewares
// ====================================================
app.use(cors()); // Enable cross-origin requests
app.use(express.json()); // Parse JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded payloads
app.use(cookieParser()); // Parse cookies

// ====================================================
//              📍 Routes
// ====================================================
app.get("/", (req, res) => {
  res.send("Hello World! 🚀 Backend is running...");
});

app.use("/api/v1/users", userRoutes); // User-related routes
// ====================================================
//              📦 Export App
// ====================================================
module.exports = app;
