'use strict';

var mongoose = require('mongoose');

var answers = function(a,b){
	// - a before b
	// 0 no change
	//+ positive a after b

	if(a.votes === b.votes){
		if(a.updatedAt > b.updatedAt){
			return -1;
		} else if (a.updatedAt < b.updatedAt){
			return 1;
		} else {
			return 0;
		}
	}

	return b.votes - a.votes;
}

var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
	text: String,
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now},
	votes: {type: Number, default: 0}

});

var QuestionSchema = new Schema({
	text: String, 
	createdAt: {type: Date, default: Date.now},
	answers: [AnswerSchema]
});

QuestionSchema.pre("save",function(next){
	this.answers.sort();
	next();
});

var Question = mongoose.model("Question",QuestionSchema);

module.exports.Question = Question;