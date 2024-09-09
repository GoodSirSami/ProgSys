var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.get('/', function (req, res) {
    res.render('./pages/index.ejs');
});

app.get('/contacts', function (req, res) {
    res.render('./pages/contact.ejs');
});

app.get('/module/:mod', function (req, res) {
    if(req.params.mod >= 1 && req.params.mod <= 6) {
        res.render('./pages/module.ejs', {module: req.params.mod});
    }
    else {
        res.status(404);
        res.render('./pages/erreur.ejs' , {module: req.params.mod});
    }
});

app.use(function (req, res, next) {
    res.status(404);
    res.render('./pages/erreur.ejs', {module: 3});
  });
  
  app.listen(8080);
  
  console.log('Server running at port 8080');