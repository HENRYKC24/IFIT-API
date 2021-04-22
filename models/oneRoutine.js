const db = require("../utils/database");

module.exports = class OneRoutine {

  constructor() {};

  static fetchOne(id) {
    return db.execute("SELECT * FROM routinestb WHERE routineId = ?", [id]);
  }

}
