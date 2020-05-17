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
  "x1": 0,
  "y1": 0,
  "w1": 70,
  "h1": 15,

  "x2": 0,
  "y2": -60,
  "w2": 15,
  "h2": 70,

  "x3": 30,
  "y3": 60,
  "w3": 15,
  "h3": 70,

  "x4": -30,
  "y4": 60,
  "w4": 15,
  "h4": 70,
}

const letterB = {
  "x1": -30,
  "y1": 0,
  "w1": 15,
  "h1": 180,

  "x2": 10,
  "y2": 0,
  "w2": 40,
  "h2": 14,

  "x3": 10,
  "y3": -50,
  "w3": 40,
  "h3": 40,

  "x4": 10,
  "y4": 50,
  "w4": 40,
  "h4": 40,
}

const letterC = {
  "x1": -30,
  "y1": -40,
  "w1": 15,
  "h1": 70,

  "x2": -30,
  "y2": 40,
  "w2": 15,
  "h2": 70,

  "x3": 10,
  "y3": -70,
  "w3": 50,
  "h3": 15,

  "x4": 10,
  "y4": 70,
  "w4": 50,
  "h4": 15,
}

const colorFront1  = "#f71735";//big, main
const colorFront2  = "#5aa9e6";//small
const colorFront3  = "#fdfffc";//small
const colorFront4  = "#273043";//small

const colorBack    = "#e3edef";//background
const colorStroke  = "#233f11";//stroke

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

  let posx1 = posx + letterData["x1"];
  let posy1 = posy + letterData["y1"];
  let posw1 = letterData["w1"];
  let posh1 = letterData["h1"];

  let posx2 = posx + letterData["x2"];
  let posy2 = posy + letterData["y2"];
  let posw2 = letterData["w2"];
  let posh2 = letterData["h2"];

  let posx3 = posx + letterData["x3"];
  let posy3 = posy + letterData["y3"];
  let posw3 = letterData["w3"];
  let posh3 = letterData["h3"];


  let posx4 = posx + letterData["x4"];
  let posy4 = posy + letterData["y4"];
  let posw4 = letterData["w4"];
  let posh4 = letterData["h4"];
  // draw two circles
  rectMode(CENTER)
  fill(colorFront4)
	rect(posx, posy, 100, 200, 20)

  fill(colorFront1);
  rect(posx1, posy1, posw1, posh1, 15)

  fill(colorFront2);
  rect(posx2, posy2, posw2, posh2, 15)

  fill(colorFront3);
  rect(posx3, posy3, posw3, posh3, 15)
  rect(posx4, posy4, posw4, posh4, 15)

  // ellipse(pos2x, pos2y, size2, size2);
  

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
