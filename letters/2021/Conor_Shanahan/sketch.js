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
    Start: The starting point for the arc
    End:
 *
 */

const letterA = {
  "size": 80,
  "offsetx": 0,
  "offsety": 35, 
  "start": 0,
  "end": 360
}

const letterB = {
  "size": 150,
  "offsetx": -75,
  "offsety": -75, 
  "start": 270,
  "end": 90
}

const letterC = {
  "size": 100,
  "offsetx": 25,
  "offsety": 0, 
  "start": 0,
  "end": 360
}

const backgroundColor  = "#e3eded";
const strokeColor      = "#233f11";

const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
  angleMode(DEGREES);
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
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let startAngle = letterData["start"];
  let stopAngle = letterData["end"];

  // draw two circles
  fill(255);//white colour for main cirlce
  ellipse(posx, posy, 150, 150);
  fill(0);//black fill for secondary circle
  arc(pos2x, pos2y, size2, size2, startAngle, stopAngle, CHORD);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
