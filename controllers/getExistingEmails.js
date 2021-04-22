// const { restart } = require('nodemon');
const FetchAllUsers = require("../models/selectAllUsers");

exports.select = async () => {
  try {
    const [allUsers] = await FetchAllUsers.fetchUsers();
    

    const allEmails = allUsers.map((user) => user.email);
    console.log("****", allEmails);
    return allEmails;

  } catch (err) {
    console.log(err);
  }
};
