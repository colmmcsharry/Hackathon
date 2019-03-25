const express = require('express');
const router = express.Router();

router.get('/song1', function(req, res, next) {
  res.render('song1');
});

router.get('/song2', function(req, res, next) {
  res.render('song2');
});

module.exports = router;