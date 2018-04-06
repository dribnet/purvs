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
  "posX1": 200,
  "posX2": 220,
  "posY1": 200,
  "posY2": 250,
  "offset1X1": -80,
  "offset1X2": -120,
  "offset1Y1": 0,
  "offset1Y2": 0,
  "offset2X1": -30,
  "offset2X2": -70,
  "offset2Y1": 0,
  "offset2Y2": -50
}

const letterB = {
  "posX1": 450,
  "posX2": 450,
  "posY1": 200,
  "posY2": 250,
  "offset1X1": 0,
  "offset1X2": 0,
  "offset1Y1": -70,
  "offset1Y2": -70,
  "offset2X1": 30,
  "offset2X2": 60,
  "offset2Y1": -10,
  "offset2Y2": -60
}

const letterC = {
  "posX1": 770,
  "posX2": 800,
  "posY1": 230,
  "posY2": 250,
  "offset1X1": 0,
  "offset1X2": 0,
  "offset1Y1": -80,
  "offset1Y2": -120,
  "offset2X1": -10,
  "offset2X2": -50,
  "offset2Y1": -40,
  "offset2Y2": -60

}

const colorFront  = "#fff968";
const colorBack   = "#e3eded";
const colorStroke = "#ffb168";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  let posx1 = letterData["posX1"];
  let posx2 = letterData["posX2"];
  let posy1 = letterData["posY1"];
  let posy2 = letterData["posY2"];
  let offset1x1 = posx1 + letterData["offset1X1"];
  let offset1x2 = posx2 + letterData["offset1X2"];
  let offset1y1 = posy1 + letterData["offset1Y1"];
  let offset1y2 = posy2 + letterData["offset1Y2"];
  let offset2x1 = posx1 + letterData["offset2X1"];
  let offset2x2 = posx2 + letterData["offset2X2"];
  let offset2y1 = posy1 + letterData["offset2Y1"];
  let offset2y2 = posy2 + letterData["offset2Y2"];

  // draw two circles
  line(posx1, posy1, posx2, posy2);
  line(offset1x1, offset1y1, offset1x2, offset1y2);
  line(offset2x1, offset2y1, offset2x2, offset2y2);
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, 10, letterA);
  drawLetter(center_x      , center_y, 10, letterB);
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
