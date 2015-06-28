var express = require('express'),
	expressApp = express(),
	http = require('http'),
	server = http.createServer(expressApp),
	cookieParser = require('cookie-parser'),
	expressSession = require('express-session'),	
	oauth = require('./oauth')(expressApp),
	routing = require('./routes')(expressApp);

// static serving
expressApp.use(express.static(__dirname + '../public/'));

expressApp.set('views', __dirname);
expressApp.set('view engine', 'ejs');
expressApp.use(cookieParser());
expressApp.use(expressSession({
  key    : 'sid',
  secret : 'secret'
}));

exports.run = function (config) {
	server.listen(config.PORT);
	console.log('Listening on', config.PORT);
};