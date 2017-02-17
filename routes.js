'use strict';

var express = require('express');
var router = express.Router();


// GET /questions
// Route for the questions collection
router.get("/",function(req,res){
	var o = obj.prop;
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
router.get("/:qID",function(req,res){
	res.json({
		response: "You sent me a GET request for " + req.params.qID});
});


// POST /questions/:id/answers
// Route for creating an answer
router.post("/:qID/answers",function(req,res){
	res.json({
		response: "You sent me a POST request to /answers",
		questionId: req.params.qID,
		body: req.body 
	});
});


// PUT /questions/:id/answers
// Route for editing an anwer
router.put("/:qID/answers/:aID",function(req,res){
	res.json({
		response: "You sent me a PUT request to /answers",
		questionId: req.params.qID,
		answerId: req.params.aID,
		body: req.body 
	});
});


// DELETE /questions/:id/answers
// Route for deleting an anwer
router.delete("/:qID/answers/:aID",function(req,res){
	res.json({
		response: "You sent me a DELETE request to /answers",
		questionId: req.params.qID,
		answerId: req.params.aID,
		body: req.body 
	});
});


// POST /questions/:id/answers/vote-up
// POST /questions/:id/answers/vote-down
// Route for voting on an answer
router.post("/:qID/answers/:aID/vote-:dir",function(req,res){
	res.json({
		response: "You sent me a POST request to /vote-" + req.params.dir,
		questionId: req.params.qID,
		answerId: req.params.aID,
		body: req.body,
		vote: req.params.dir
	});
});

















module.exports = router;