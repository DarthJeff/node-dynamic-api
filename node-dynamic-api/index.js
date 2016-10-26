"use strict";

var _methods = ['GET', 'POST'];
var _resolveTypes = ['method', 'sql'];

var _resolveTypeMethod = {
	type: 'method',
	module: '',
	methodName: ''
};

var _validationModels = [
	{
		id: '',
		properties: [
			{
				name: '',
				validType: '',
				validValue: ''
			}
		]
	}
];

var _resolveTypeSql = {
	type: 'sql',
	connetion: '',
	spName: ''
};

var _routesConfig = [
	{
		routeID: '',
		route: '',
		method: '',
		validationEnabled: true,
		validationModelID: '',
		versions: [
			{
				versionID: '',
				version: '',
				isDefaultVersion: true,
				validationEnabled: true,
				validationModelID: '',
				resolve: {
					type: ''
				}
			}
		]
	}
];

var _configRouteManager = function() {
	return {
		update: function() {

		},
		remove: function() {

		},
		findVersion(query) {
			return {};
		}
	};
};

var _configRouteVersionManager = function() {
	return {
		update: function() {

		},
		remove: function() {

		}
	};
};

var configMethods = {
	findRoute: {
		value: function(query) {
			console.log(this.routes[query]);
		}
	}
};
Object.defineProperties(config, configMethods);


// var _configManager = function(config) {
// 	this._config = config;
// 	return {
// 		get config() {
// 			return this._config;
// 		},
// 		set config(config) {
// 			this._config = config;
// 		},
// 		findRoute(query) {
// 			return {};
// 		}
// 	};
// };

module.exports = function(config) {
	var configManagerInstance = Object.create(_configManager);
	this._configManager = configManagerInstance(config);
	return {
		get configManager() {
			return this._configManager;
		},
		set configManager(configManager) {
			this._configManager = configManager;
		},
		requestHandler: function(request, response) {

		}
	};
};
