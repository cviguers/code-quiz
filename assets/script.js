// selects element by class
var timeEl = document.querySelector(".time");
var answerBtn = document.querySelector(".answer-btn");

// selects element by id
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("start-btn");
var homePage = document.getElementById("home-container");
var quizPage = document.getElementById("quiz-container");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

// js created elements
var questionContainer = document.createElement("div");
var question = document.createElement("h2");
var nextBtn = document.createElement("button");

// global variables
var questionArray = [
  {
    question:
      "Which method adds a new item to the end of an array and returns the new length?",
    options: ["shift()", "return()", "push()", "pop()"],
    answer: "push()",
  },

  {
    question: "Which of the following is NOT a Git commd?",
    options: ["pwd", "Rm -rf", "mkdir", "new"],
    answer: "new",
  },

  {
    question: "Which display styling hides an element from the page?",
    options: ["none", "inline", "block", "empty"],
    answer: "none",
  },

  {
    question: "Which of the following is NOT a primitive type in JavaScript?",
    options: ["string", "array", "boolean", "undefined"],
    answer: "array",
  },

  {
    question:
      "After creating an element in JavaScript, to see it on the page you need to _________ .",
    options: [
      "document.getElementById",
      "element.appendChild",
      "element.textContent",
      "element.setAttribute",
    ],
    answer: "element.appendChild",
  },
];

var userAnswer = "";
var userScore = 0;
var secondsLeft = 75;
var questionIndex = 0;
var pentalty = 5;
var answer = questionArray[answer];

// Functions
// hides answer button on page load
function hideAnswer () {
    answer1.style.display = "none";
    answer2.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "none";
};

// start timer
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remain";

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to end quiz / show final score page
      //insert function!!!!!!!!!!!
    }
  }, 1000);
}

// hide homepage and show answers
function hideHomepage() {
  if (homePage.style.display === "none") {
    homePage.style.display = "block";
  } else {
    homePage.style.display = "none";
  }
  answer1.style.display = "inline";
  answer2.style.display = "inline";
  answer3.style.display = "inline";
  answer4.style.display = "inline";
}

// start questions
function startQuestions(questionIndex) {
  // appends elements to page
  mainEl.innerHTML = "";

  //creates elements in dom   
  var questionContainer = document.createElement("div");
  var question = document.createElement("h2");
  var nextBtn = document.createElement("button");  

    // add text to question and answers
    question.textContent = questionArray[questionIndex].question;
    answer1.textContent = questionArray[questionIndex].options[0];
    answer2.textContent = questionArray[questionIndex].options[1];
    answer3.textContent = questionArray[questionIndex].options[2];
    answer4.textContent = questionArray[questionIndex].options[3];
    nextBtn.textContent = "Next";

    // append js elements to page
    mainEl.appendChild(questionContainer);
    mainEl.appendChild(question);
    mainEl.appendChild(nextBtn);
};

// run through questions
function renderQuestions() {
  questionIndex = 0; questionIndex < questionArray[questionIndex].length; questionIndex++
  };

  // calculate and create score after game is over
// function calculateScore() {
//   // create and append score to page
//   var scoreEl = document.createElement("div");  
//   var Correct = document.createElement("p");
//   var Incorrect = document.createElement("p"); 

//   mainEl.appendChild(scoreEl);
//   scoreEl.appendChild(Correct);
//   scoreEl.appendChild(Incorrect);

//   //allowing score to start at 0
//   var userCorrect = 0;
//   var userIncorrect = 0;

//   // adding labels to score
//   Correct.textContent = userCorrect + " correct";
//   Incorrect.textContent = userIncorrect + " incorrect";

//   // 
//   if (userAnswer == questionIndex[answer]) {
//     userCorrect = userCorrect + 1;
//   } else {
//     // adds to user's incorrct points
//     userIncorrect = userIncorrect + 1;
//     // deducts time from quiz
//     secondsLeft = secondsLeft - pentalty;
//   }
// };





// START
hideAnswer()

// calls functions to start quiz and hide homepage at click of start button
startBtn.addEventListener("click", function () {
  hideHomepage();
  setTime(); 
  startQuestions(questionIndex);
  renderQuestions()
});

nextBtn.addEventListener("click", function () {
    renderQuestions();
});