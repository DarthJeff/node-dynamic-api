"use strict";

var _urlHelper = (function(urlModule, queryStringModule) {
	return {
		urlParse: function (url) {
			return urlModule.parse(url, true);
		},
		queryStringParse: function (body) {
			return queryStringModule.parse(body);
		}
	};
})(require('url'), require('querystring'));

var _requestHelper = (function(urlHelper) {
	return {
		set request(res) {
			this._request = res;
		},
		get version() {
			var headers = this._request.headers;
			var version;
			if (headers && headers['version']) {
				version = headers['version'];
			}
			return version;
		},
		get method() {
			return this._request.method.toLowerCase();
		},
		get urlObj() {
			return 	urlHelper.urlParse(this._request.url);
		},
		get path() {
			return this.urlObj.path;
		},
		get query() {
			return this.urlObj.query;
		}
	};
})(_urlHelper);

var _RequestValidator = (function() {
	return {
		validate: function(path, method, version) {
			console.info(requestMethod, version, requestPath);
		}
	};
})();

var _processRequest = (function() {
	return {

	};
})();

var _httpDynamicDispatcher = (function(urlHelper, requestHelper) {
	return {
		dispatch: function (request, response) {
			requestHelper.request = request;

			var requestPath = requestHelper.path;
			var requestMethod = requestHelper.method;
			var version = requestHelper.version;

			console.info(requestMethod, version, requestPath);

			// get requestUrl, method, version
			// get dynamic strategy
			// process request



			if(requestMethod == 'post') {
				var body = '';
				request.on('data', function(data) {
					body += data;
				});
				request.on('end', function() {
					var post = urlHelper.queryStringParse(body);
					request.body = body;
					request.params = post;

					response.end('Hello Jeff - POST');
				});
			} else {
				request.params = requestHelper.query;
				response.end('Hello Jeff - GET');
			}
		}
	};
})(_urlHelper, _requestHelper);
module.exports = _httpDynamicDispatcher;
