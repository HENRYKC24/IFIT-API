// import the data base from dabatabe module
const db = require("../utils/database");

// export all routines data class
module.exports = class AllRoutines {
  constructor() {}

  static fetchAll() {
    return db.execute("SELECT * FROM routinestb");
  }

}