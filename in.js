var output = document.getElementById("output");

var userNames = { a: "Mike", b: "John", c: "Larry" };

for (var x in document) {
  output.innerHTML += x + " = " + document[x] + "<br>";
}
