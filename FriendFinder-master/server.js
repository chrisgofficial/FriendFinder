// Setting up app dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// Create Express server and set the PORT
const app = express();
const PORT = process.env.PORT || 4000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Main Routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Listening on PORT
app.listen(4000, function () {
  console.log(`App listening on PORT: ${PORT}`);
});

// PLEASE NOTE: see apiRoutes.js for comments on Psuedo code to finish the homework
