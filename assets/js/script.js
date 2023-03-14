// js created elements
var questionContainer = document.createElement("div");
var question = document.createElement("h2");
var btnContainer = document.createElement("div");
var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");

// selects element by class
var timeEl = document.querySelector(".time");

// selects element by id
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("start-btn");
var homePage = document.getElementById("home-container");
var quizPage = document.getElementById("quiz-container");

// add text to js elements
question.textContent = "question";
answer1.textContent = "answer one";
answer2.textContent = "answer two";
answer3.textContent = "answer three";
answer4.textContent = "answer four";

// append js elements to html elements
mainEl.appendChild(questionContainer);
questionContainer.appendChild(question);
questionContainer.appendChild(btnContainer);
btnContainer.appendChild(answer1);
btnContainer.appendChild(answer2);
btnContainer.appendChild(answer3);
btnContainer.appendChild(answer4);

// styles js elements
questionContainer.setAttribute("style"," margin:auto; width:50%; text-align:center; ")
answer1.setAttribute("style", " color: #cbece0; background: #e0cbec; border-radius: 100px; font-size: 18px; padding: 7px 20px; border: 0; margin: 50px; font-weight:bold; ");
answer2.setAttribute("style", " color: #cbece0; background: #e0cbec; border-radius: 100px; font-size: 18px; padding: 7px 20px; border: 0; margin: 50px; font-weight:bold; ");
answer3.setAttribute("style", " color: #cbece0; background: #e0cbec; border-radius: 100px; font-size: 18px; padding: 7px 20px; border: 0; margin: 50px; font-weight:bold; ");
answer4.setAttribute("style", " color: #cbece0; background: #e0cbec; border-radius: 100px; font-size: 18px; padding: 7px 20px; border: 0; margin: 50px; font-weight:bold; ");


// start timer
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

// hide homepage
function hideHomepage() {
  if (homePage.style.display === "none") {
    homePage.style.display = "block";
  } else {
    homePage.style.display = "none";
  }
};

// start quiz
function showQuizpage () {

}

// end quiz
function endGame() {

};


// call functions at click
startBtn.addEventListener("click",function() {
  setTime()
  hideHomepage()
  showQuizpage()
  // add other functions that start when you click start
});
