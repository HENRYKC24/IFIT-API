//import dependencies
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const path = require("path");
const cors = require("cors");

//Cross Origin Resource Sharing

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

// create remote mysql connection

const pool = mysql.createPool({
  connectionLimit: 20,
  host: process.env.CLOUD_MYSQL_HOST,
  user: process.env.CLOUD_MYSQL_USER,
  password: process.env.CLOUD_MYSQL_PASSWORD,
  database: process.env.CLOUD_MYSQL_DATABASE,
});


// create local mysql connection

// const pool = mysql.createPool({
//   connectionLimit: 20,
//   host: process.env.LOCAL_MYSQL_HOST,
//   user: process.env.LOCAL_MYSQL_USER,
//   password: process.env.LOCAL_MYSQL_PASSWORD,
//   database: process.env.LOCAL_MYSQL_DATABASE,
// });

app.get("/", (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) {
      console.log(error);
    } else {
      connection.query("SELECT * FROM routinestb", (error, rows, field) => {
        if (!error) {
          // const doctoredRows = rows.map((row) => {
          //   row.routines = JSON.parse(row.routines);
          //   return row;
          // })
          res.json(rows);
        } else {
          console.log(error);
        }
      });
    }
  });
});

//GET request for a single routine
app.get("/:id", (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) {
      console.log(error);
    } else {
      connection.query(
        "SELECT * FROM routinestb WHERE routineId = ?",
        [req.params.id],
        (error, rows, field) => {
          if (!error) {
            // const doctoredRows = rows.map((row) => {
            //   row.routines = JSON.parse(row.routines);
            //   return row;
            // })
            res.json(rows);
          } else {
            console.log(error);
          }
        }
      );
    }
  });
});

//DELETE request for a single routine
app.delete("/:id", (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) {
      console.log(error);
    } else {
      connection.query(
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
    }
  });
});

//CREATE a new routine
app.post("/", (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) {
      console.log(error);
    } else {
      const { startDate, endDate, routineName, routines } = (req.body);
      const queryString =
        "INSERT INTO routinestb (startDate, endDate, routineName, routines) VALUES (" +
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
      connection.query(queryString, (error, rows, fields) => {
        if (!error) {
          res.send("Routine inserted successfully!");
        } else {
          res.send(error);
        }
      });
    }
  });
});

//UPDATE a single routine
app.put("/:id", (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) {
      console.log(error);
    } else {
      const { startDate, endDate, routineName, routines } = req.body;
      connection.query(
        "UPDATE routinestb SET startDate = ?, endDate = ?, routineName = ?, routines = ? WHERE routineId = ?",
        [startDate, endDate, routineName, routines, Number(req.params.id)],
        (error, rows, field) => {
          if (!error) {
            res.send("Routine updated successfully")
          } else {
            console.log(error);
          }
        }
      );
    }
  });
});
