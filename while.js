// do-while
var output = document.getElementById("output");
var answer = prompt("How many times do you want me to loop?");
answer = Number(answer);
var x = 0;
do {
  x++;
  output.innerHTML += "value x = " + x + "<br>";
} while (x < answer);
output.innerHTML += "Final value of x = " + x + "<br>";

var output = document.getElementById("output");
var x = 0;
do {
  if (x % 2 === 0) {
    output.innerHTML += "value x = " + x + "<br>";
  }
  x++;
} while (x < 30);
output.innerHTML += "Final value of x = " + x + "<br>";

// while
var output = document.getElementById("output");
var answer = prompt("how many times should I loop?");
var x = 1;
while (x < answer) {
  output.innerHTML += "Value of x = " + x + "<br>";
  x++;
}
output.innerHTML += "Final value of x = " + x + "<br>";

var output = document.getElementById("output");
var secret = "javascript";
var crackCode = prompt("What is the secret word?");
while (crackCode != secret) {
  crackCode = prompt("guess again?");
}
output.innerHTML += "Final output";
