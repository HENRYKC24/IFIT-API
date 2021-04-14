const db = require("../utils/database");

module.exports = class EditOneRoutine {
  constructor() {}

  static edit(data) {
    const {startDate, endDate, routineName, routines} = data.body;
    const id = data.id;
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
    return db.execute(
      "UPDATE routinestb SET startDate = ?, endDate = ?, routineName = ?, routines = ? WHERE routineId = ?",
      [startDate, endDate, routineName, routines, id]
    );
  }
};
