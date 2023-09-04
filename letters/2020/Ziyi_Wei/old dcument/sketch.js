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
    "size": 100,
    "offsetx": 0.6,
    "offsety": -100,
    "start": 180,
    "stop": 180,
     "rectx":0,
     "recty": 52
}

const letterB = {
  "size": 100,
    "offsetx": 300.6,
    "offsety": -100,
    "start": 180,
    "stop": 180,
     "rectx":300,
     "recty": 100
}

const letterC = {
  "size": 100,
    "offsetx": 616.8,
    "offsety": -100,
    "start": 28.8,
    "stop": 360,
     "rectx":600,
     "recty":50
}

const colorFront2  = "#58b4ae";
const colorFront1  = "#f5a7a7";
const colorFront3  = "#94acd4";
const colorBack    = "#ffe9c5";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');
 noStroke();
  angleMode(DEGREES);
  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50 + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];
  let startA = letterData["start"];
  let endA = letterData["stop"];
  let pos3x = letterData["rectx"];
  let pos3y = letterData["recty"];

  // draw two circles
   fill(colorFront2);
  rect(pos3x, pos3y, 100, 100);
   fill(250, 164, 157);
  arc(pos2x, pos2y, size2, size2,startA,endA);
  
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
