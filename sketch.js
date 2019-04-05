const canvasWidth = 960;
const canvasHeight = 500;
//setting 'PI'
const PI = 3.14159;
const HALF_PI = PI/2;
const TWO_PI = PI*2;

/* 
 * my eight variable per letter are:
 *
  * `arcS` : angle to start the arc, specified in radians of the first circle
  * `arcE` : angle to stop the arc, specified in radians of the first circle
  * `arc2S` : angle to start the arc, specified in radians of the second circle
  * `arc2E` : angle to stop the arc, specified in radians of the second circle
  * `movetriX1` : X1 offset of the triangle relative to the posX
  * `triX1toX2` : X2 offset of the triangle relative to the posX
  * `triX1toX3` : X3 offset of the triangle relative to the posX
  * `movetriY1` : Y1 offset of the triangle relative to the posY
  * `triY1toY2` : Y2 offset of the triangle relative to the posY
  * `triY1toY3` : Y3 offset of the triangle relative to the posY
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


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for arc
  let ArcStart = letterData["arcS"];
  let ArcEnd = letterData["arcE"];
  // determine parameters for triangle
  let triangleX1 = letterData["movetriX1"]
  let triangleX1toX2 = letterData["triX1toX2"]
  let triangleX1toX3 = letterData["triX1toX3"]
  let triangleY1 = letterData["movetriY1"]
  let triangleY1toY2 = letterData["triY1toY2"]
  let triangleY1toY3 = letterData["triY1toY3"]

  // draw one arc
  noStroke();
  fill(255,70,67,200);
  arc(posx,posy,80,80,ArcStart,ArcEnd);
  // draw one triangle
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
