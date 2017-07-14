var express = require('express'),
    app = express(),
    fs = require('fs'),
    path = require('path'), // ������ ��� �������� ����
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    port = process.env.PORT || 3000,
    _ = require('underscore'),
    users = [
        { id: 1, name: 'tony' }
    ];

    app.use(morgan('dev'));
    app.use(bodyParser.json());

app.get('/', function (req, res) {

    app.use(express.static('app'));
    app.use( '/app', express.static('assets'));
   
    var index = path.join(__dirname, '/app/index.html');

    if (req.url == '/login' || req.url == '/') {

        fs.readFile(index, function(err, data) {
            if (err) {
                console.error(err);
                res.writeHead(500, {'Content-Type': 'text/html'});
                res.end('500 server error');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });

    } else {
        // resource not found
        console.log('resource not found: ' + req.url);
        res.writeHead(404, {'Content-Type': 'text/html'} );
        res.end('<html><body>404 not found</body>')
    }
});


    app.listen(port, function () {
        console.log('Your connections port ' + port);
    });


