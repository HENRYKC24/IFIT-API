//import dependencies
// const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
// const bcrypt = require("bcrypt");
// const path = require("path");
const cors = require("cors");
const routinesRoutes = require('./routes/routines');
// const AllErrors = require('./controllers/error');

//set salt rouds for encryption
// const SaltRounds = 10;

//configure environment variable
// require("dotenv").config();

// declare the app
const app = express();

// const ports = process.env.PORT || 5000;
//spin the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server running on port " + port));



app.get('/', routinesRoutes);
app.get('/routines', routinesRoutes);
app.get('/:id', routinesRoutes);
app.get('/routines/:id', routinesRoutes);
app.delete('/:id', routinesRoutes);
app.delete('/routines/:id', routinesRoutes);
app.post('/', routinesRoutes);
app.post('/routines', routinesRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
 });


app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// // create remote mysql connection

// const pool = mysql.createPool({
//   connectionLimit: 20,
//   host: process.env.CLOUD_MYSQL_HOST,
//   user: process.env.CLOUD_MYSQL_USER,
//   password: process.env.CLOUD_MYSQL_PASSWORD,
//   database: process.env.CLOUD_MYSQL_DATABASE,
// });


// create local mysql connection

// const pool = mysql.createPool({
//   connectionLimit: 20,
//   host: process.env.LOCAL_MYSQL_HOST,
//   user: process.env.LOCAL_MYSQL_USER,
//   password: process.env.LOCAL_MYSQL_PASSWORD,
//   database: process.env.LOCAL_MYSQL_DATABASE,
// });

// mariaFERNANDA1234& 

// app.get("/", (req, res) => {
//   pool.getConnection((error, connection) => {
//     if (error) {
//       console.log(error);
//     } else {
//       connection.query("SELECT * FROM routinestb", (error, rows, field) => {
//         if (!error) {
//           const doctoredRows = rows.map((row) => {
//             try {
//               row.routines = JSON.parse(row.routines);
//             } catch (error) {
//               row.routines = row.routines;
//             }
//             return row;
//           })
//           res.json(doctoredRows);
//         } else {
//           console.log(error);
//         }
//       });
//     }
//   });
// });

//GET request for a single routine
// app.get("/:id", (req, res) => {
//   pool.getConnection((error, connection) => {
//     if (error) {
//       console.log(error);
//     } else {
//       connection.query(
//         "SELECT * FROM routinestb WHERE routineId = ?",
//         [req.params.id],
//         (error, rows, field) => {
//           if (!error) {
//             const doctoredRows = rows.map((row) => {
//               try {
//                 row.routines = JSON.parse(row.routines);
//               } catch (error) {
//                 row.routines = row.routines;
//               }
//               return row;
//             })
//             res.json(doctoredRows);
//           } else {
//             console.log(error);
//           }
//         }
//       );
//     }
//   });
// });

// //DELETE request for a single routine
// app.delete("/:id", (req, res) => {
//   pool.getConnection((error, connection) => {
//     if (error) {
//       console.log(error);
//     } else {
//       connection.query(
//         "DELETE FROM routinestb WHERE routineId = ?",
//         [Number(req.params.id)],
//         (error, rows, field) => {
//           if (!error) {
//             res.send("Deleted successfully");
//           } else {
//             console.log(error);
//           }
//         }
//       );
//     }
//   });
// });

// //CREATE a new routine
// app.post("/", (req, res) => {
//   pool.getConnection((error, connection) => {
//     if (error) {
//       console.log(error);
//     } else {
//       const { startDate, endDate, routineName, routines } = (req.body);
//       try{
//         const tester = JSON.parse(routines);
//         console.log(tester[0].day);
//         if(!tester[0].day || !tester[0].exercises || !tester[0].exercises[0].do || !tester[0].exercises[0].series || !tester[0].exercises[0].repitition) {
//           res.send('Please check routines data format.');
//           return;
//         }
//       } catch (error) {
//         console.log('>>>>', error);
//         res.send('Please check routines data format.');
//         return;
//       }
//       if(!(startDate && endDate && routineName && routines)) {
//         res.send('Please provide startDate, endDate, routineName and routines keys.');
//         return;
//       }
//       const queryString =
//         "INSERT INTO routinestb (startDate, endDate, routineName, routines) VALUES (" +
//         "'" +
//         startDate +
//         "'" +
//         ", " +
//         "'" +
//         endDate +
//         "'" +
//         ", " +
//         "'" +
//         routineName +
//         "'" +
//         ", " +
//         "'" +
//         routines +
//         "'" +
//         ")";
//       connection.query(queryString, (error, rows, fields) => {
//         if (!error) {
//           res.send("Routine inserted successfully!");
//         } else {
//           res.send(error);
//         }
//       });
//     }
//   });
// });

// //UPDATE a single routine
// app.put("/:id", (req, res) => {
//   pool.getConnection((error, connection) => {
//     if (error) {
//       console.log(error);
//     } else {
//       const { startDate, endDate, routineName, routines } = req.body;
//       connection.query(
//         "UPDATE routinestb SET startDate = ?, endDate = ?, routineName = ?, routines = ? WHERE routineId = ?",
//         [startDate, endDate, routineName, routines, Number(req.params.id)],
//         (error, rows, field) => {
//           if (!error) {
//             res.send("Routine updated successfully");
//           } else {
//             console.log(error);
//           }
//         }
//       );
//     }
//   });
// });
