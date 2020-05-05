const canvasWidth = 960;//do not change
const canvasHeight = 500;//do not change

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
  "size": 80,
  "offsetx": -45,
  "offsety": 0
}

const letterB = {
  "size": 75,
  "offsetx": -5,
  "offsety": -90
 
}

const letterC = {
  "size": 100,
  "offsetx": -20,
  "offsety": -70
}
 
const colorFront1  = "#9C2B21";// dark red
const colorFront2  = "#F8B6AA";// light pink
const colorBack    = "#f8ded2";// background colour
const colorStroke  = "#F8DED2";// stroke colour

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(3);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  fill(colorFront1);
  triangle(posx+30, posy+75, posx+58, posy+20, posx+86, posy+75);
  
  fill(colorFront2);
  triangle(pos2x+30, pos2y+75,pos2x+58, pos2y+20, pos2x+86, pos2y+75);
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
