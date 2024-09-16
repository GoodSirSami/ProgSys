var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', pipi: ' ' });
  console.log('john = ' + req.query.fname);
}).post('/', function(req, res, next) {
  res.render('index', { title: 'Express' , pipi: ' ' });
  console.log("john = " + req.body.fname);
});

module.exports = router;
