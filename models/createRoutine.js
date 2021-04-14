const db = require("../utils/database");

module.exports = class CreateRoutine {
  constructor() {}

  static create(data) {
    const { startDate, endDate, routineName, routines } = data;
    try {
      const tester = JSON.parse(routines);
      if (
        !tester[0].day ||
        !tester[0].exercises ||
        !tester[0].exercises[0].do ||
        !tester[0].exercises[0].series ||
        !tester[0].exercises[0].repitition
      ) {
        return "Please check routines data format.";
      }
    } catch (error) {
      return "Please check routines data format.";
    }
    if (!(startDate && endDate && routineName && routines)) {
      return "Please provide startDate, endDate, routineName and routines keys.";
    }
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
