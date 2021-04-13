const db = require("../utils/database");

module.exports = class CreateRoutine {
  constructor() {}

  static create(data) {
    console.log(data);
    const {startDate, endDate, routineName, routines} = data;
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

}