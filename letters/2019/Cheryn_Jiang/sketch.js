const canvasWidth = 960;
const canvasHeight = 500;
const PI = 3.14159;
const HALF_PI = PI/2;
const TWO_PI = PI*2;

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
  "size": 100,
  "offsetx": 50,
  "offsety": 0,
  "arcS": TWO_PI-PI/3, 
  "arcE": HALF_PI+PI/6,
  "arcS2": HALF_PI-PI/6, 
  "arcE2": TWO_PI-HALF_PI-PI/6, 
}

const letterB = {
  "size": 100,
  "offsetx": 0,
  "offsety": 0,
  "arcS": -HALF_PI, 
  "arcE": HALF_PI,
  "arcS2": -HALF_PI+PI/3, 
  "arcE2": HALF_PI-PI/3, 
}

const letterC = {
  "size": 100,
  "offsetx": 50,
  "offsety": 25,
  "arcS": HALF_PI, 
  "arcE": -HALF_PI,
}

const colorFront1  = "#69779b";
const colorFront2  = "#acdbdf";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  // stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let ArcStart = letterData["arcS"];
  let ArcEnd = letterData["arcE"];
  let ArcStart2 = letterData["arcS2"];
  let ArcEnd2 = letterData["arcE2"];

  // draw two circles
  stroke(colorStroke);
  fill(colorFront1);
  arc(posx, posy, 100, 100,ArcStart,ArcEnd);
  
  noStroke();
  fill(colorFront2);
  arc(pos2x, pos2y, size2, size2,ArcStart2,ArcEnd2);
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
