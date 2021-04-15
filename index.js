//import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const path = require("path");
const cors = require("cors");
const routinesRoutes = require('./routes/routines');
const AllErrors = require('./controllers/error');

//set salt rouds for encryption for user login
const SaltRounds = 10;

// declare the app
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

//spin the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server running on port " + port));


//add routes
app.get('/', routinesRoutes);
app.get('/routines', routinesRoutes);
app.get('/:id', routinesRoutes);
app.get('/routines/:id', routinesRoutes);
app.delete('/:id', routinesRoutes);
app.delete('/routines/:id', routinesRoutes);
app.post('/', routinesRoutes);
app.post('/routines', routinesRoutes);
app.put('/:id', routinesRoutes);
app.put('/routines/:id', routinesRoutes);

//handle errors with middlewares
app.use(AllErrors.get404);
app.use(AllErrors.get500);
