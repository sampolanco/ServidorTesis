'use strict'

var app=require('./app.js'),
	server=app.listen(app.get('port'),app.get('ipAddress'),function(){
		console.log('Servidor en puerto: '+app.get('port')+'con dir:' +app.get('ipAddress'));
	})