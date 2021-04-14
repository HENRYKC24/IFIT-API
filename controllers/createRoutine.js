// const { restart } = require('nodemon');
const CreateRoutine = require("../models/createRoutine");

exports.createRoutine = async (req, res, next) => {
  try {
    const data = req.body;
    const response = await CreateRoutine.create(data);
    
    res.status(201).json(response);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
