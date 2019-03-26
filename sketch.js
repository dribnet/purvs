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
  "arcS": PI, 
  "arcE": TWO_PI,
  "movetriX1" : 0,
  "triX1toX2" : -40,
  "triX1toX3" : 40,
  "movetriY1" : -20,
  "triY1toY2" : 60,
  "triY1toY3" : 60
}

const letterB = {
  "arcS": HALF_PI + PI, 
  "arcE": HALF_PI,
  "movetriX1" : 0,
  "triX1toX2" : 0,
  "triX1toX3" : 40,
  "movetriY1" : 0,
  "triY1toY2" : 40,
  "triY1toY3" : 40
}

const letterC = {
  "arcS": HALF_PI, 
  "arcE": PI + HALF_PI,
  "movetriX1" : 10,
  "triX1toX2" : -30,
  "triX1toX3" : 0,
  "movetriY1" : -20,
  "triY1toY2" : 20,
  "triY1toY3" : 40
}

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  //stroke(0);
  //noFill();
  //strokeWeight(5);
  //strokeCap(PROJECT);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let ArcStart = letterData["arcS"];
  let ArcEnd = letterData["arcE"];
  let triangleX1 = letterData["movetriX1"]
  let triangleX1toX2 = letterData["triX1toX2"]
  let triangleX1toX3 = letterData["triX1toX3"]
  let triangleY1 = letterData["movetriY1"]
  let triangleY1toY2 = letterData["triY1toY2"]
  let triangleY1toY3 = letterData["triY1toY3"]

  // draw two circles

  //fill(colorFront1);
  //ellipse(posx, posy, 150, 150);
  //fill(colorFront2);
  //ellipse(pos2x, pos2y, size2, size2);
  noStroke();
  fill(255,70,67,200);
  arc(posx,posy,80,80,ArcStart,ArcEnd);
  fill(64,102,93,200);
  triangle(posx+triangleX1,posy+triangleY1,posx+triangleX1+triangleX1toX2,posy+triangleY1+triangleY1toY2, posx+triangleX1+triangleX1toX3, posy+triangleY1+triangleY1toY3);
}

function draw () {
  // clear screen
  background(200);

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
