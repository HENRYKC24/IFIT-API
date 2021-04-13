//import mysql
const mysql = require("mysql2");

//import the database configuration data
const connectionObject = require("../config/config");

// create a pool connection
const pool = mysql.createPool(connectionObject);

// export the pool
module.exports = pool.promise();
