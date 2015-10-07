var express = require('express');
var router = express.Router();
var strava = require('strava-v3');
var mongoose = require('mongoose-q')(require('mongoose'), { spread: true });

router.get('/service', function(req, res) {
  strava.segments.explore({
    bounds: '37.017734,-109.025520,40.984229,-105.134964',
    statusCallback: function(err, payload) {
      if (!err) {
      res.json(payload);
      }
    }
    },function(err, payload) {
      console.log(payload);
      res.json(payload);
    });
});

router.get('*', function(req, res) {
  res.sendFile('../client/public/index.html');
});

module.exports = router;
