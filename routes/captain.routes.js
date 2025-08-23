const captainController = require("../controllers/captain/captain.controller");
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

console.log("Captain routes loaded");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("fullName.firstName").isLength({ min: 3 }).withMessage("First name must be at least 3 characters long"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
    body("vehicle.color").isLength({ min: 3 }).withMessage("Color must be at least 3 characters long"),
    body("vehicle.vehicleType").isLength({ min: 3 }).withMessage("Vehicle type must be at least 3 characters long"),
    body("vehicle.capacity").isInt({ min: 1 }).withMessage("Capacity must be at least 1"),
    body("vehicle.plateNumber").isLength({ min: 3 }).withMessage("Vehicle number must be at least 3 characters long"),
  ],
  captainController.registerCaptain
);

module.exports = router;
