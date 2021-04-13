// const { restart } = require('nodemon');
const DeleteOneRoutine = require("../models/deleteOneRoutine");

exports.deleteOneRoutine = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const response = await DeleteOneRoutine.delete(id);
    
    res.status(202).json(response);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
