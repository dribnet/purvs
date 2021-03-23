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
  "size": 75,
  "linePoints": 4,
  "point1": 3,
  "point2": 6,
  "point3": 1,
  "point4": 4,
  "point5": null
}

const letterB = {
  "size": 75,
  "linePoints": 5,
  "point1": 4,
  "point2": 0,
  "point3": 6,
  "point4": 2,
  "point5": 0
}

const letterC = {
  "size": 75,
  "linePoints": 3,
  "point1": 2,
  "point2": 4,
  "point3": 6,
  "point4": null,
  "point5": null
}

const backgroundColor  = "#000000";
const strokeColor      = "#ffffff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);

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
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let radius = letterData["size"];

  // draw a circle
  strokeWeight(1);
  noFill();
  ellipse(posx, posy, radius * 2);

  // draw points around the circle
  strokeWeight(8);
  for (let i = 0; i < 8; i++) {
    point(radius * cos(i * PI/4) + posx, radius * sin(i * PI/4) + posy);
  }

  strokeWeight(2);
  for (let i = 1; i <= letterData["linePoints"]; i++) {
    let lineStartX = radius * cos(letterData["point"+i] * PI/4) + posx;
    let lineStartY = radius * sin(letterData["point"+i] * PI/4) + posy;
    let lineEndX, lineEndY;
    if (letterData["linePoints"] < i + 1) {
      lineEndX = lineStartX;
      lineEndY = lineStartY;
    } else {
      lineEndX = radius * cos(letterData["point"+(i+1)] * PI/4) + posx;
      lineEndY = radius * sin(letterData["point"+(i+1)] * PI/4) + posy;
    }
    line(lineStartX, lineStartY, lineEndX, lineEndY);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
