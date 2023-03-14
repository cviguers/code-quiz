// Selects element by class
var timeEl = document.querySelector(".time");


// Selects element by id
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("start-btn");
var homePage = document.getElementById("home-container");
var quizPage = document.getElementById("quiz-container");


// homepage
function setTime() {
  var secondsLeft = 75;
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remain";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to end quiz / show final score page
        //insert function!!!!!!!!!!!
    }

  }, 1000);
};

function hideHomepage() {
  if (homePage.style.display === "none") {
    homePage.style.display = "block";
  } else {
    homePage.style.display = "none";
  }
};

function showQuizpage() {
  if (quizPage.style.display === "block") {
    quizPage.style.display = "none";
  } else {
    quizPage.style.display = "block";
  }
};

startBtn.addEventListener("click",function() {
  setTime()
  hideHomepage()
  showQuizpage()
  // add other functions that start when you click start
});
