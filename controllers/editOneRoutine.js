// const { restart } = require('nodemon');
const EditOneRoutine = require("../models/editOneRoutine");

exports.editOneRoutine = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const body = req.body;
    const response = await EditOneRoutine.edit({id, body});
    
    res.status(202).json(response);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
