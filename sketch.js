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
  "offsetx": 0,
  "offsety": 35,
  "offsetw": 200,
  "offseth": 200,

  "offsetx": 0,
  "offsety": 35
}

const letterB = {
  "offsetx": 0,
  "offsety": -145,
  "offsetw": 100,
  "offseth": 100,
}

const letterC = {
  "offsetx": 30,
  "offsety": 0,
  "offsetw": 100,
  "offseth": 100,
}

const colorFront1  = "#199cff";
const colorFront2  = "#7b97c4";
const colorBack    = "#ffe5c4";
//const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let posw = letterData["offsetw"];
  let posh = letterData["offseth"];

  let pos3x = posx + letterData["offsetx"];
  let pos3y = posy + letterData["offsety"];


 //darker ellipse
  noFill();
  stroke(colorFront1);
  rect(pos2x, pos2y, posw, posh);

  //lighter ellipse
  fill(colorFront2);
  noStroke();
  ellipse(pos3x, pos3y, posw, posh);
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
