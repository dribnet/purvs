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
  "sizex": 50,
  "sizey": 40,
  "offsetx": 0,
  "offsety": 55,
  "cirsize1": 40,
  "cirsize2": 40,
  "ciroffsetx": 0,
  "ciroffsety": 0,
  "cir2offsetx": 0,
  "cir2offsety": 0
}

const letterB = {
  "sizex": 90,
  "sizey": 5,
  "offsetx": 30,
  "offsety": 0,
  "cirsize1": 30,
  "cirsize2": 30,
  "ciroffsetx": 30,
  "ciroffsety": -40,
  "cir2offsetx": 30,
  "cir2offsety": 40
}

const letterC = {
  "sizex": 80,
  "sizey": 60,
  "offsetx": 35,
  "offsety": 0,
  "cirsize1": 60,
  "cirsize2": 60,
  "ciroffsetx": -10,
  "ciroffsety": 0,
  "cir2offsetx": -10,
  "cir2offsety": 0
}

const colorFront1  = "#292929";
const colorFront2  = "#138701";
const colorBack    = "#292929";
const colorStroke  = "#138701"; //#233f11

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);
  angleMode(DEGREES)
  ellipseMode(CENTER)
  rectMode(CENTER)
  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size1 = letterData["sizex"];
  let size2 = letterData["sizey"]
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let cirpos2x = posx + letterData["ciroffsetx"]
  let cirpos2y = posy + letterData["ciroffsety"]
  let cirs1 = letterData["cirsize1"]
  let cirs2 = letterData["cirsize2"]
  let cir2pos2x = posx + letterData["cir2offsetx"]
  let cir2pos2y = posy + letterData["cir2offsety"]


  // draw two circles
  fill(colorFront1);
  rect(posx, posy, 150, 150);
  fill(colorFront2);
  ellipse(cirpos2x, cirpos2y, cirs1, cirs2)
  ellipse(cir2pos2x, cir2pos2y, cirs1, cirs2)
  rect(pos2x, pos2y, size1, size2)
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
