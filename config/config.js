'use strict';
var config = function(){
	var port = process.env.OPENSHIFT_NODEJS_PORT||process.env.PORT||3000;

	var ip = process.env.OPENSHIFT_NODEJS_IP||"127.0.0.1";

	return {
		port:port,
		ip:ip
	};
};

module.exports = config;