const canvasWidth = 960;
const canvasHeight = 500;

/* 
The eight parameters per letter:
  * 'posx1' : X starting point of bezier
  * 'posy1' : Y starting point of bezier
  * 'posx2' : Second X point of bezier
  * 'posy2' : Second Y point of bezier
  * 'posx3' : Third X point of bezier
  * 'posy3' : Third Y point of bezier
  * 'posx4' : Last X point of bezier
  * 'posy4' : Last Y point of bezier
 *
 */

const letterA = {
  "x1": 40,
  "y1": 0,
  "x2": 24,
  "y2": -100,
  "x3": -41,
  "y3": 45,
  "x4": 40,
  "y4": -15,
}

const letterB = {
  "x1": -10,
  "y1": -38,
  "x2": 100,
  "y2": -46,
  "x3": -40,
  "y3": 75,
  "x4": 10,
  "y4": -85,
}

const letterC = {
  "x1": 38,
  "y1": -8,
  "x2": 3,
  "y2": 18,
  "x3": -18,
  "y3": -32,
  "x4": 22,
  "y4": -38,
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
