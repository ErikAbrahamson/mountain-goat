var express = require('express');
var router = express.Router();
var strava = require('strava-v3');
var mongoose = require('mongoose-q')(require('mongoose'), { spread: true });

router.get('/service', function(req, res) {
  strava.segments.explore({
    bounds: '39.6998089,-105.24196089999998,39.7871034,-105.1618588',
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
