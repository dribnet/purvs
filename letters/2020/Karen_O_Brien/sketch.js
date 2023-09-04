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
  "x1": -30,
  "y1": 0,
  "x2": -30,
  "y2": 30,
  "x3": -30,
  "y3": 60,
  "x4": 0,
  "y4": -30,
  "x5": 0,
  "y5": 30,
  "x6": 30,
  "y6": -30,
  "x7": 30,
  "y7": 0,
  "x8": 30,
  "y8": 30,
  "x9": 30,
  "y9": 60,
  "x10": 30,
  "y10": 60,
}

const letterB = {
  "x1": -30,
  "y1": -60,
  "x2": -30,
  "y2": -30,
  "x3": -30,
  "y3": 0,
  "x4": -30,
  "y4": 30,
  "x5": -30,
  "y5": 60,
  "x6": 0,
  "y6": -60,
  "x7": 0,
  "y7": 0,
  "x8": 0,
  "y8": 60,
  "x9": 30,
  "y9": -30,
  "x10": 30,
  "y10": 30,
}

const letterC = {
  "x1": -60,
  "y1": 0,
  "x2": -60,
  "y2": 0,
  "x3": -30,
  "y3": -30,
  "x4": -30,
  "y4": 0,
  "x5": -30,
  "y5": 30,
  "x6": 0,
  "y6": 60,
  "x7": 0,
  "y7": -60,
  "x8": 30,
  "y8": -60,
  "x9": 0,
  "y9": 60,
  "x10": 30,
  "y10": 60,
}

const colorFront1  = "#199cff";//blue
const colorFront2  = "#f54242";//red
const colorFront3  = "#ffffff";//white
const colorBack    = "#000000";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  noStroke();

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let x1 = posx + letterData["x1"];
  let y1 = posy + letterData["y1"];
  let x2 = posx + letterData["x2"];
  let y2 = posy + letterData["y2"];
  let x3 = posx + letterData["x3"];
  let y3 = posy + letterData["y3"];
  let x4 = posx + letterData["x4"];
  let y4 = posy + letterData["y4"];
  let x5 = posx + letterData["x5"];
  let y5 = posy + letterData["y5"];
  let x6 = posx + letterData["x6"];
  let y6 = posy + letterData["y6"];
  let x7 = posx + letterData["x7"];
  let y7 = posy + letterData["y7"];
  let x8 = posx + letterData["x8"];
  let y8 = posy + letterData["y8"];
  let x9 = posx + letterData["x9"];
  let y9 = posy + letterData["y9"];
  let x10 = posx + letterData["x10"];
  let y10 = posy + letterData["y10"];

  //blue
  fill(colorFront1);
  rect(x1+5,y1,30,30);
  rect(x2+5,y2,30,30);
  rect(x3+5,y3,30,30);
  rect(x4+5,y4,30,30);
  rect(x5+5,y5,30,30);
  rect(x6+5,y6,30,30);
  rect(x7+5,y7,30,30);
  rect(x8+5,y8,30,30);
  rect(x9+5,y9,30,30);
  rect(x10+5,y10,30,30);

  //red
  fill(colorFront2);
  rect(x1-5,y1,30,30);
  rect(x2-5,y2,30,30);
  rect(x3-5,y3,30,30);
  rect(x4-5,y4,30,30);
  rect(x5-5,y5,30,30);
  rect(x6-5,y6,30,30);
  rect(x7-5,y7,30,30);
  rect(x8-5,y8,30,30);
  rect(x9-5,y9,30,30);
  rect(x10-5,y10,30,30);

  //white
  fill(colorFront3);
  rect(x1,y1,30,30);
  rect(x2,y2,30,30);
  rect(x3,y3,30,30);
  rect(x4,y4,30,30);
  rect(x5,y5,30,30);
  rect(x6,y6,30,30);
  rect(x7,y7,30,30);
  rect(x8,y8,30,30);
  rect(x9,y9,30,30);
  rect(x10,y10,30,30);
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
  filter(BLUR, 1.2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
