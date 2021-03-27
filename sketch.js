const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  "linePoints": 4,
  "point1": 3,
  "point2": 6,
  "point3": 1,
  "point4": 4,
  "point5": 4
}

const letterB = {
  "linePoints": 5,
  "point1": 4,
  "point2": 0,
  "point3": 6,
  "point4": 2,
  "point5": 0
}

const letterC = {
  "linePoints": 3,
  "point1": 2,
  "point2": 4,
  "point3": 6,
  "point4": 6,
  "point5": 6
}

const backgroundColor  = "#000000";
const strokeColor      = "#ffffff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // clear screen
  background(backgroundColor);

  // color/stroke setup
  stroke(strokeColor);

  // draw background stars
  for (let i = 0; i < 600; i++) {
    strokeWeight(random(1, 4));
    point(random(width), random(height));
  }

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  let radius = 50;

  // draw points around the circle
  for (let i = 0; i < 8; i++) {
    for (let j = 1; j <= letterData["linePoints"]; j++) {
      if (letterData["point"+j] == i) {
        strokeWeight(8);
      } else {
        strokeWeight(random(1, 4));
      }
      point(radius * cos(i * PI/4) + posx, radius * sin(i * PI/4) + posy);
    }
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
