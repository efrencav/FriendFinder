// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var express = require('express');
var path = require("path");
var router = express.Router();

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
})

router.get("/", function (req, res) {
  res.sendfile(path.join(__dirname, "../public/home.html"));
})

module.exports = router;