const captainModel = require("../../models/captain.model");
const captainService = require("../../services/captain/captain.service");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, fullName, password, vehicle } = req.body;

  const isCaptainAlreadyExists = await captainModel.findOne({ email });
  if (isCaptainAlreadyExists) {
    return res.status(400).json({ message: "Captain already exists" });
  }

  const hashPassword = await captainModel.hashPassword(password);

  const captain = await captainService.createCaptain({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashPassword,
    color: vehicle.color,
    plateNumber: vehicle.plateNumber,
    vehicleType: vehicle.vehicleType,
    capacity: vehicle.capacity,
  });

  const token = captain.generateAuthToken();

  return res.status(201).json({ token, captain });
};
