// const { restart } = require('nodemon');
const CreateRoutine = require("../models/createRoutine");

//the async and await is for asynchronous programming
exports.createRoutine = async (req, res, next) => {
  try {
    //get all the data sent from the client and store in data variable
    const data = req.body;
    //sent the data to the database and get back a response
    const response = await CreateRoutine.create(data);

    //Check if mySQL command affected any row. That is, if it created any routine
    if (response[0].affectedRows === 1) {
      //send a success message if it did 
      res.status(201).json("Routine added successfully.");
    } else {
      //send a failure message if it didn't 
      res.status(201).json("Please make sure the endpoint is correct.");
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
