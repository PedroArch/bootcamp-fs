window.addEventListener("load", start);

var redRangeBar = document.querySelector("#redRange");
var greenRangeBar = document.querySelector("#greenRange");
var blueRangeBar = document.querySelector("#blueRange");

var redTextBox = document.querySelector("#redTextBox");
var greenTextBox = document.querySelector("#greenTextBox");
var blueTextBox = document.querySelector("#blueTextBox");

var palette = document.querySelector("#palette");

function start() {
  redRangeBar.addEventListener("input", handleRanges);
  greenRangeBar.addEventListener("input", handleRanges);
  blueRangeBar.addEventListener("input", handleRanges);
}

function handleRanges() {
  var red = redRangeBar.value;
  var green = greenRangeBar.value;
  var blue = blueRangeBar.value;

  redTextBox.value = red;
  greenTextBox.value = green;
  blueTextBox.value = blue;

  console.log("red", red);
  console.log("green", green);
  console.log("blue", blue);

  setColors(red, green, blue);
}

function setColors(red, green, blue) {
  palette.setAttribute(
    "style",
    "background-color: rgb(" + red + ", " + green + ", " + blue + ")"
  );
}

start();
