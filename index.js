// Import Library


var readlineSync = require("readline-sync");
const chalk = require(`chalk`);

// Defining the variables we are going to use

var score = 0

var rightAns = chalk.green;
var wrongAns = chalk.red;
var userColor = chalk.yellowBright.bold;
var finalMessage = chalk.yellow.bold;
var queColor = chalk.blue.italic;

var questionList = [
  {
    question: "What is my name?   ",
    answer: "Deep"
  },
  {
    question: "What is my age?   ",
    answer: "21"
  },
  {
    question: "Where do I live? \n A. Kalwa \n B. Kalyan \n Choose the correct option (A or B)  ",
    answer: "A"
  },
  {
    question: "Am I still going to the gym? (yes or no)  ",
    answer: "yes"
  },
  {
    question: "Do I like learning WebDev? (yes or no)  ",
    answer: "yes"
  },
  {
    question: "Whats my birthdate? \n A.12th Sep 2000 \n B. 12th Oct 2000 \n C. 12th Sep 2001 \n D. 12th Oct 2001  ",
    answer: "B"
  },
  {
    question: "Do I like anime? (yes or no)  ",
    answer: "yes"
  },
  {
    question: "Have I completed my engineering? (yes or no)  ",
    answer: "yes"
  },
  {
    question: "Whats my favorite dish? A. Chicken \n B. Prawns  ",
    answer: "B"
  },
  {
    question: "Whats my name? A. Deep \n B. Dip?  ",
    answer: "A"
  }
]

// Defining functions

function play(question, answer) {
  // console.log(question)
  var userAnswer = readlineSync.question(queColor(question))
  if (answer.toUpperCase() === userAnswer.toUpperCase()) {
    console.log(rightAns("Correct Answer!"))
    score++
  } else {
    console.log(wrongAns("Uh-oh! You got it Wrong"))
  }

  console.log("Current Score is ", score)
}

// Intro

var userName = readlineSync.question("What is your Username? ")
console.log(userColor("Welcome ", userName, " to my How well do you Know me quiz"))

// Calling Functions and Loop

// console.log(questionList[0])


for (i = 0; i < questionList.length; i++) {
  play(questionList[i].question, questionList[i].answer)
}

// Exit message

console.log(finalMessage("Final Score is ", score))
console.log(finalMessage("Thank you ", userName, " for playing this quiz!"))