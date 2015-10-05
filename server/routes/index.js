var express = require('express');
var router = express.Router();
var strava = require('strava-v3');

strava.segments.explore(
  { bounds :'39.7348650,-104.9929390' },function(error, data) {
    console.log(data);
  }
);

module.exports = router;
