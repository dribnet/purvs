const canvasWidth  = 960;
const canvasHeight = 500;

const color        = "#F1FAF1";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

const width  = 120;
const height = 120;

const letterA = {
  "offsetX1": 0,
  "offsetY1": -65,
  "start1": 0,
  "end1": 180,
  "offsetX2": 0,
  "offsetY2": 65,
  "start2": 180,
  "end2": 360,
  "lineWidth": 0,
  "lineHeight": 0
}

const letterB = {
  "offsetX1": 0,
  "offsetY1": -15,
  "start1": 180,
  "end1": 360,
  "offsetX2": 0,
  "offsetY2": 15,
  "start2": 0,
  "end2": 180,
  "lineWidth": 60,
  "lineHeight": 0
}

const letterC = {
  "offsetX1": 0,
  "offsetY1": -40,
  "start1": 90,
  "end1": 270,
  "offsetX2": 0,
  "offsetY2": 40,
  "start2": 270,
  "end2": 90,
  "lineWidth": 20,
  "lineHeight": 40
}

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  ellipseMode(CENTER);
  angleMode(DEGREES);


  // color/stroke setup
  noFill();
  strokeWeight(2.5);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  var posX1 = posx + letterData["offsetX1"];
  var posY1 = posy + letterData["offsetY1"];
  var start1 = letterData["start1"];
  var end1 = letterData["end1"];

  var posX2 = posx + letterData["offsetX2"];
  var posY2 = posy + letterData["offsetY2"];
  var start2 = letterData["start2"];
  var end2 = letterData["end2"];

  var rectWidth = letterData["lineWidth"];
  var rectHeight = letterData["lineHeight"];

  noStroke();
  fill(color);
  ellipse(posX1,posY1, width);
  ellipse(posX2,posY2, width);
  
  noFill();
  stroke(colorStroke);
  push();
    arc(posX1, posY1, width, height, start1, end1, OPEN);
  pop();
  rect(posx-(rectWidth/2), posy-(rectHeight/2), rectWidth, rectHeight, 20);
  push();
    arc(posX2, posY2, width, height, start2, end2, OPEN);
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}