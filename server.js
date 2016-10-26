"use strict";

// var http = require('http');
// const PORT = 3000;
//
// var dispatcher = require('./http-dynamic-dispatcher');
//
// function handleRequest(request, response) {
// 	dispatcher.dispatch(request, response);
// 	//response.end('Hello Jeff');
// }
//
// var server = http.createServer(handleRequest);
//
// server.listen(PORT, function() {
// 	console.info('Server listening on: http://localhost:%s', PORT);
// });



// var config = {
// 	routes: [11,22]
// };
//
// var configMethods = {
// 	exists: { value: true },
// 	findRoute: {
// 		value: function(query) {
// 			console.log(this.routes[query]);
// 		}
// 	}
// };
//
// Object.defineProperties(config, configMethods);
//
// config.findRoute(0);
// config.findRoute(1);
//
// var f = config.hasOwnProperty('exists');
// console.log(f);


// var WebSocket = require('ws');
// var ws = new WebSocket('ws://localhost:3000', {
// 	protocolVersion: 8,
// 	origin: 'http://websocket.org'
// });
//
// ws.on('open', function open() {
// 	console.log('connected');
// 	ws.send(Date.now().toString(), {mask: true});
// });
//
// ws.on('close', function close() {
// 	console.log('disconnected');
// });
//
// ws.on('message', function message(data, flags) {
// 	console.log('Roundtrip time: ' + (Date.now() - parseInt(data)) + 'ms', flags);
//
// 	setTimeout(function timeout() {
// 		ws.send(Date.now().toString(), {mask: true});
// 	}, 500);
// });

var fs = require('fs');
var ws = require('ws');
var websocketStream = require('websocket-stream');

var wss = new ws.Server({ port: 8080 });
wss.on('connection', function (connection) {
	console.log('connection');
	connection.on('message', function (message) {
		console.log('message: ' + message);

		fs.readFile('c:/Users/jeff.brannon/Pictures/' + message, function(err, data){
			connection.send(data);
		});
	});


});

wss.on('close', function close() {
	console.log('disconnected');
});

console.log('running...');
