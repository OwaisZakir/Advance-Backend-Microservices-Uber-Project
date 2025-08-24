const userModel = require("../../models/user.model");

module.exports.createUser = async ({ firstName, lastName, email, password }) => {
  if (!firstName || !email || !password) {
    throw new Error("All fields are required");
  }
  const user = new userModel({
    fullName: {
      firstName: firstName,
      lastName: lastName,
    },
    email: email,
    password: password,
    
  });

  await user.save();
  return user;
};
