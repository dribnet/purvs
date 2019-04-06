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
  "size": 90,
  "offsetx": 30,
  "offsety": 80
}

const letterB = {
  "size": 80,
  "offsetx": 0,
  "offsety": -100
}

const letterC = {
  "size": 90,
  "offsetx": 80,
  "offsety": 30
}

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  // stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  noFill();
  stroke(71, 145, 121);
  // fill(colorFront1);
  rect(posx, posy, 150, 150);
  stroke(212, 242, 198);
  // fill(colorFront2);
  rect(pos2x, pos2y, size2, size2);
}

function draw () {
  // clear screen
  background(150, 215, 148);


  // compute the center of the canvas
  //the let center_x = canvasWidth/2 isnt working
  let center_x = 400;  
  let center_y = canvasHeight/2;

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
