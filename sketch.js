var canvasWidth = 960;
var canvasHeight = 500;

var slider1, slider2, slider3, slider4, slider5;
var faceSelector;

var dotMargin = 5;
// var numRows = 10;
// var numCols = 20;

var curRandomSeed;

function setup () {
  curRandomSeed = int(focusedRandom(0, 100));
  createCanvas(canvasWidth, canvasHeight);

  // create sliders
  slider1 = createSlider(0, 100, 50);
  slider2 = createSlider(0, 100, 50);
  slider3 = createSlider(0, 100, 50);
  slider4 = createSlider(0, 100, 50);
  slider5 = createSlider(0, 100, 50);

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');
  slider5.parent('slider5Container');

  faceSelector = createSelect();
  faceSelector.option('1');
  faceSelector.option('2');
  faceSelector.option('3');
  faceSelector.option('all')
  faceSelector.value('all');
  faceSelector.parent('selector1Container');

  angleMode(DEGREES);
  rectMode(CENTER);
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

  var s1 = slider1.value();
  var s2 = slider2.value();
  var s3 = slider3.value();
  var s4 = slider4.value();
  var s5 = slider5.value();

  var lineWeight = map(s1, 0, 100, 4, 8);
  var numRows = Math.floor(map(s2, 0, 100, 6, 10));
  var numCols = Math.floor(map(s3, 0, 100, 15, 20));

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
      //var shade = focusedRandom(60, 150, 3);
      stroke(0);
      strokeWeight(lineWeight);
      drawDot(x, y, dotRadius, color);
    }
  }

}

function drawDot(x, y, radius, color) {
  noFill();
  var randAng = random(360);
  arc(x , y , radius, radius, randAng, randAng + 40);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}