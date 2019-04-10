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
    "shift1": -224,
    "shift1y": 0,
    "tilt1": 240,
    "shift2": 20,
    "tilt2": -4,
    "shift3": -121,
    "tilt3": 100
}

const letterB = {
    "shift1": 60,
    "shift1y": 10,
    "tilt1": -20,
    "shift2": -30,
    "tilt2": -120,
    "shift3": -100,
    "tilt3": 20
}

const letterC = {
    "shift1": -100,
    "shift1y": 20,
    "tilt1": 20,
    "shift2": 50,
    "tilt2": 130,
    "shift3": 0,
    "tilt3": -100
}

const colorFront1  = "#1b1b1b";
const colorBack    = "#2d2d2d";
const colorStroke  = "#f4dc42";

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

// This function draws each individual box
function drawPart(posx, posy, scale, offsetx, offsety, tilt) {
  push();
  translate(posx + offsetx*scale/10, posy + offsety);
  rotate(tilt);
  triangle(-10*scale, scale, -10*scale, -30*scale, 10*scale, 30*scale);
  pop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let shift1 = letterData["shift1"];
  let shift1y = letterData["shift1y"];
  let tilt1 = letterData["tilt1"];
  let shift2 = letterData["shift2"];
  let tilt2 = letterData["tilt2"];
  let shift3 = letterData["shift3"];
  let tilt3 = letterData["tilt3"];

  // rotation in degrees (for tilt variable)
  angleMode(DEGREES);

  // draw two circles
  fill(colorFront1);



  push();
  let scale=3;
  let y_offset = 5 * scale;
  drawPart(posx, posy-y_offset, scale, shift1, shift1y, tilt1);
  drawPart(posx,          posy, scale, shift2, 0, tilt2);
  drawPart(posx, posy+y_offset, scale, shift3, 0, tilt3);
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
