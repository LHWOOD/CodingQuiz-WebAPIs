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

var timer = document.querySelector("#timer");

function countdown() {
  var timeLeft = 10;
  var timeInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = "Time: " + timeLeft + "s";
  }, 1000);
}

var startButton = document.querySelector("#start");

startButton.addEventListener("click", function () {
  if (timeLeft === 0) {
    clearInterval(timeInterval);
  }
  countdown();
});
