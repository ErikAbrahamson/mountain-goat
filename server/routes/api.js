var express = require('express');
var router = express.Router();
var strava = require('strava-v3');
var mongoose = require('mongoose-q')(require('mongoose'), { spread: true });

router.post('/service', function(req, res) {
  strava.segments.explore({
    bounds: req.body.bounds,
    statusCallback: function(err, payload) {
      if (!err) res.json(payload);
      else res.json(err);
    }
  }, function(err, payload) {
    console.log(payload);
    res.json(payload);
    });
});

router.get('*', function(req, res) {
  res.sendFile('../client/public/index.html');
});

module.exports = router;
