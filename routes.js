'use strict';

var express = require('express');
var router = express.Router();


// GET /questions
// Route for the questions collection
router.get("/",function(req,res){
	res.json({response: "You sent me a GET request"});
});


// POST /questions
// Route for creating a question
router.post("/",function(req,res){
	res.json({
		response: "You sent me a POST request",
		body: req.body 
	});
});



// GET /questions/:id
// Route for a specific question 
router.get("/:id",function(req,res){
	res.json({
		response: "You sent me a GET request for " + req.params.id});
});





















module.exports = router;