var timeEl = document.querySelector(".time");
var quizPage = document.querySelector(".quiz-container");
var highscorePage = document.querySelector(".highscore-container")
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("start-btn");
var homePage = document.getElementById("home-container");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

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
var secondsLeft = 5;
var questionIndex = 0;
var pentalty = -5;
var answer = questionArray[answer];


// hides answer button
function hideAnswer () {
    answer1.style.display = "none";
    answer2.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "none";
};

// hides highscore page
function hideHighscorePage() {
  highscorePage.style.display = "none";
};

// removes quiz from page
function endQuiz() {
  quizPage.style.display = "none";
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
      endQuiz();
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
    
    nextBtn.addEventListener("click", function () {
      questionIndex++
      startQuestions(questionIndex);
    })

    // append js elements to page
    mainEl.appendChild(questionContainer);
    mainEl.appendChild(question);
    mainEl.appendChild(nextBtn);
};

// run through questions
function renderQuestions() {
  startQuestions(questionIndex);
  questionIndex = 0; questionIndex < questionArray[questionIndex].length; questionIndex++;
};



// calculate and create score
function calculateScore() {

};

// START JAVASCRIPT FUNCTIONS
hideAnswer()
hideHighscorePage()

// calls functions to start quiz and hide homepage at click of start button
startBtn.addEventListener("click", function () {
  hideHomepage();
  setTime(); 
  startQuestions(questionIndex);
});



// highscore page
var name = document.querySelector("#name");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userNameSpan = document.querySelector("#user-name");
var userHighscoreSpan = document.querySelector("#user-highscore");

function hideHighscorePage() {
  highscorePage.style.display = "none";
};


function renderLastRegistered() {
  var name = localStorage.getItem("name");
  var highscore = localStorage.getItem("highscore");

  if (!name || !highscore) {
    return;
  }

  userNameSpan.textContent = name;
  userHighscoreSpan.textContent = highscore;
}

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var name = document.querySelector("#name").value;
  var highscore = document.querySelector("#highscore").value;

  if (name === "") {
    displayMessage("error", "name cannot be blank");
  } else {
    displayMessage("success", "recorded successfully");

    localStorage.setItem("name", name);
    localStorage.setItem("highscore", highscore);
    renderLastRegistered();
  }
});
