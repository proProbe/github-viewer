'use strict';
//	Require the necessary packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config/config.js')();


//	Set all the middleware.
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//	Set port to 3000 if no port is specified.
var port = process.env.PORT||config.port;
var ip = config.ip;


/*
	Close the process when exiting the server.
	Processes like db connections should be closed here.
*/
process.on('SIGINT', function() {
	console.log('\nClosed app');
	process.exit(0);
});


//	Send static files when requested
app.use('/', express.static(__dirname + '/public'));


//	Initiate the app.
app.listen(port, ip);

console.log('Current App name: ' + 'Github-viewer');
console.log('Listening to port ' + port);
