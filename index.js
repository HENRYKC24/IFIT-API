//import dependencies
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const path = require("path");
const cors = require("cors");

//set salt rouds for encryption
const SaltRounds = 10;

//configure environment variable
require("dotenv").config();

// declare the app
const app = express();

//spin the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server running on port " + port));

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// create mysql connection
const mysqlConnection = mysql.createConnection({
  host: process.env.CLOUD_MYSQL_HOST,
  user: process.env.CLOUD_MYSQL_USER,
  password: process.env.CLOUD_MYSQL_PASSWORD,
  database: process.env.CLOUD_MYSQL_DATABASE,
});

//connect mysql database
mysqlConnection.connect((error) => {
  if (!error) {
    console.log("Connected successfully to routinesdb!");
  } else {
    console.log(error);
  }
});

// GET request for all routines
app.get("/routines", (req, res) => {
  mysqlConnection.query("SELECT * FROM routinestb", (error, rows, field) => {
    if (!error) {
      res.send(rows);
    } else {
      console.log(error);
    }
  });
});


app.get("/", (req, res) => {
  mysqlConnection.query("SELECT * FROM routinestb", (error, rows, field) => {
    if (!error) {
      res.send(rows);
    } else {
      console.log(error);
    }
  });
});

//GET request for a single routine
app.get("/routines/:id", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM routinestb WHERE routineId = ?",
    [req.params.id],
    (error, rows, field) => {
      if (!error) {
        res.send(rows);
      } else {
        console.log(error);
      }
    }
  );
});

//DELETE request for a single routine
app.delete("/routines/:id", (req, res) => {
  mysqlConnection.query(
    "DELETE FROM routinestb WHERE routineId = ?",
    [Number(req.params.id)],
    (error, rows, field) => {
      if (!error) {
        res.send("Deleted successfully");
      } else {
        console.log(error);
      }
    }
  );
});

//CREATE a new routine
app.post("/routine", (req, res) => {
  const { startDate, endDate, routineName, routines } = req.body;
  const queryString =
    "INSERT INTO routinestb (startDate, endDate, rotineName, routines) VALUES (" +
    "'" +
    startDate +
    "'" +
    ", " +
    "'" +
    endDate +
    "'" +
    ", " +
    "'" +
    routineName +
    "'" +
    ", " +
    "'" +
    routines +
    "'" +
    ")";
  mysqlConnection.query(queryString, (error, rows, fields) => {
    if (!error) {
      res.send("Routine inserted successfully!");
    } else {
      console.log(error);
    }
  });
});

//UPDATE a single routine
app.put("/routines/:id", (req, res) => {
  const { startDate, endDate, routineName, routines } = req.body;
  mysqlConnection.query(
    "UPDATE routinestb SET startDate = ?, endDate = ?, routineName = ?, routines = ? WHERE routineId = ?",
    [startDate, endDate, routineName, routines, Number(req.params.id)],
    (error, rows, field) => {
      if (!error) {
        res.send("Routine updated successfully");
      } else {
        console.log(error);
      }
    }
  );
});
