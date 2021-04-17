// const { restart } = require('nodemon');
const EditOneRoutine = require("../models/editOneRoutine");

exports.editOneRoutine = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const body = req.body;
    const response = await EditOneRoutine.edit({ id, body });
    //Check if mySQL command affected any row. That is, if it updated any routine
    if (response[0].affectedRows === 1) {
      res.status(201).json("Routine updated successfully.");
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
