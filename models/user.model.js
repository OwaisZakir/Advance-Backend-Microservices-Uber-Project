// ====================================================
//              👤 User Model (Mongoose Schema)
// ====================================================
const mongoose = require("mongoose"); // MongoDB ODM
const bcrypt = require("bcrypt"); // Password hashing
const jwt = require("jsonwebtoken"); // Token generation

// ====================================================
//              📝 User Schema Definition
// ====================================================
const userSchema = new mongoose.Schema({
  // ---------- Full Name ----------
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

  // ---------- Email ----------
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
});

// ====================================================
//              🔑 Instance Methods
// ====================================================

// Generate JWT Auth Token
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { id: this._id }, // Payload
    process.env.JWT_SECRET, // Secret Key
    { expiresIn: process.env.JWT_EXPIRES_IN } // Expiry Time from .env
  );
  return token;
};

// Compare Entered Password with Hashed Password
userSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

// ====================================================
//              ⚙️ Static Methods
// ====================================================

// Hash Password before saving user
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10); // Salt Rounds = 10
};

// ====================================================
//              📦 Export Model
// ====================================================
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
