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
  "offsetX": 250,
  "offsetY": 250,
  "posX1": 0,
  "posY1": 0,
  "posX2": 0,
  "posY2": 50
}

const letterB = {
  "offsetX": 450,
  "offsetY": 250,
  "posX1": 65,
  "posY1": -30,
  "posX2": 45,
  "posY2": 20
}

const letterC = {
  "offsetX": 650,
  "offsetY": 250,
  "posX1": 50,
  "posY1": 0,
  "posX2": 50,
  "posY2": 0
}

//const colorFront  = "#7142f4";
const colorBack   = "#000000";
const colorStroke = "#ffffff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(255, 237, 237, 40);
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  let mainposx =letterData["offsetX"];
  let mainposy =letterData["offsetY"];
  let posx1 = mainposx + letterData["posX1"];
  let posx2 = mainposx + letterData["posX2"];
  let posy1 = mainposy + letterData["posY1"];
  let posy2 = mainposy + letterData["posY2"];


  // draw two circles
  ellipse(mainposx, mainposy, 200, 200);
  ellipse(posx1, posy1, 50, 50);
  ellipse(posx2, posy2, 100, 100);
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, 10, letterA);
  drawLetter(center_x   , center_y, 10, letterB);
  drawLetter(center_x + 250, center_y, 10, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
