var output = document.getElementById("output");
for (var x = 0; x <= 31; x++) {
  if (x % 2 !== 0) {
    output.innerHTML += "value of x is =" + x + "<br>";
  }
}

var output = document.getElementById("output");
var caloriesBanana = 89;
var bananas = prompt("How many bananas do you want to eat?");
var total = 0;
var holder;
for (var x = 1; x <= bananas; x++) {
  total += caloriesBanana;
  holder = x > 1 ? "bananas another" : "banana";
  output.innerHTML +=
    "You ate " +
    x +
    " " +
    holder +
    "  " +
    caloriesBanana +
    " calories added to your total now at  " +
    total +
    "<br>";
}
output.innerHTML += "Your total calorie count is " + total;
