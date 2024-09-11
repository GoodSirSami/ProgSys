var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', pipi: ' ' });
}).post('/', function(req, res, next) {
  res.render('index', { title: 'Express' , pipi: 'pipi' });
});

module.exports = router;
