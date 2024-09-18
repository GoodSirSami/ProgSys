var express = require('express');
var app = express();
var server = app.listen(8080);
var io = require('socket.io')(server);

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.get('/', function (req, res) {
    res.render('pages/index', {title: 'Hello World', message: 'Hello World!'});
});

io.sockets.on('connection', function (socket) {
    console.log('Un client est connecté !');
    socket.emit('message', 'Vous êtes bien connecté !');
});

app.get('/about', function (req, res) {
    res.render('pages/about', {title: 'About', message: 'About page'});
});

app.get('/annee/:annee/:mois', function(req, res) {
    console.table(req.params);
    res.render('pages/annee', {annee: req.params.annee, mois: req.params.mois});
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});




console.log('Server running at port 8080');

