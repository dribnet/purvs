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
  "x1": 52,
  "y1": 2,
  "x2": 38,
  "y2": 171,
  "x3": -50,
  "y3": -79,
  "x4": 58,
  "y4": 28,
}

const letterB = {
  "x1": -43,
  "y1": -87,
  "x2": -34,
  "y2": 90,
  "x3": 64,
  "y3": -67,
  "x4": -42,
  "y4": -27,
}

const letterC = {
  "x1": 25,
  "y1": 65,
  "x2": -30,
  "y2": 95,
  "x3": -86,
  "y3": -31,
  "x4": 33,
  "y4": 11,
}


function setup () {
  // create the drawing canvas, save the canvas element

  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');


  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  let pos1x = posx + letterData["x1"];
  let pos1y = posy + letterData["y1"];
  let pos2x = posx + letterData["x2"];
  let pos2y = posy + letterData["y2"];
  let pos3x = posx + letterData["x3"];
  let pos3y = posy + letterData["y3"];
  let pos4x = posx + letterData["x4"];
  let pos4y = posy + letterData["y4"];

  stroke(255);
  strokeWeight(5);
  fill(random(255),random(255),random(255));
  bezier(pos1x, pos1y, pos2x, pos2y, pos3x, pos3y, pos4x, pos4y);
}

function draw () {
  // clear screen
  background(random(255),random(255),random(255));

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, 10, letterA);
  drawLetter(center_x      , center_y+50, 10, letterB);
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
