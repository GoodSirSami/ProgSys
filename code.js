/**
 * @date 2024-09-09
 * @author Samuel Des Cormiers
 * @description Code pour le laboratoire 3
 * @version 3.0
 */

var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var modules = [0, 0, 0, 0, 0, 0];

app.use(express.static('./public'));

app.get('/', function (req, res) {
    res.render('./pages/index.ejs', {modules: modules});
});

app.get('/contacts', function (req, res) {
    res.render('./pages/contact.ejs');
});

app.get('/module/:mod', function (req, res) {
    if(req.params.mod >= 1 && req.params.mod <= 6) {
        //modules[req.params.mod - 1] = modules[req.params.mod - 1] == 0 ? 1 : 0;
        res.render('./pages/module.ejs', {module: req.params.mod, status: modules[req.params.mod - 1]});
    }
    else {
        res.status(404);
        res.render('./pages/erreur.ejs' , {module: req.params.mod});
    }
});

app.get('/reset', function (req, res) {
    for(var i = 0; i < modules.length; i++) {
        modules[i] = 0;
    }
    res.render('./pages/reset.ejs');
});

app.get('/controle', function (req, res) {
    if(req.query.module >= 1 && req.query.module <= 6) {
        modules[req.query.module - 1] = modules[req.query.module - 1] == 0 ? 1 : 0;
    }
    res.render('./pages/controle.ejs', {modules: modules});
   
});

app.use(function (req, res, next) {
    res.status(404);
    res.render('./pages/erreur.ejs', {module: 3});
  });
  
  app.listen(8080);
  
  console.log('Server running at port 8080');