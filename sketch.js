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
    "shift1": -174,
    "tilt1": -70,
    "shift2": -104,
    "tilt2": 0,
    "shift3": -90,
    "tilt3": 58
}

const letterB = {
    "shift1": -191,
    "tilt1": -90,
    "shift2": -65,
    "tilt2": -49,
    "shift3": -40,
    "tilt3": 0
}

const letterC = {
    "shift1": -163,
    "tilt1": -65,
    "shift2": -220,
    "tilt2": 180,
    "shift3": -230,
    "tilt3": 210
}

const colorFront1  = "#FFA44C"; //orange
const colorFront2  = "#8CFFF1"; //light teal
const colorFront3  = "#00BAA3"; // dark teal
const colorBack    = "#e3eded"; // light grey
const colorStroke  = "#233f11"; // dark grey

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

// This function draws each individual box
function drawPart(posx, posy, scale, offsetx, tilt) {
  push();
  translate(posx + offsetx*scale/10, posy);
  rotate(tilt);
  rect(-20*scale, -3*scale, 20*scale, 3*scale);
  ellipse
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

  // rotation in degrees (for tilt variable)
  angleMode(DEGREES);

  // draw letters
  fill(colorFront1);
  noStroke();

  push();
  let scale=5;
  let y_offset = 5 * scale;
  drawPart(posx, posy-y_offset, scale, shift1, tilt1);
  drawPart(posx,          posy, scale, shift2, tilt2);
  drawPart(posx, posy+y_offset, scale, shift3, tilt3);
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
