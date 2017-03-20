var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    compression = require('compression'),
    errorhandler = require('errorhandler'),
    multer  = require('multer');

var app = express();



module.exports = function(app) {
  app.use(compression());
  app.use(morgan('dev'));
  app.use(bodyParser());
  app.use(multer());
  app.use(methodOverride());
  app.use(express.static(__dirname + '/../www/'));

  // app.use(favicon(__dirname + '/../../Twyst-Web-Apps/common/images/favicon/twyst.ico'));
  app.all("/api/*", function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With, Accept");
      res.header("Access-Control-Allow-Methods", "GET, PUT, POST, HEAD, DELETE, OPTIONS");
      return next();
  });

  app.use(errorhandler({
      dumpExceptions: true,
      showStack: true
  }));

};

var SabreDevStudio = require('sabre-dev-studio');
var sabreDevStudio = new SabreDevStudio({
  client_id:     'V1:8wdlxlxzwck14mlh:DEVCENTER:EXT',
  client_secret: 'lV65yKhM',
  uri:           'https://api.test.sabre.com'
});
var options = {};

module.exports = function(app) {
  app.get('/api/v1/themes', function(req,res) {
    sabreCall('/v1/lists/supported/shop/themes', res);
  });

  app.get('/api/v1/routes', function(req,res) {
    sabreCall('/v1/shop/flights/fares?origin=CLT&departuredate=2017-04-01&returndate=2017-04-01', res);
  });

  app.get('/api/v1/top', function(req,res) {
    sabreCall('/v1/lists/top/destinations?origin=NYC&lookbackweeks=8&topdestinations=5', res);
  });

  app.get('/api/v1/cities', function(req,res) {
    sabreCall('/v1/lists/supported/cities', res);
  });

  app.get('/api/v1/places', function(req,res) {
    sabreCall('/v1/shop/flights/fares?origin=' + req.query.origin +
    '&departuredate=' + req.query.departuredate +
    '&returndate=' + req.query.returndate +
    '&maxfare=' + req.query.maxfare, res);
  });

};

function sabreCall(q, res) {
  sabreDevStudio.get(q, options, function(err, data) {
    response(res, err, data);
  });
}

function response(res, err, data) {
  if (err) {
    res.status(200).send({
      'status': false,
      'message': 'Error',
      'info': err
    });
  } else {
    res.status(200).send({
      'status': true,
      'message': 'Success',
      'info': data
    });
  }
}

// START THE SERVER
  console.log('STARTING THE SABRE SERVER');
  console.log('-------------------------');
  app.listen(3000);
  console.log('Started the server');
  process.on('uncaughtException', function (error) {
      console.log(error.stack);
      console.log(error);
  });
