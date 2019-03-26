const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
    "shift1": -165,
    "tilt1": -55,
    "shift2": -190,
    "tilt2": -69,
    "shift3": -120,
    "tilt3": -0,
    "shift4": -120,
    "tilt4": 58,
    "shift5": -100,
    "tilt5": -69
}

const letterB = {
    "shift1": -190,
    "tilt1": -90,
    "shift2": -190,
    "tilt2": -90,
    "shift3": -98,
    "tilt3": 1.2,
    "shift4": -120,
    "tilt4": 50,
    "shift5": -103,
    "tilt5": -50
}

const letterC = {
    "shift1": -180,
    "tilt1": -90,
    "shift2": -195,
    "tilt2": 143,
    "shift3": -180,
    "tilt3": -100,
    "shift4": -100,
    "tilt4": -35,
    "shift5": -86,
    "tilt5": 58
}

const colorFront1  = "#BF5241";
const colorBack    = "#211F15";
const colorStroke  = "#FFEAFF";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(1);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawPart(posx, posy, scale, offsetx, tilt) {
  push();
  translate(posx + offsetx*scale/8, posy);
  rotate(tilt);
  rect(-12*scale, -3*scale, 12*scale, 3*scale);
  pop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let shift1 = letterData["shift1"];
  let tilt1 = letterData["tilt1"];
  let shift2 = letterData["shift2"];
  let tilt2 = letterData["tilt2"];
  let shift3 = letterData["shift3"];
  let tilt3 = letterData["tilt3"];
  let shift4 = letterData["shift4"];
  let tilt4 = letterData["tilt4"];
  let shift5 = letterData["shift5"];
  let tilt5 = letterData["tilt5"];
  let shift6 = letterData["shift6"];
  let tilt6 = letterData["tilt6"];

  // rotation in degrees (for tilt variable)
  angleMode(DEGREES);

  // draw two circles
  fill(colorFront1);
  //ellipse(posx, posy, 150, 150);
  //fill(colorFront2);
  //ellipse(pos2x, pos2y, size2, size2);
 
 push();
  let scale=5;
  let y_offset = 5 * scale;
  drawPart(posx, posy-y_offset, scale, shift1, tilt1);
  drawPart(posx,          posy, scale, shift2, tilt2);
  drawPart(posx, posy+y_offset, scale, shift3, tilt3);
 // drawPart(posx, posy+y_offset, scale, shift3, tilt4);
  drawPart(posx, posy+y_offset, scale, shift4, tilt4);
  drawPart(posx, posy+y_offset, scale, shift5, tilt5);
  drawPart(posx, posy-y_offset, scale, shift6, tilt6);
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
