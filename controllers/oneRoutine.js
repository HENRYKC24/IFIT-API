// const { restart } = require('nodemon');
const SingleRoutine = require("../models/oneRoutine");

exports.getOneRoutine = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const [oneRoutines] = await SingleRoutine.fetchOne(id);
    

    const doctoredRows = oneRoutines.map((row) => {
      try {
        row.routines = JSON.parse(row.routines);
      } catch (error) {
        row.routines = row.routines;
      }
      return row;
    });

    res.status(200).json(doctoredRows);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
