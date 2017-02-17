'use strict';

var express = require('express');
var app = express();

app.use(function(req,res,next){
	req.myMessage = "Hello Middleware 2";
	console.log("First piece of middleware");
	next();
});

app.use(function(req,res,next){
	console.log(req.myMessage);
	next();
});

var port = process.env.PORT || 3000;

app.listen(port,function(){
	console.log("Express server is listening on port", port);
});