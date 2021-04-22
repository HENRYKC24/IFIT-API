const db = require("../utils/database");

module.exports = class Login {
  constructor(id) {
    this.id = id;
  }

  static fetchUser(email, password) {
    return db.execute("SELECT * FROM userstb WHERE email = ? AND password = ?", [email, password]);
  }
};
