var express = require('express');
var router = express.Router();
var strava = require('strava-v3');

strava.segments.explore({
  'bounds' : '41.256796,-73.926947,41.280658,-73.894450',
  'statusCallback' : function(err, payload) {
    console.log(payload);
  }
  },function(err, payload) {
    console.log(payload);
  });


module.exports = router;
