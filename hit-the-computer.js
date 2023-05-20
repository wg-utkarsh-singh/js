window.onload = build;
var computer;
var offices = 9;
var timer;
var sCom;
var score = 0;
var cOff = true;

function build() {
  var html = "<h1>Hit the computer</h1>";
  for (var x = 0; x < offices; x++) {
    html +=
      '<div class="office"><div class="desk"></div><div class="computer"></div></div>';
  }
  document.querySelector(".gameboard").innerHTML = html;
  computer = document.querySelectorAll(".computer");
  for (var x = 0; x < computer.length; x++) {
    computer[x].addEventListener("click", hitcomputer, false);
  }
}

function popup() {
  cOff = true;
  sCom = computer[Math.floor(Math.random() * computer.length)];
  sCom.classList.add("popup");
  var rTime = Math.floor(Math.random() * 10) * 100 + 500;
  timer = setTimeout(hidecomputer, rTime);
}

function hidecomputer() {
  sCom.classList.remove("popup");
  popup();
}

function hitcomputer() {
  event.target.classList.remove("popup");
  if (cOff) {
    cOff = false;
    score++;
    document.querySelector(".score").innerHTML = score;
  }
  popup();
}

function start() {
  popup();
}
