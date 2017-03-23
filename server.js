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


// start server
console.log('-------------------------');
app.listen(port,function(){
  console.log('listening on port:' + port);
});
