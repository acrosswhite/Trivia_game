 var triviaQuestions = [{
 	question: "What is you favorite color?", answers: {
 		a: "blue",
 		b: "green",
 		c: "red",
 	},
 	correctAnswer: "a",
 },

 	{question: "What is your favorite food?", answers: {
 		a: "Tacos",
 		b: "pie",
 		c: "pizza",
 	},
 	correctAnswer: "a",
 },

 ];






var generateQuiz =function (){

 var quiz = document.getElementById("quiz");
 var results = document.getElementById("results");
 var submit = document.getElementById("submit");
 var questionTimer = 0;

	var buildQuiz = function (){
		var output = [];
      	var answers = [];

      	for (var i = 0; i < triviaQuestions.length; i++) {
      		console.log(i);
      		answers = [];
      		for (letter in triviaQuestions[i].answers) {
      			answers.push("<label>"
      			+ '<input type="radio" name=triviaQuestion' + i + ' value="'+letter+'">'
					+ letter + ": "
					+ triviaQuestions[i].answers[letter]+ "</label>")
      		};

      		output.push(
			'<div class="question">' + triviaQuestions[i].question + '</div>'
			+ '<div class="answers">' + answers.join(' ') + '</div>')

			quiz.innerHTML = output.join('');
			console.log(output.join(''));

     };
};
     
	var showResults = function (){

		var answerDisplay = quiz.querySelectorAll('.answers');
		var userAnswer = '';
		var numCorrect = 0;

		for(var i=0; i<triviaQuestions.length; i++){

			userAnswer = (answerDisplay[i].querySelector('input[name=triviaQuestion'+i+']:checked')||{}).value;
			console.log("User answer: " + userAnswer);
			if(userAnswer === triviaQuestions[i].correctAnswer){
				numCorrect++;
				
				answerDisplay[i].style.color = "lightgreen";
			}
			else{
				alert("Wrong Answer!");
			}
		}

		results.innerHTML = numCorrect + ' out of ' + triviaQuestions.length;
	};

	buildQuiz();
	console.log("build quiz done");

	$("#submit").on("click", showResults);
};

$(document).ready(function() {

generateQuiz();
console.log("generate quiz done")

});

