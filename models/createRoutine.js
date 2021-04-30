const db = require("../utils/database");

module.exports = class CreateRoutine {
  constructor() {}

  // define a method that creates a routine
  static create(data) {
    //destructure from the data variable that will be passed to create method
    const { startDate, endDate, routineName, routines } = data;
    //use try and catch block to check for error
    try {
      //get the routine object and test it's structure. First convert to norma
      const routinesObject = JSON.parse(routines);
      const singleRoutine = routinesObject[0];
      if (
        //Check if the ruotine object has no day proeryty or no exercises, propty.
        // check if exercise object has no do, series or repition props
        !singleRoutine.day ||
        !singleRoutine.exercises ||
        !singleRoutine.exercises[0].do ||
        !singleRoutine.exercises[0].series ||
        !singleRoutine.exercises[0].repitition
      ) {
        return "Please check routines data format.";
      }
    } catch (error) {
      return "Please check routines data format.";
    }
    //If there is none of startDate, endDate, routineName and routines
    if (!(startDate && endDate && routineName && routines)) {
      return "Please provide startDate, endDate, routineName and routines keys.";
    }
    //construct the query string
    const queryString =
      "INSERT INTO routinestb (startDate, endDate, routineName, routines) VALUES (" +
      "'" +
      startDate +
      "'" +
      ", " +
      "'" +
      endDate +
      "'" +
      ", " +
      "'" +
      routineName +
      "'" +
      ", " +
      "'" +
      routines +
      "'" +
      ")";
    return db.execute(queryString);
  }
};
