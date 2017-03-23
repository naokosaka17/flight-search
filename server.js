// dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    express = require('express');
//express
var app = express();

    app.use(compression());
    app.use(morgan('dev'));
    app.use(bodyParser());

    app.use(methodOverride());

    app.use(express.static(__dirname + '/app'));


// start server
console.log('-------------------------');
app.listen(3000);
console.log('localport:3000');
console.log('Started the server');
process.on('uncaughtException', function(error) {
    console.log(error.stack);
    console.log(error);
});
