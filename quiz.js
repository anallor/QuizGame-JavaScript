//Exercise JavaScript Week 3

var prompt = require('prompt');

var User = function (name){
	this.name = name
}

var Question = function (text, answer, id, pointvalue) {
	this.text = text;
	this.answer = answer;
	this.id = id;
	this.pointvalue = pointvalue
};

var Quiz = function () {
};

Quiz.prototype.welcome = function () {
	console.log("Welcome " + user1.name);
	return game.start();
}

Quiz.prototype.start = function () {
	console.log(question1.text)
	prompt.start();
	prompt.get(['answer1'], function (err, result) {
		if (result['answer1'].toLowerCase() === question1.answer){
				console.log("Congrats! You have: " + question1.pointvalue + " points");
				return game.started();
		} else {
			console.log("Wrong answer!!!");
			return game.start();
		}
	});
	
}

Quiz.prototype.started = function () {
	console.log(question2.text);
	prompt.start();
	prompt.get(['answer2'], function (err, result) {
		if (result['answer2'].toLowerCase() === question2.answer){
			console.log("Congrats! You have: " + (question1.pointvalue + question2.pointvalue) + " points");
			return game.follow();
		} else {
			console.log("Wrong answer!!!");
			return game.started();
		}
	});
	
}

Quiz.prototype.follow = function () {
	console.log(question3.text);
	prompt.start();
	prompt.get(['answer3'], function (err, result) {
		if (result['answer3'].toLowerCase() === question3.answer){
				console.log("Congrats! You have: " + (question1.pointvalue + question2.pointvalue + question3.pointvalue) + " points");
				return game.follower();
		} else {
			console.log("Wrong answer!!!");
			return game.follow();
		}
	});
	
}

Quiz.prototype.follower = function () {
	console.log(question4.text);
	prompt.start();
	prompt.get(['answer4'], function (err, result) {
		if (result['answer4'].toLowerCase() === question4.answer){
				console.log("Congrats! You have: " + (question1.pointvalue * 4) + " points");
				return game.end();
		} else {
			console.log("Wrong answer!!!");
			return game.follower();
		}
	});
	
}

Quiz.prototype.end = function () {
	console.log(question5.text);
	prompt.start();
	prompt.get(['answer5'], function (err, result) {
		if (result['answer5'].toLowerCase() === question5.answer){
				console.log("Yeah!!!! Good job!!!");
				return game.punctuation();
		} else {
			console.log("Wrong answer!!!");
			return game.end();
		}
	});
	
}

Quiz.prototype.punctuation = function () {
	console.log("Your score is:")
	console.log (question1.pointvalue + question2.pointvalue + question3.pointvalue
								+ question4.pointvalue + question5.pointvalue + " points")
}

var user1 = new User("Pepe")

var question1 = new Question("What day is today?", "friday", 1, 10);
var question2 = new Question("Gibraltar belongs to...", "spain", 2, 10);
var question3 = new Question("An apple is a...", "fruit", 3, 10);
var question4 = new Question("Which is the gentilic of Barcelona?", "sagrada familia", 4, 10);
var question5 = new Question("Capital of Asturias", "almeria", 5, 10);

var arr_questions = [question1, question2, question3, question4, question5];

var game = new Quiz;
game.welcome()