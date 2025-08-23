const captainModel = require("../../models/captain.model");

module.exports.createCaptain = async ({
  firstName,
  lastName,
  email,
  password,
  color,
  plateNumber,
  vehicleType,
  capacity,
}) => {
  if (!firstName || !email || !password || !color || !plateNumber || !vehicleType || !capacity) {
    throw new Error("All fields are required");
  }

  // 🚀 New captain object
  const captain = new captainModel({
    fullName: {
      firstName,
      lastName,
    },
    email,
    password,
    vehicle: {
      color,
      plateNumber,
      vehicleType,
      capacity,
    },
  });

  // 🔑 Save to database
  await captain.save();

  return captain;
};
