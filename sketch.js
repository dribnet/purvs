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
  "circleR1": 30,
  "r1x": 55,
  "r1y": -20,
  "circleR2": 0,
  "r2x": 0,
  "r2y": 0,
  "circleR3": 30,
  "r3x": 70,
  "r3y": 50,
  "redline1": 100,
  "rl1x": 55,
  "rl1y": -50,
  "redline2": 0,
  "rl2x": 0,
  "rl2y": 0,
  "circleY1": 30,
  "y1x": 20,
  "y1y": 0,
  "circleY2": 30,
  "y2x": -20,
  "y2y": 20,
  "circleY3": 30,
  "y3x": 20,
  "y3y": 40,
  "yellowline1": 40,
  "yl1x": -20,
  "yl1y": 10,
  "yellowline2": 10,
  "yl2x": 20,
  "yl2y": 10
}

const letterB = {
  "circleR1": 30,
  "r1x": -50,
  "r1y": -150,
  "circleR2": 30,
  "r2x": -50,
  "r2y": -50,
  "circleR3": 30,
  "r3x": -60,
  "r3y": 50,
  "redline1": 100,
  "rl1x": -65,
  "rl1y": -50,
  "redline2": 50,
  "rl2x": -50,
  "rl2y": -100,
  "circleY1": 30,
  "y1x": -20,
  "y1y": 0,
  "circleY2": 30,
  "y2x": 30,
  "y2y": 30,
  "circleY3": 30,
  "y3x": -20,
  "y3y": 50,
  "yellowline1": 40,
  "yl1x": -30,
  "yl1y": -10,
  "yellowline2": 40,
  "yl2x": 30,
  "yl2y": 0
}

const letterC = {
  "circleR1": 0,
  "r1x": 0,
  "r1y": 0,
  "circleR2": 30,
  "r2x": -60,
  "r2y": -35,
  "circleR3": 30,
  "r3x": -60,
  "r3y": 50,
  "redline1": 90,
  "rl1x": -70,
  "rl1y": -40,
  "redline2": 0,
  "rl2x": 0,
  "rl2y": 0,
  "circleY1": 30,
  "y1x": 0,
  "y1y": -35,
  "circleY2": 0,
  "y2x": 0,
  "y2y": 0,
  "circleY3": 30,
  "y3x": 0,
  "y3y": 50,
  "yellowline1": 40,
  "yl1x": -30,
  "yl1y": -40,
  "yellowline2": 20,
  "yl2x": 0,
  "yl2y": 50
  }

const backgroundColor  = "#16041c";
const strokeColor      = "#b78b49";

const lightRed  = "#cb644e";
const lightYellow = "#b78b49";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 230, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 200, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for red circle
  let circleR1 = letterData["circleR1"];
  let circleR2 = letterData["circleR2"];
  let circleR3 = letterData["circleR3"];
  let posR1x = posx + letterData["r1x"];
  let posR1y = posy + letterData["r1y"];
  let posR2x = posx + letterData["r2x"];
  let posR2y = posy + letterData["r2y"];
  let posR3x = posx + letterData["r3x"];
  let posR3y = posy + letterData["r3y"];
  //Yellow circle
  let circleY1 = letterData["circleY1"];
  let circleY2 = letterData["circleY2"];
  let circleY3 = letterData["circleY3"];
  let posY1x = posx + letterData["y1x"];
  let posY1y = posy + letterData["y1y"];
  let posY2x = posx + letterData["y2x"];
  let posY2y = posy + letterData["y2y"];
  let posY3x = posx + letterData["y3x"];
  let posY3y = posy + letterData["y3y"];
  //red lines
  let redline1 = letterData["redline1"]
  let redline2 = letterData["redline2"]
  let rl1x = posx + letterData["rl1x"];
  let rl1y = posy + letterData["rl1y"];
  let rl2x = posx + letterData["rl2x"];
  let rl2y = posy + letterData["rl2y"];
  //yellow lines
  let yellowline1 = letterData["yellowline1"]
  let yellowline2 = letterData["yellowline2"]
  let yl1x = posx + letterData["yl1x"];
  let yl1y = posy + letterData["yl1y"];
  let yl2x = posx + letterData["yl2x"];
  let yl2y = posy + letterData["yl2y"];

  // yellow circles
  noStroke()
  fill(lightYellow);
  ellipse(posY1x, posY1y, circleY1, circleY1);
  ellipse(posY2x, posY2y, circleY2, circleY2);
  ellipse(posY3x, posY3y, circleY3, circleY3);
  //yellow lines
  rect(yl1x, yl1y, yellowline1, 10);
  rect(yl2x, yl2y, 10, yellowline2);
  // red
  fill(lightRed);
  ellipse(posR1x, posR1y, circleR1, circleR1);
  ellipse(posR2x, posR2y, circleR2, circleR2);
  ellipse(posR3x, posR3y, circleR3, circleR3);
  //red lines
  rect(rl1x, rl1y, 10, redline1);
  rect(rl2x, rl2y, 10, redline2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
