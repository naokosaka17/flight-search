(function () {
  'use strict';
  var express = require('express');
  var app = express();
  var port = 3000;
  var mongoose = require("mongoose")
  var Favorite = require('./www/models/Favorite.js');

  require('./config/config_app')(app);
  require('./config/config_routes')(app);


  // START THE SERVER
  console.log('-------------------------');
  app.listen(port);
  console.log('Started the server');
  console.log('localhost:' + port);
  process.on('uncaughtException', function (error) {
      console.log(error.stack);
      console.log(error);
  });

})();
