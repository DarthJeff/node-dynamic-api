"use strict";

var http = require('http');
const PORT = 3000;

var dispatcher = require('./http-dynamic-dispatcher');

function handleRequest(request, response) {
	dispatcher.dispatch(request, response);
	//response.end('Hello Jeff');
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.info('Server listening on: http://localhost:%s', PORT);
});
