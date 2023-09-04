const canvasWidth = 960;
const canvasHeight = 500;


const letterA = {
  "size": 10,
  "offsetx": 0,
  "offsety": 0
}

const letterB = {
  "size": 70,
  "offsetx": -30,
  "offsety": -100
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0
}

const colorFront1  = "#FFD500";
const colorFront2  = "#C47C62";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];



  fill(colorFront1);
  noStroke();
  ellipse(posx, posy, 200, 200);
  fill(colorFront2);
  ellipse(pos2x, pos2y, 300, 10);
  fill(colorFront2);
  ellipse(pos2x, pos2x, 300, 10);

}

function draw () {
  // clear screen
  background(102,93,30);

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
