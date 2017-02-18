'use strict';

var express = require('express');
var router = express.Router();
var Question = require('./models').Question;

router.param("qID",function(req,res,next,id){
	Question.findById(id, function(err, doc){
		if(err) return next(err);
		if(!doc){
			err = new Error("Not Found");
			err.status = 404;
			return next(err);
		}
		req.question = doc;
		return next();
	});
});


router.param("aID",function(req,res,next,id){
	req.answer = req.questions.answers.id(id);
	if(!req.answer){
		err = new Error("Not Found");
		err.status = 404;
		return next(err);
	}

	next();
});

// GET /questions
// Route for the questions collection
router.get("/",function(req,res, next){
	Question.find({})
		.sort({createdAt: -1})
		.exec(function(err, questions){
			if(err) return next(err);
			res.json(questions);
		});
});


// POST /questions
// Route for creating a question
router.post("/",function(req,res, next){
	var question = new Question(req.body);
	question.save(function(err,question){
		if(err) return next(err);
		res.status(201);
		res.json(question);

	});

});



// GET /questions/:id
// Route for a specific question 
router.get("/:qID",function(req,res, next){
	res.json(req.question);
});


// POST /questions/:id/answers
// Route for creating an answer
router.post("/:qID/answers",function(req,res, next){
	req.question.answers.push(req.body);
	req.question.save(function(err,question){
		if(err) return next(err);
		res.status(201);
		res.json(question);

	});
});


// PUT /questions/:id/answers
// Route for editing an anwer
router.put("/:qID/answers/:aID",function(req,res){
	req.answer.update(req.body, function(err,results){
		if(err) return next(err);
		res.json(result);
	})
	
});


// DELETE /questions/:id/answers
// Route for deleting an anwer
router.delete("/:qID/answers/:aID",function(req,res){
	res.answer.remove(function(err){
		req.question.save(function(err, question){
			if(err) return next(err);
			res.json(question);
		});
	})
});


// POST /questions/:id/answers/vote-up
// POST /questions/:id/answers/vote-down
// Route for voting on an answer
router.post("/:qID/answers/:aID/vote-:dir",

	function(req,res,next){
		if(req.params.dir.search(/^(up|down)$/) === -1){
			var err = new Error("Not Found");
			err.status = 404;
			next(err);
		} else {
			req.vote = req.params.dir;
			next();
		}
	}, 

	function(req,res, next){
		req.answer.vote(req.vote, function(err, question){
			if(err) return next(err);
			res.json(question);
		});

});



module.exports = router;