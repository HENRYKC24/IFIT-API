//import dependencies
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const path = require('path');
const cors = require('cors');

//set salt rouds for encryption
const SaltRounds = 10;

//configure environment variable
require('dotenv').config();

// declare the app
const app = express();

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));



// create mysql connection
const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'routinesdb',
});

//connect mysql database
mysqlConnection.connect(error => {
  if(!error) {
    console.log('Connected successfully to routinesdb!');
  } else {
    console.log(error);
  }
})

//spin the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server running on port ' + port));
