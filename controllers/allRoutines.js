// const { restart } = require('nodemon');
const AllRoutines = require("../models/allRoutines");

exports.getAllRoutines = async (req, res, next) => {
  try {
    const [allRoutines] = await AllRoutines.fetchAll();
    

    const doctoredRows = allRoutines.map((row) => {
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
