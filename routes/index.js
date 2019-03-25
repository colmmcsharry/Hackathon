const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

// router.get('/song2', function(req, res, next) {
//   res.render('song2');
// });

module.exports = router;