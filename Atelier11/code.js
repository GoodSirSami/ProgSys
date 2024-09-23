var express = require('express');
var mqtt = require('mqtt');
var app = express();
var client = mqtt.connect('mqtt://127.0.0.1:1883');

app.set('view engine', 'ejs');

app.use(express.static('./public'));

client.on('connect', function () {
    console.log('MQTT connected');
});

client.subscribe('MODULE/#');

client.on('message', function (topic, message) {
    console.log('Topic:', topic.toString());
    switch (topic) {
        case 'MODULE/1':
            console.log('Message:', message.toString());
            break;
        case 'MODULE/2':
            console.log('Message:', message.toString());
            break;
        case 'MODULE/3':
            console.log('Message:', message.toString());
            break;
        case 'MODULE/4':
            console.log('Message:', message.toString());
            break;
        case 'MODULE/5':
            console.log('Message:', message.toString());
            break;
        case 'MODULE/6':
            console.log('Message:', message.toString());
            break;
        default:
            console.log('Unknown topic:', topic.toString());
    }
});

client.publish('MODULE', 'Bonjour');

app.get('/', function (req, res) {
    res.render('pages/index', {title: 'Hello World', message: 'Hello World!'});
});

app.get('/about', function (req, res) {
    res.render('pages/about', {title: 'About', message: 'About page'});
});

app.get('/annee/:annee/:mois', function(req, res) {
    res.render('./pages/annee.ejs', {annee: req.params.annee, mois: req.params.mois});
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});

app.listen(8080);

console.log('Server running at port 8080');

