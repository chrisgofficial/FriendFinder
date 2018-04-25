// Setting up dependencies
const path = require('path');
var questionsArray = require('../data/questions.js');

// Routing paths
module.exports = function (app) {
  // GET route to /survey which should display survey page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  //  Default, catch-all route that leads to home.html, displays home page
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

};