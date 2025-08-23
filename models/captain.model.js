const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // Password hashing
const jwt = require("jsonwebtoken"); // Token generation

const captainSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      minLength: [3, "First name must be at least 3 characters long"],
    },
    lastName: {
      type: String,
      minLength: [3, "Last name must be at least 3 characters long"],
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    minLength: [5, "Email must be at least 5 characters long"],
  },

  // ---------- Password ----------
  password: {
    type: String,
    required: true,
    select: false, // Prevents password from being returned in queries
  },

  // ---------- Socket ID ----------
  socketId: {
    type: String,
    // required: true,
  },

  // ---------- Account Status ----------
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },

  // ---------- Vehicle Info ----------
  vehicle: {
    vehicleType: {
      type: String,
      enum: ["car", "motorcycle", "auto"],
      required: true,
    },
    color: {
      type: String,
      required: true,
      minLength: [3, "Color must be at least 3 characters long"],
    },
    plateNumber: {
      type: String,
      required: true,
      unique: true,
      match: [/^[A-Z0-9-]+$/, "Please enter a valid plate number"],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity must be at least 1 seat"],
    },
  },

  location: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
});

// ====================================================
//              🔑 Instance Methods
// ====================================================

// Generate JWT Auth Token
captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { id: this._id }, // Payload
    process.env.JWT_SECRET, // Secret Key
    { expiresIn: process.env.JWT_EXPIRES_IN } // Expiry Time from .env
  );
  return token;
};

// Compare Entered Password with Hashed Password
captainSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

// ====================================================
//              ⚙️ Static Methods
// ====================================================

// Hash Password before saving captain
captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10); // Salt Rounds = 10
};

const Captain = mongoose.model("captain", captainSchema);
module.exports = Captain;
