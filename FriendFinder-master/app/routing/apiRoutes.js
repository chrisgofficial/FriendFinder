// Setting up dependencies
const path = require('path');
const friendData = require('../data/friends.js');
const questionData = require('../data/questions.js');

module.exports = function(app) {
  
  // GET route with url: /api/friends, display JSON of all possible friends
  app.get('/api/friends', function (req, res) {
    res.json(friendData);
  })
  app.get('/api/questions', function (req, res) { // try to set up similar for questions
    res.json(questionData);
  })
  // POST routes /api/friends, handle incoming survey results, route will also handle compatibility logic
  app.post('/api/friends', function (req, res) {
    var newFriendScore = req.body.scores;
    var scoreDiffArr = [];
    var compare = 0;

    // logic for finding the difference in value between the new user and current users from database
    for (var i=0; i < friendData.length; i++) {
      var scoreDiff = 0;
      for (var j=0; j < newFriendScore.length; j++) {
        var friendDataScore = friendData[i].scores[j];
        scoreDiff += Math.abs(parseInt(newFriendScore[j]) - parseInt(friendDataScore));
      }
      // pushes the difference of the score into the scoreDiffArr for comparison later
      scoreDiffArr.push(scoreDiff);
    };

    // cycle through users to find best match
    for (var i=0; i < scoreDiffArr.length; i++) {
      if (scoreDiffArr[i] <= scoreDiffArr[compare]) {
        compare = i; // compares each user in array with lowest score being the best match
      }
    }

    console.log(scoreDiffArr);
    var specialFriend = friendData[compare]; // lowest score of the group
    console.log(specialFriend.name);
    friendData.push(req.body);
    res.json(specialFriend);
  });
};

/** Psuedo Code to finish homework
 ** The all js files work, if ran as is, the program will generate a 'special friend' in the console.
 ** Remaining works are to code html with a modal to product a pop up of the 'special friend;
 ** The modal will be in the home.html file and will require a click event and gets tthe res.json from this file and generates into html file **/