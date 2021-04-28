//declared variables
var questions = [
  {
    question: "Which of the following is not a commonly used data type?",
    choices: ["numbers", "strings", "booradley", "arrays"],
    answer: "booradley",
  },
  {
    question: "Which of the following is a modulus arithmetic operator?",
    choices: ["+", "-", "*", "%"],
    answer: "%",
  },
  {
    question: "The inputs of a function are called?",
    choices: ["returns", "expressions", "parameters", "gits"],
    answer: "",
  },
  {
    question: "Which comparison operator means not equal to?",
    choices: ["!==", "===", "<=", "/--"],
    answer: "!==",
  },
  {
    question: "Which of the following is a type of an iteration statement?",
    choices: ["flexbox", "for loop", "console", "event"],
    answer: "for loop",
  },
];
var startButton = document.querySelector("#start");
var timer = document.querySelector("#timer");
var timeLeft = 60;
// var main = document.querySelector("main");
var startQuiz = document.querySelector("#startquiz");
var questionEl = document.getElementById("questions");
var quizQuestion = document.getElementById("#question");

//starts the timer when button clicked
function countdown() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = "Time: " + timeLeft + "s";
    if (timeLeft === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

startButton.addEventListener("click", function () {
  countdown();
  startGame();
  getQuestions();
});

//after button pressed
function startGame() {
  startQuiz.setAttribute("class", "hide");
  startButton.setAttribute("class", "hide");
  questionEl.removeAttribute("class");
}
//first question appears

function getQuestions() {
  var quizQuestion = document.getElementById("question");
  quizQuestion.textContent = questions[0].question;
  console.log(quizQuestion);
}

// for(var i = 0; i < questions.length; i++) {
//     var nextQuestion =
// }

//action for wrong or right question

//game over - score totals
