// const { restart } = require('nodemon');
const RegisterUser = require("../models/registerUser");
const FetchAllUsers = require("./getExistingEmails");

exports.register = async (req, res, next) => {
  try {
    const {userName, email, password} = req.body;
    const existingEmails = await FetchAllUsers.select();
    
    const canRegister = existingEmails.every(registeredEmail => email !== registeredEmail);

    if(canRegister) {

      await RegisterUser.register(userName, email, password);
      res.status(200).json("Registration success!");
    } else {

      res.status(200).json("This email is already registered");
    }

  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
