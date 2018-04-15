const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my six variable per letter are:
 *
   position1: x offset relative to centerline for box1
   tilt1:     rotation in degrees for box1
   position1: x offset relative to centerline for box2
   tilt1:     rotation in degrees for box2
   position1: x offset relative to centerline for box3
   tilt1:     rotation in degrees for box3
 *
 */

const letterA = {
  "x1": -100,
  "y1": -50
  "r1": -60,
  // "position2": -104,
  // "tilt2": -4,
  // "position3": -121,
  // "tilt3": 58
}

const letterB = {
  // "position1": -191,
  // "tilt1": -90,
  // "position2": -54,
  // "tilt2": -45,
  // "position3": -12,
  // "tilt3": 6
}

const letterC = {
  // "position1": -163,
  // "tilt1": -84,
  // "position2": -191,
  // "tilt2": 163,
  // "position3": 0,
  // "tilt3": -27
}

const colorFront  = "#281c1c";
const colorBack   = "#ffcfcd";
const colorStroke = "#ffffff";
const colorInside = "#ffffff"

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  strokeWeight(3);

  // rotation in degrees (for tilt variable)
  angleMode(DEGREES);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

// This function draws each individual box
function drawPart(posx, posy, scale, offsetx, tilt) {
  resetMatrix();

  push();
  noStroke();
  translate(posx + offsetx*scale/10, posy);
  rotate(tilt);
  fill(colorFront);
  rect(-20*scale, -3*scale, 150, 20, 7);
  rect(-20*scale, -3*scale + 32, 150, 20, 7);

  fill(colorInside);
  rect(-20*scale + 10, -3*scale + 20, 130, 12, 5);
  pop();
}

// This funciton draws each letter, which is made up of three boxes
function drawLetter(posx, posy, scale, letterData) {
  let y_offset = 10 * scale;
  drawPart(posx, posy-y_offset, scale, letterData["position1"], letterData["tilt1"]);
  drawPart(posx,          posy, scale, letterData["position2"], letterData["tilt2"]);
  drawPart(posx, posy+y_offset, scale, letterData["position3"], letterData["tilt3"]);
  // drawPart(posx, posy+y_offset, scale, letterData["position4"], letterData["tilt4"]);
}

function draw () {
  background(colorBack);
  // fill(colorFront);
  stroke(colorStroke);

  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;
  drawLetter(center_x - 120, center_y, 10, letterA);
  drawLetter(center_x + 120, center_y, 10, letterB);
  drawLetter(center_x + 360, center_y, 10, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
