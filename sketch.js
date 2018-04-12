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
  "size_i": 40,
  "size2": 30,
  "size3": 40,
  "size4": 40,


  "xi": 0,
  "yi": 0,
  "x1": 0,
  "y1": 0,
  "x2": 0,
  "y2": 60
}

const letterB = {
  "size_i": 120,
  "size2": 130,
  "size3": 80,
  "size4": 80,

  "xi": 0,
  "yi": 0,
  "x1": 0,
  "y1": 0,
  "x2": 0,
  "y2": 0
}

const letterC = {
  "size_i": 100,
  "size2": 163,
  "size3": 40,
  "size4": 40,

  "xi": 30,
  "yi": 0,
  "x1": 55,
  "y1": 0,
  "x2": -60,
  "y2": 0
}

const colorFront  = "#199cff";
const colorBack   = "#e3eded";
const colorStroke = "#ffffff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  //fill(colorFront);
  noFill();
  stroke(colorStroke);
  strokeWeight(1);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  let size1 = letterData["size_i"];
  let size3 = letterData["size2"];
  let size4 = letterData["size3"];
  let size5 = letterData["size4"];

  let posix = posx + letterData["xi"];
  let posiy = posy + letterData["yi"];
  let pos1x = posx + letterData["x1"];
  let pos1y = posy + letterData["y1"];
  let pos2x = posx + letterData["x2"];
  let pos2y = posy + letterData["y2"];

  push();
  beginShape();
  vertex(posx,posy-60);
  vertex(posx+60,posy);
  vertex(posx,posy+60);
  vertex(posx-60,posy);
  endShape(CLOSE);
  pop();

  line(posx,posy-40,posx,posy+40);
  line(posx+40,posy,posx-40,posy);
  ellipse(posix, posiy, size1, size1);
  ellipse(pos1x, pos1y, size3, size3);
  ellipse(pos2x, pos2y, size4, size5);
  
}

function draw () {
  // clear screen
  background(2);

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
