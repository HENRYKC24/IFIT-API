const db = require("../utils/database");

module.exports = class FetchAllUsers {
  constructor() {};

  static fetchUsers() {
    return db.execute("SELECT * FROM userstb");
  }
};
