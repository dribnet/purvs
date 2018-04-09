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
  "offsetX": 200,
  "offsetY": 200,
  "posX1": 0,
  "posY1": 0,
  "posX2": -100,
  "posY2": -100,
  "posX3": 50,
  "posY3": -50,
  "posX4":- 100,
  "posY4": -100
}

const letterB = {
  "offsetX": 0,
  "offsetY": 0,
  "posX1": -50,
  "posY1": -50,
  "posX2": 100,
  "posY2": 100,
  "posX3": 0,
  "posY3": 50,
  "posX4": 200,
  "posY4": 100
}

const letterC = {
  "offsetX":-200,
  "offsetY": -200,
  "posX1": -50,
  "posY1": -50,
  "posX2": -100,
  "posY2": -100,
  "posX3": 0,
  "posY3": 0,
  "posX4": -100,
  "posY4": -100
}

const colorFront  = "#7142f4";
const colorBack   = "#000000";
const colorStroke = "#ffffff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  let mainposx1 =letterData["offsetX"];
  let mainposy1 =letterData["offsetY"];
  let posx1 = mainposx1 + letterData["posX1"];
  let posx2 = letterData["posX2"];
  let posx3 = mainposx1+letterData["posX3"];
  let posx4 = letterData["posX4"];
  let posy1 = mainposy1+letterData["posY1"];
  let posy2 = letterData["posY2"];
  let posy3 = mainposy1+letterData["posY3"];
  let posy4 = letterData["posY4"];
 
  
  angleMode(DEGREES);
  rectMode(CENTER);

push();

  translate(canvasWidth/2, canvasHeight/2);

  rotate(135);

  // draw two circles
  rect(mainposx1, mainposy1, 200, 200);
  rect(posx1, posy1, posx2, posy2);
  rect(posx3, posy3, posx4, posy4);
  
pop();
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
