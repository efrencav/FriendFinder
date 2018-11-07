var express = require("express");
var path = require("path");
var fs = require("fs");
var mysql = require("mysql");
var friends = require("./app/data/friends");

var app = express();

app.use(require('./app/routing/apiRoutes'))
app.use(require('./app/routing/htmlRoutes'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('data'));

var PORT = process.env.PORT || 8080;

app.get('/app/data/questions.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'app/data', 'questions.js'));
});

app.get('api/friends', function (req, res) { 
  // if (err) throw err;
  return res.json(path.join(__dirname, 'app/data', 'friends.json'));
})

app.listen(PORT, function () {
  console.log("listening on port: http://localhost:" + PORT)
})