var canvasWidth = 960;
var canvasHeight = 500;

var dotMargin = 25;
var numRows = 5;
var numCols = 10;

var curRandomSeed;

function setup () {
  curRandomSeed = int(focusedRandom(0, 100));
  createCanvas(canvasWidth, canvasHeight);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function mousePressed() {
    changeRandomSeed();
}

function draw () {
  background(255);
  resetFocusedRandom(curRandomSeed);

  var x_steps = 1 + Math.floor(width / 80);
  var y_steps = 1 + Math.floor(height / 80);

  var dotWidth = ((canvasWidth - (2 * dotMargin)) / numCols) - dotMargin;
  var dotHeight = ((canvasHeight - (2 * dotMargin)) / numRows) - dotMargin;

  if( dotWidth > dotHeight ) {
    var dotDiameter = dotHeight;
    var xMargin = (canvasWidth - ((2 * dotMargin) + (numCols * dotDiameter))) / numCols;
    var yMargin = dotMargin;
  } else {
    var dotDiameter = dotWidth;
    var xMargin = dotMargin;
    var yMargin = (canvasHeight - ((2 * dotMargin) + (numRows * dotDiameter))) / numRows;
  }

  var dotRadius = dotDiameter * 0.5;

  // draw a circle at each location
  for(var i=0;i<numRows;i++) {
    for(var j=0;j<numCols;j++) {
      var x = (j * (dotDiameter + xMargin)) + dotMargin + (xMargin / 2) + dotRadius;
      var y = (i * (dotDiameter + yMargin)) + dotMargin + (yMargin / 2) + dotRadius;
      var shade = focusedRandom(60, 150, 3);
      fill(shade);
      drawDot(x, y, dotRadius, color);
    }
  }

}

function drawDot(x, y, radius, color) {
  noStroke();
  // fill(color);
  ellipse(x, y, radius, radius);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}