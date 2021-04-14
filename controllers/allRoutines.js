// Controller for getting all the routines

// import all routines data from model
const AllRoutines = require("../models/allRoutines");

// export the function for getting routines data
exports.getAllRoutines = async (req, res, next) => {
  try {
    const [allRoutines] = await AllRoutines.fetchAll();
    
    // prepare routines data for json format
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
