// const { restart } = require('nodemon');
const DeleteOneRoutine = require("../models/deleteOneRoutine");

exports.deleteOneRoutine = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const response = await DeleteOneRoutine.delete(id);
    //Check if mySQL command affected any row. That is, if it delted any routine
    if (response[0].affectedRows === 1) {
      res.status(201).json("Routine removed successfully.");
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
