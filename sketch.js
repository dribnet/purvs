const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  "size": 20,
  "offsetx": 0,
  "offsety": 50,
  "offsetx2": 50,
  "offsety2": 0,
  "centerValX": 100,
  "centerValY": 0,
  "leftVal": 100,
  "rightVal": 100,
  "topVal": 100,
  "bottomVal": 0
}

const letterB = {
  "size": 20,
  "offsetx": 0,
  "offsety": 50,
  "offsetx2": 50,
  "offsety2": 0,
  "centerValX": 100,
  "centerValY": 0,
  "leftVal": 100,
  "rightVal": 60,
  "topVal": 60,
  "bottomVal": 60
}

const letterC = {
  "size": 20,
  "offsetx": 0,
  "offsety": 50,
  "offsetx2": 50,
  "offsety2": 0,
  "centerValX": 0,
  "centerValY": 0,
  "leftVal": 100,
  "rightVal": 0,
  "topVal": 100,
  "bottomVal": 100
}

const backgroundColor  = "#808080";
const gold  = "#f5ce42";
const black  = "#0d0d0d";
const white = "ffffff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  rectMode(CENTER);
  ellipseMode(CENTER);

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
  let size = letterData["size"];

  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  let pos3x = posx + letterData["offsetx2"];
  let pos3y = posy + letterData["offsety2"];

  let pos4x = posx - letterData["offsetx"];
  let pos4y = posy - letterData["offsety"];

  let pos5x = posx - letterData["offsetx2"];
  let pos5y = posy - letterData["offsety2"];

  let centerValX = letterData["centerValX"];
  let centerValY = letterData["centerValY"];
  let leftVal = letterData["leftVal"];
  let rightVal = letterData["rightVal"];
  let topVal = letterData["topVal"];
  let bottomVal = letterData["bottomVal"];


  //Center
  noStroke()
  fill(gold);
  rect(posx, posy, size + centerValX, size);

  //Center 2
  noStroke()
  fill(gold);
  rect(posx, posy, size, size + centerValY);

  //Right
  fill(white);
  rect(pos3x, pos3y, size, size + rightVal);

  //Bottom
  fill(black);
  rect(pos2x, pos2y, size + bottomVal, size);

  //Top
  fill(white);
  rect(pos4x, pos4y, size + topVal, size);

  //Left
  fill(black);
  rect(pos5x, pos5y, size, size + leftVal);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
