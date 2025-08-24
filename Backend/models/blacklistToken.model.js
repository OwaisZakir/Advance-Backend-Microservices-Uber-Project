// ====================================================
//              🚫 Blacklisted Token Schema
// ====================================================
const mongoose = require("mongoose");

const blacklistedTokenSchema = new mongoose.Schema({
  // The JWT token string
  token: {
    type: String,
    required: true,
    unique: true,
  },

  // Automatically delete after 24 hours
  createdAt: {
    type: Date,
    default: Date.now,
    expires: process.env.JWT_EXPIRES_IN, // 24 hours in seconds
  },
});

// ====================================================
//              📦 Export Model
// ====================================================
const BlacklistedToken = mongoose.model("BlacklistedToken", blacklistedTokenSchema);
module.exports = BlacklistedToken;
