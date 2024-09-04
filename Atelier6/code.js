var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.get('/', function (req, res) {
    res.render('pages/index', {title: 'Hello World', message: 'Hello World!'});
});

app.get('/about', function (req, res) {
    res.render('pages/about', {title: 'About', message: 'About page'});
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});

app.listen(8080);

console.log('Server running at port 8080');

