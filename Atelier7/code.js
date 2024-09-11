// var express = require('express');
// var app = express();
// app.set('view engine', 'ejs');
// var myval = 1;

// app
// .get('/', function(req, res){
//     res.render('pages/button.ejs', {val:myval});
// })
// .post('/', function(req,res, next) {
//   //console.log("gotcha");
//   if (myval == 4) {
//     res.send("gotcha");
//     myval = 1;
//     next();
//   } else {
//     myval++;
//     res.render('pages/button.ejs', {val:myval});
//     //next();
//   }
// })
// .use(function(req, res, next){
//     //res.send("pas trouvé");
//     console.log("pas trouvé");
// })
// .listen(8080);
// -----------------------------------------------------
// var express = require('express');
// var app = express();
// var myval = 1;

// app
// .use(function(req, res, next){
//   if (myval == 4)
//     res.send("Fin");
//   else {
//     res.send(String(myval));
//     next();
//   }
// })
// .use(function(req, res, next){
//     myval++;
//     next();
// })
// .listen(8080);
// -----------------------------------------------------
var express = require('express')
var app = express()

app
    .use(function (req, res, next) {
        console.log('Time:', Date.now())
        next()
    })
    .use('/user/:id', function (req, res, next) {
        console.log('Request URL:', req.originalUrl)
        next()
    }, function (req, res, next) {
        console.log('Request Type:', req.method);
        next()
    })
    .get('/user/:id', function (req, res, next) {
        if (req.params.id === '0') next('route')
        else next()
    }, function (req, res, next) {
        console.log('user ID:', req.params.id)
        res.send('regular user')
    })
    .get('/user/:id', function (req, res, next) {
        res.send('User is Zero')
    })
    .get('/', function (req, res, next) {
        res.send('Welcome')
    })
    .use(function (req, res, next) {
        res.send('404')
    })
    .listen(8080);

