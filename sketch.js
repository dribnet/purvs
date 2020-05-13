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
  "arcW": 150,
   "arcH": 100,
  "offsetx": 0,
  "offsety": 35
}

const letterB = {
  "arcW": 300,
  "arcH": 85,
  "offsetx": 0,
  "offsety": -145
}

const letterC = {
  "arcW": 90,
  "arcH": 200,
  "offsetx": 30,
  "offsety": 0
}

const colorFront1  = "#199cff";
const colorFront2  = "#fcba03";
const colorBack    = "#000000";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(1);
  
  angleMode(DEGREES);
  // with no animation, redrawing the screen is not necessary
  noLoop();
}



function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size1 = letterData["arcH"];
  let size2 = letterData["arcW"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  fill(colorFront1);
  ellipse(posx, posy, 150, 150);
  fill(colorFront2);
  arc(posx, posy, size1, size2, 100,70, 200,70);
}




function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y  = canvasHeight / 2;

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