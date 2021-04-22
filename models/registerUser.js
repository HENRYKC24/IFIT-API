const db = require("../utils/database");

module.exports = class RegisterUser {
  constructor() {};

  static register(userName, email, password) {
    const queryString = "INSERT INTO userstb (userName, email, password) VALUES (?, ?, ?)";
    return db.execute(queryString, [userName, email, password]);
  }
};
