'use strict';

var express = require('express');
var app = express();

app.use(function(req,res,next){
	//do something
	next();
});



var port = process.env.PORT || 3000;

app.listen(port,function(){
	console.log("Express server is listening on port", port);
});