"use strict";

var _fs = require('fs');

var _httpResponse = (function(fs) {
	return {
		htmlRender: function(response, path) {
			fs.readFile(path,function (err, data){
				response.writeHead(200, {'Content-Type': 'text/html', 'Content-Length': data.length});
				response.write(data);
				response.end();
			});
		}
	};
})(_fs);
module.exports = _httpResponse;
