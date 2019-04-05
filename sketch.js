const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  "size": 80,
  "offsetx": 0,
  "offsety": 35,
  // "offsetx3": 10,
  // "offset3": 10
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0
}

const colorFront1  = "#CDC1DE";
const colorFront2  = "#BDACD4";
const colorFront3  = "#DED5E9";
const colorBack    = "#EEEAF4";
const colorStroke  = "#746CC0";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(2);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  let size3 = letterData["size3"]
  let pos3x = posx + letterData["offsetx3"];
  let pos3y = posy + letterData["offsetx3"];

  noStroke();
  fill(colorFront1);
  square(posx, posy, 150, 150);
  fill(colorFront2);
  square(pos2x, pos2y, size2, size2);
  fill(colorFront3);
  square(pos3x, pos3y, 100, 100);
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