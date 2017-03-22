(function () {
  'use strict';
  var express = require('express');
  var app = express();

  require('./config/config_app.js')(app);
  require('./config/config_routes.js')(app);


  // start server
  console.log('-------------------------');
  app.listen(3000);
  console.log('localport:3000');
  console.log('Started the server');
  process.on('uncaughtException', function (error) {
      console.log(error.stack);
      console.log(error);
  });

})();
