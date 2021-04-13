const db = require("../utils/database");

module.exports = class DeleteOneRoutine {
  constructor() {}

  static delete(id) {
    return db.execute("DELETE FROM routinestb WHERE routineId = ?", [id]);
  }

}