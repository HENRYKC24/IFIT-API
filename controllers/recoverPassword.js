// const { restart } = require('nodemon');
const FetchAllUsers = require("../models/selectAllUsers");

exports.recover = async (req, res, next) => {
  try {
    const [allUsers] = await FetchAllUsers.fetchUsers();
    const providedEmail = req.body.email;
    const user = allUsers.filter((oneUser) => oneUser.email === providedEmail);
    if (user[0]) {
      res.status(200).json({info: "Your password is: " + user[0].password});
    } else {
      res.status(200).json({info: "This email is not registered!"});
    }
  } catch (err) {
    console.log(err);
  }
};
