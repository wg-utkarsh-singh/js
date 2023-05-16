// lesson 1
var userNames = ["mike", "john", "larry"];
var userInput = prompt("what is your name?");
var output = document.getElementById("output");
var htmlOutput = "";

if (userNames.indexOf(userInput) > -1) {
  alert("hello");
  htmlOutput = "welcome it was true";
  var age = prompt("age");
  htmlOutput += age > 18 ? " you are over 18" : " you are under 18";
} else {
  htmlOutput = "denied was not true ";
}
output.innerHTML = htmlOutput + ", " + userInput;

// lesson 2

var myTime = prompt("what hour is it?");
var output = document.getElementById("output");

if (myTime >= 8 && myTime < 12) {
  output.innerHTML = "Wake up its morning";
} else if (myTime >= 12 && myTime < 13) {
  output.innerHTML = "go to Lunch";
} else if (myTime >= 13 && myTime <= 16) {
  output.innerHTML = "Go to work";
} else if (myTime > 16 && myTime < 20) {
  output.innerHTML = "Dinner Time";
} else if (myTime >= 22) {
  output.innerHTML = "Time to go to sleep";
} else {
  output.innerHTML = "You should be sleeping";
}

// lesson 3

var myTime = prompt("What are you doing?");
var output = document.getElementById("output");
var html;

switch (myTime) {
  case "Get Up":
    html = "8:00AM";
    break;
  case "Lunch":
    html = "12:00PM";
    break;
  case "Dinner":
    html = "6:00PM";
    break;
  default:
    html = "Not found";
}

output.innerHTML = html;

// head or tails

var html = "something went wrong";
var output = document.getElementById("output");
var question = prompt("heads or tails");
var result = question == "heads" ? 1 : 0;
var randomNumber = Math.floor(Math.random() * 2);

if (result == randomNumber) {
  html = "yes guessed correctly";
} else {
  html = "you were wrong";
}
output.innerHTML = html;

// rand numbers

var answer = "something went wrong";
var output = document.getElementById("output");
var question = prompt("Ask me anything");
var randomNumber = Math.floor(Math.random() * 6);

switch (randomNumber) {
  case 0:
    answer = "it will work out";
    break;
  case 1:
    answer = "Maybe maybe not";
    break;
  case 2:
    answer = "Probably not";
    break;
  case 3:
    answer = "Highly likely";
    break;
  default:
    answer = "I don't know about that";
}
output.innerHTML = "You asked me " + question + "<br>I think that " + answer;
