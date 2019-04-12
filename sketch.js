const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
    "shift1": -100,
    "tilt1": -45,
    "shift2": -100,
    "tilt2": -45,
    "shift3": -0,
    "tilt3": 45
}

const letterB = {
    "shift1": -100,
    "tilt1": -45,
    "shift2": -100,
    "tilt2": -45,
    "shift3": 100,
    "tilt3": 45
}

const letterC = {
    "shift1": -150,
    "tilt1": -45,
    "shift2": -100,
    "tilt2": -45,
    "shift3": -100,
    "tilt3": 45
}

const colorFront1  = "#CDC1DE";
const colorFront2  = "#BDACD4";
const colorFront3  = "#DED5E9";
const colorBack    = "#EEEAF4";
const colorStroke  = "#746CC0";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(2);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawPart(posx, posy, scale, offsetx, tilt) {
  push();
  noStroke();
  translate(posx + offsetx*scale/10, posy);
  rotate(tilt);
  square(-20*scale, -3*scale, 20*scale, 3*scale);
  pop();
}

function drawLetter(posx, posy, letterData) {

  let shift1 = letterData["shift1"];
  let tilt1 = letterData["tilt1"];
  let shift2 = letterData["shift2"];
  let tilt2 = letterData["tilt2"];
  let shift3 = letterData["shift3"];
  let tilt3 = letterData["tilt3"];

  // rotation in degrees (for tilt variable)
  angleMode(DEGREES);

  push();
  let scale=5;
  let y_offset = 10 * scale;

  //letter a
  fill(colorFront1);
  drawPart(posx, posy-y_offset, scale, shift1, tilt1);
  line(170, 205, 270, 305);
  line(170, 205, 70, 305);
  line(100, 290, 240, 290);

  //letter b
  fill(colorFront2);
  drawPart(posx,          posy, scale, shift2, tilt2);
  line(420, 205, 420, 370);
  line(420, 205, 520, 290);
  line(520, 290, 420, 370);
  line(425, 290, 510, 290);

  //letter c
  fill(colorFront3);
  drawPart(posx, posy+y_offset, scale, shift3, tilt3);
  line(645, 200, 555, 290);
  line(580, 285, 670, 375);

  pop();
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

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}