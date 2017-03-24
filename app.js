(function() {
    'use strict';
    var express = require('express');
    var app = express();
    var port = 3000;

    require('./config/config_app')(app);
    require('./config/config_routes')(app);


    // start server
    console.log('-------------------------');
    app.listen(port, function() {
        console.log('listening on port:' + port);
        process.on('uncaughtException', function(error) {
            console.log(error.stack);
            console.log(error);
        });
    })
})();
