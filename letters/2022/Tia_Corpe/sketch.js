const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  "R2posX": 0,
  "R2posY": 25,
  "Rheight2": 50,
  "Rwidth2": 50,

  "R3posX": 0,
  "R3posY": 75,
  "Rheight3": 50,
  "Rwidth3": 50
}

const letterB = {
  "R2posX": 25,
  "R2posY": -75,
  "Rheight2": 50,
  "Rwidth2": 100,

  "R3posX": 0,
  "R3posY": 25,
  "Rheight3": 50,
  "Rwidth3": 50
}

const letterC = {
  "R2posX": 25,
  "R2posY": -25,
  "Rheight2": 50,
  "Rwidth2": 100,

  "R3posX": 25,
  "R3posY": 25,
  "Rheight3": 50,
  "Rwidth3": 100
}

// colours
const backgroundColor  = "#f2d4ff"; // pastel purple
const strokeColor      = "#590080"; // dark purple

const darkPurple  = "#7a1da3";
const lightPurple  = "#cb4fff";

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
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second rect
  let pos2x = posx + letterData["R2posX"];
  let pos2y = posy + letterData["R2posY"];
  let rectHeight2 = letterData["Rheight2"]
  let rectWidth2 = letterData["Rwidth2"]

  // determine parameters for third rect
  let pos3x = posx + letterData["R3posX"];
  let pos3y = posy + letterData["R3posY"];
  let rectHeight3 = letterData["Rheight3"]
  let rectWidth3 = letterData["Rwidth3"]

  // draw two rects
  rectMode(CENTER);
  fill(darkPurple);
  rect(posx, posy, 150, 200);

  fill(lightPurple);
  rect(pos2x, pos2y, rectWidth2, rectHeight2);
  rect(pos3x, pos3y, rectWidth3, rectHeight3);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
