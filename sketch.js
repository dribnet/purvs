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
  "sizex": 20,
  "sizey": 90,
  "offsetx": 40,
  "offsety": 10
}

const letterB = {
  "sizex": 25,
   "sizey": 200,
  "offsetx": 0,
  "offsety": -100,
}

const letterC = {
  "sizex": 50,
   "sizey": 100,
  "offsetx": 0,
  "offsety": 0
}

const colorFront1  = "#a83232";
const colorFront2  = "#1f0b02";
const colorBack    = "#ff8000";
const colorStroke  = "#e4f7f5";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
noStroke()

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2x = letterData["sizex"];
  let size2y = letterData["sizey"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  fill(colorFront1);
  triangle(posx, posy, posx+50,posy-50,posx+100,posy);
  triangle(posx, posy+50, posx+50,posy,posx+100,posy+50);
  triangle(posx, posy+100, posx+50,posy+50,posx+100,posy+100);
  fill(colorFront2);
  rect(pos2x, pos2y, size2x, size2y);
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
