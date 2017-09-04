 var triviaQuestions = {
 	question: "What is you favorite color?", answers: {
 		a: "blue",
 		b: "green",
 		c: "red",
 	},
 	correctAnswer: "a",

 	question: "What is your favorite food?", answers: {
 		a: "Tacos",
 		b: "pie",
 		c: "pizza",
 	},
 	correctAnswer: "Tacos",
 };
 var quesionTimer = 0;
 var quiz = document.getElementById("quiz");
 var results = document.getElementById("results");
 var submit = document.getElementById("submit");




var generateQuiz =function (triviaQuestions, buildQuiz, showResults, submit){

	var buildQuiz = function (triviaQuestions, quiz){
		var output = [];
      	var answers = [];

      	for (var i = 0; i < triviaQuestions.length; i++) {
      		answers = [];
      		for (letter in triviaQuestions[i].answers) {
      			answers.push("<label>"
      			+ '<input type="radio" name="question +i" + value="+letter+">'
					+ letter + ": "
					+ questions[i].answers[letter]+ "</label>")
      		};

      		output.push(
			'<div class="question">' + triviaQuestions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>')

			quiz.innerHTML = output.join('');

     };
};
     
	var showResults = function (triviaQuestions, quiz, results){

		var answerDisplay = quiz.querySelectorAll('.answers');
		var userAnswer = '';
		var numCorrect = 0;

		for(var i=0; i<questions.length; i++){

			userAnswer = (answerDisplay[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			if(userAnswer===questions[i].correctAnswer){
				numCorrect++;
				
				answerDisplay[i].style.color = "lightgreen";
			}
			else{
				alert("Wrong Answer!");
			}
		}

		results.innerHTML = numCorrect + ' out of ' + questions.length;
	};

	$("#submit").on("click", showResults);
};

$(document).ready(function() {

generateQuiz(triviaQuestions, buildQuiz, showResults, submit);

});

