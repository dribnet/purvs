const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my ten variable per letter are:
 *
    arc start: angle in degrees of ring start point
    arc end: angle in degrees of ring end point
    line1(2) length: length of line
    line1(2) tilt: angle in degrees of line
    line1(2) x: x axis position of line
    line1(2) y: y axis position of line
 *
 */

const letterA = {
  "arc Start": 120,
  "arc End": -60,
  "length1": 150,
  "tilt1": 0,
  "position1 X": -125,
  "position1 Y": 0,
  "length2": 220,
  "tilt2": 90,
  "position2 X": 30,
  "position2 Y": -120,
}

const letterB = {
  "arc Start": -100,
  "arc End": 100,
  "length1": 250,
  "tilt1": 90,
  "position1 X": 0,
  "position1 Y": -120,
  "length2": 130,
  "tilt2": 0,
  "position2 X": 0,
  "position2 Y": 0,
}

const letterC = {
  "arc Start": 45,
  "arc End": -45,
  "length1": 0,
  "tilt1": 0,
  "position1 X": 0,
  "position1 Y": 0,
  "length2": 0,
  "tilt2": 0,
  "position2 X": 0,
  "position2 Y": 0,
}

const colorBack = "#ffffff";
const colorLine = "#000000";
const colorRing = "#dbdbdb";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  let start = letterData["arc Start"];
  let end = letterData["arc End"];

  let length1 = letterData["length1"];
  let tilt1 = letterData["tilt1"];
  let posx1 = letterData["position1 X"];
  let posy1 = letterData["position1 Y"];

  let length2 = letterData["length2"];
  let tilt2 = letterData["tilt2"];
  let posx2 = letterData["position2 X"];
  let posy2 = letterData["position2 Y"];

  angleMode(DEGREES);

  //draw line behind ring
  strokeWeight(5);
  noFill();
  stroke(colorLine);
  if(length1>0){
    drawLine(length1, tilt1, posx1+ posx, posy1 + posy);
  }
  
  //draw ring
  stroke(colorRing);
  strokeWeight(20);
  arc(posx, posy, 200, 200, start, end);

  //draw line in front of ring
  strokeWeight(5);
  stroke(colorLine);
  if(length2>0){
    drawLine(length2, tilt2, posx2+ posx, posy2 + posy);
  }
}

function drawLine(length, tilt, posx, posy) {
  push();
  translate(posx, posy);
  rotate(tilt);
  line(0, 0, length, 0);
  pop();
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, 10, letterA);
  drawLetter(center_x - 65 , center_y, 10, letterB);
  drawLetter(center_x + 250, center_y, 10, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
