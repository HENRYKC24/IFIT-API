const db = require("../utils/database");

module.exports = class OneRoutine {

  constructor(id) {
    this.id = id;
  }

  static fetchOne(id) {
    console.log(id);
    return db.execute("SELECT * FROM routinestb WHERE routineId = ?", [id]);
  }

}
