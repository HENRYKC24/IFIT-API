const db = require("../utils/database");

module.exports = class AllRoutines {
  constructor() {}

  static fetchAll() {
    return db.execute("SELECT * FROM routinestb");
  }

}