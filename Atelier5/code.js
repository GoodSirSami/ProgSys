var http = require('http');
var url = require('url');  // appel au module

var server = http.createServer(function(req, res) {

    var page = url.parse(req.url, true).pathname
    var param = url.parse(req.url, true).query;

    console.log(page + '+' +param.annee + '+' + param.mois + '+' + param.jour);
    

    if (page == '/') {
        res.writeHead(200, {"Content-Type": "html"});
        res.write('<head><meta charset="utf-8"></head>');
        res.write('<p>Bienvenue à l\'accueil, que puis-je pour vous ?</p>');

    }

    else if (page == '/contact') {
        res.writeHead(200, {"Content-Type": "html"});
        res.write('<head><meta charset="utf-8"></head>');
        res.end('<p>Vous êtes dans la page de contacts. <br> <a href="mailto:201945323@edu.clg.qc.ca" title="biboo">201945323@edu.clg.qc.ca</a></p>');
    }

    else if (page == '/recherche' && param.annee && param.mois && param.jour) {
        res.writeHead(200, {"Content-Type": "html"});
        res.write('<head><meta charset="utf-8"></head>');
        res.end('<p>Vous avez fait une recherche pour ' + param.annee + '/' + param.mois + '/' + param.jour+ '</p>');
    }

    else if (page == '/recherche' && param.penis) {
        res.writeHead(200, {"Content-Type": "html"});
        res.write('<head><meta charset="utf-8"></head>');
        res.end('<p>Vous avez fait une recherche pour gwo ' + param.penis + ' de NOUAR</p>');
    }

    else {
        res.writeHead(404, {"Content-Type": "html"});
        res.write('<head><meta charset="utf-8"></head>');
        res.write('Erreur 404');
    }

    res.end();

});

server.listen(8080);
