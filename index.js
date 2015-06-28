var config = require('./config/config.json'),
	server = require('./lib/server.js');

// In case the port is set using an environment variable
config.PORT = process.env.PORT || config.PORT;

server.run(config);