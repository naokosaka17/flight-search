// dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    express = require('express');
//express
var app = express();
var port = 3000;

app.use(morgan('dev'));
app.use(bodyParser());

app.use(methodOverride());

app.use(express.static(__dirname + '/app'));

// get API from SabreDevStudio
var SabreDevStudio = require('sabre-dev-studio');
var sabre_dev_studio = new SabreDevStudio({
    client_id: 'V1:1234:ABCD:XYZ',
    client_secret: 'SeKr1T',
    uri: 'https://api.test.sabre.com'
});
var options = {};

// start server
console.log('-------------------------');
app.listen(port, function() {
    console.log('listening on port:' + port);
});
