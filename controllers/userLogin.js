// const { restart } = require('nodemon');
const UserLogin = require("../models/userLogin");

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const [oneUser] = await UserLogin.fetchUser(email, password);
    const resData = {yes: !!oneUser[0], user: oneUser[0]};
    res.status(200).json(resData);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
