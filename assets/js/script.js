// selects element by class
var timeEl = document.querySelector(".time");

// selects element by id
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("start-btn");
var homePage = document.getElementById("home-container");
var quizPage = document.getElementById("quiz-container");

// global variables
var questionArray = [
  {question: "Which method adds a new item to the end of an array and returns the new length?",
  options: ["shift()", "return()", "push()", "pop()"],
  answer: "push()"},

  {question: "Which of the following is NOT a Git commd?",
  options:["pwd", "Rm -rf", "mkdir", "new"],
  answer: "new"},

  {question: "Which display styling hides an element from the page?",
  options: ["none", "inline", "block", "empty"],
  answer: "none"},

  {question: "Which of the following is NOT a primitive type in JavaScript?",
  options: ["string", "array", "boolean", "undefined"],
  answer: "array"},

  {question: "After creating an element in JavaScript, to see it on the page you need to _________ .",
  options:["document.getElementById", "element.appendChild", "element.textContent", "element.setAttribute"],
  answer: "element.appendChild"},
  ];

var userAnswers = ["","","","",""];
var userCorrect = 0;
var userIncorrect = 0;
var userScore = 0;
var questionIndex = 0;


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

// start questions
function startQuestions () {
  // appends elements to page
  mainEl.innerHTML = ("");

  // js created elements
  var questionContainer = document.createElement("div");
  var question = document.createElement("h2");
  var btnContainer = document.createElement("div");
  var nextBtn = document.createElement("button");

  // for loop to run through each item in question array
  for(var i = 0; i < questionArray[questionIndex].options.length; i++){
    var answerBtn = document.createElement("button");

    // add text to js elements
    question.textContent = questionArray[questionIndex].question;
    answerBtn.textContent = questionArray[questionIndex].options[i];
    nextBtn.textContent = "Next";

    // append js elements to html elements
    mainEl.appendChild(questionContainer);
    questionContainer.appendChild(question);
    questionContainer.appendChild(btnContainer);
    btnContainer.appendChild(answerBtn);
    btnContainer.appendChild(nextBtn);

    // styles js elements
    questionContainer.setAttribute("style", " margin:auto; width:50%; text-align:center; display: block; ");
    answerBtn.setAttribute("style", " color: #cbece0; background: #e0cbec; border-radius: 100px; font-size: 18px; padding: 7px 20px; border: 0; margin: 50px; font-weight:bold; ");
    nextBtn.setAttribute("style", " color: #cbece0; background: #e0cbec; border-radius: 100px; font-size: 18px; padding: 7px 20px; border: 0; margin: 50px; font-weight:bold; ");

  }
  // runs through each question
  questionIndex++
  };

// call functions at click of start button
startBtn.addEventListener("click",function() {
  hideHomepage();
  startQuestions ();
  // add other functions that start when you click start
});
