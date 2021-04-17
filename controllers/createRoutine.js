// const { restart } = require('nodemon');
const CreateRoutine = require("../models/createRoutine");

exports.createRoutine = async (req, res, next) => {
  try {
    const data = req.body;
    const response = await CreateRoutine.create(data);
    //Check if mySQL command affected any row. That is, if it created any routine
    if (response[0].affectedRows === 1) {
      res.status(201).json("Routine added successfully.");
    } else {
      res.status(201).json("Please make sure the endpoint is correct.");
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
