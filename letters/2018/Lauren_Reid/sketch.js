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
  "size": 60,
  "offsetx": 0,
  "offsety": 0,
  "x1": 60,
  "y1": 50,
  "x2": 60,
  "y2": -40

}

const letterB = {
  "size": 60,
  "offsetx": 0,
  "offsety": 0,   
  "x1": -60,
  "y1": -130,
  "x2": -60,
  "y2": 40    
}

const letterC = {
  "size": 70,
  "offsetx": 40,
  "offsety": 0,
  "x1": -40,
  "y1": 0,
  "x2": -40,
  "y2": 10   
}

const colorFront  = "#ffb7ce";
const colorBack   = "#d3efff";
const colorStroke = "#ffb7ce";
  //pastel yellow hex code #fff1b7

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let startx = posx + letterData["x1"];
  let starty = posy + letterData["y1"];
  let endx = posx + letterData["x2"];
  let endy = posy + letterData["y2"];

  // draw two circles
  fill(colorFront);
  ellipse(posx, posy, 130, 130);

  fill(colorBack);
  stroke(colorBack);
  ellipse(pos2x, pos2y, size2, size2);

  //draw line
  stroke(colorStroke);
  fill(colorFront);
  strokeWeight (40);
  line(startx, starty, endx, endy);
  strokeWeight (4);
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, 10, letterA);
  drawLetter(center_x      , center_y, 10, letterB);
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
