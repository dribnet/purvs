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
  "size": 190,
  "offsetx": 0,
  "offsety": 0,
  "start": 30,
  "end": 150,
  "Tri": 180,
}

const letterB = {
  "size": 100,
  "offsetx": 50,
  "offsety": 10,
  "start": 0,  
  "end": 120,
  "Tri": 470,
}

const letterC = {
  "size": 180,
  "offsetx": 0,
  "offsety": 0, 
  "start": 90, 
  "end": 270,
  "Tri": 630,
}

const backgroundColor  = "#e3eded";
const strokeColor      = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);
angleMode(DEGREES);
  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  noStroke();
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let angleS = letterData["start"];
  let angleE = letterData["end"];
  let TriX = letterData["Tri"];
  // draw two circles
  fill("#9c4887");
  ellipse(posx, posy, 150, 150);
  fill("#ba7599");
  arc(pos2x, pos2y, size2, size2, angleS, angleE);
  fill("#fae1f6");
  triangle(50+TriX, 290, 0+TriX, 250, 90+TriX, 250);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
