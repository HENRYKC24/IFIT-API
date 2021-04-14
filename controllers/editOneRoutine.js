// const { restart } = require('nodemon');
const EditOneRoutine = require("../models/editOneRoutine");

exports.editOneRoutine = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const body = req.body;
    const response = await EditOneRoutine.edit({id, body});
    response[0].affectedRows === 1
      ? res.status(202).json("Routine changed successfully.")
      : res.status(202).json("Please make sure the endpoint is correct.");
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
