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
  "sizex": 80,
  "sizey": 200,
  "arcx": 180,
  "arcy": 0,
  "offsetx": 0,
  "offsety": 77
}

const letterB = {
  "sizex": 150,
  "sizey": 150,
  "arcx": 180,
  "arcy": 0,
  "offsetx": 0,
  "offsety": 0
}

const letterC = {
  "sizex": 200,
  "sizey": 80,
  "arcx": 270,
  "arcy": 90,
  "offsetx": -25,
  "offsety": 0
}

const colorFront1  = "#000000";
const colorFront2  = "#32a852";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);
  angleMode(DEGREES)
  ellipseMode(CENTER)
  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size1 = letterData["sizex"];
  let size2 = letterData["sizey"]
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let arc1 = letterData["arcx"]
  let arc2 = letterData["arcy"]

  // draw two circles
  fill(colorFront1);
  ellipse(posx, posy, 150, 150);
  fill(colorFront2);
  arc(pos2x, pos2y, size1, size2, arc1, arc2)
  //ellipse(pos2x, pos2y, size2, size2);

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
