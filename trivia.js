 var triviaQuestions = [{
 	question: "What airport uses the code FCO", answers: {
 		a: " Rome",
 		b: " Frankfurt",
 		c: " Fair Isle",
 	},
 	correctAnswer: "a",
 },

 	{question: "Which Hawaiian Island is home to the city of Honolulu?", answers: {
 		a: " Big Island",
 		b: " Maui",
 		c: " Oahu",
 	},
 	correctAnswer: "c",
 },


 	{question: "The Euro tunnel connects which two countries", answers: {
 		a: " England & France",
 		b: " England & Belguim",
 		c: " Scotland & France",
 	},
 	correctAnswer: "a",
 },


 	{question: "Where is the Maya ruin of Chichen Itza located?", answers: {
 		a: " Belize",
 		b: " Mexico",
 		c: " Peru",
 	},
 	correctAnswer: "b",
 },


 	{question: "Which of the following countries has a capital city that is not of the same name?", answers: {
 		a: " Luxembourg",
 		b: " Grenada",
 		c: " Singapore",
 	},
 	correctAnswer: "b",
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
      	var intervalId;
      	var clockRunning = false;

      	var clock = {
      		time: 60,

      	//start counting down the clock when the quiz starts

      		start: function()	{
      			if (!clockRunning){
      				intervalId = setInterval(clock.countdown, 1000);
      				clockRunning = true;
      				setTimeout(clock.finish, 30000);
      			}

      			var converted = clock.timeConverter(clock.time);
				$("#display").html(converted);
      		},

  			countdown: function(){

  				clock.time--;

  			  	var converted = clock.timeConverter(clock.time);

			    console.log(converted);

				$("#display").html(converted);

			},

      	  	timeConverter: function(t) {

		    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
				    var minutes = Math.floor(t / 60);
				    var seconds = t - (minutes * 60);

				    if (seconds < 10) {
				      seconds = "0" + seconds;
				    }

				    if (minutes === 0) {
				      minutes = "00";
				    }

				    else if (minutes < 10) {
				      minutes = "0" + minutes;
				    }

				    return minutes + ":" + seconds;
				},
			finish: function(){
				clockRunning = false;
				clearInterval(intervalId);
				alert("Time's up!")
				showResults ();
			}
		};

		//loop through the questions and update html with questions and answer choices
		answers.push("<ul>");

      	for (var i = 0; i < triviaQuestions.length; i++) {
      		console.log(i);
      		answers = [];
      		for (letter in triviaQuestions[i].answers) {
      			answers.push("<li>", "<label>"
      			+ '<input type="radio" name=triviaQuestion' + i + ' value="'+letter+'" class="triviaQuestion">'
					+ "  " + letter + " : "
					+ triviaQuestions[i].answers[letter]+ "</label>", "</li>")
      		};

      		answers.push("</ul>");

      		output.push(
			'<div class="question">' + triviaQuestions[i].question + '</div>'
			+'<br>'
			+ '<div class="answers">' + answers.join(' ') + '</div>')

			quiz.innerHTML = output.join('');
			console.log(output.join(''));

			clock.start();

     	};
 	};
     
//display anwers correct/not correct after the timer runs out out or the user submits

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


//run the functions on game load

$(document).ready(function() {

generateQuiz();

console.log("generate quiz done")

});

