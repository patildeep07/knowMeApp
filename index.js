// Import Library

var readlineSync = require("readline-sync");

// Defining the variables we are going to use

var score = 0

var questionList = [
  {
    question: "What is my name? ",
    answer: "Deep"
  },
  {
    question: "What is my age? ",
    answer: "21"
  },
  {
    question: "Where do I live? \n A. Kalwa \n B. Kalyan \n Choose the correct option (A or B)",
    answer: "A"
  },
  {
    question: "Am I still going to the gym? (yes or no) ",
    answer: "yes"
  }
]

// Defining functions

function play(question, answer) {
    // console.log(question)
    var userAnswer = readlineSync.question(question, " ")
    if (answer.toUpperCase() === userAnswer.toUpperCase()) {
      console.log("Correct Answer!")
      score++
    } else {
      console.log("Uh-oh! You got it Wrong")
    }
  
    console.log("Current Score is ", score)
  }
  
  // Intro
  
  var userName = readlineSync.question("What is your Username? ")
  console.log("Welcome ", userName, " to my How well do you Know me quiz")
  