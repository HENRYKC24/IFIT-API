// const { restart } = require('nodemon');
const CreateRoutine = require("../models/createRoutine");

exports.createRoutine = async (req, res, next) => {
  try {
    const data = req.body;
    const response = await CreateRoutine.create(data);
    response[0].affectedRows === 1
      ? res.status(201).json("Routine added successfully.")
      : res.status(201).json("Please make sure the endpoint is correct.");
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
