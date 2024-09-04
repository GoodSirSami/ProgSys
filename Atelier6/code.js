var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('acceuil');
});

app.get('/users', function (req, res) {
    res.render('users');
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});

app.listen(8080);

console.log('Server running at port 8080');

