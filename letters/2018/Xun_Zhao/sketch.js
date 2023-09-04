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
  "x1": -90,
  "y1": 150,
  "x2": -75,
  "y2": 0,
  "x3": 75,
  "y3": 0,
  "x4": 0,
  "y4": 0,
  "x5": 0,
  "y5": 0

}

const letterB = {
  "x1": 250,
  "y1": 100,
  "x2": -70,
  "y2": 10,
  "x3": 75,
  "y3": 10,
  "x4": -70,
  "y4": -10,
  "x5": 75,
  "y5": -10
}

const letterC = {
  "x1": 50,
  "y1": 50,
  "x2": -75,
  "y2": 0,
  "x3": -75,
  "y3": 0,
  "x4": -75,
  "y4": 0,
  "x5": -75,
  "y5": 0
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
  strokeWeight(4);
  
  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {

  let posix = posx + letterData["x1"];
  let posiy = posy + letterData["y1"];
  let pos1x = posx + letterData["x2"];
  let pos1y = posy + letterData["y2"];
  let pos2x = posx + letterData["x3"];
  let pos2y = posy + letterData["y3"];
  let pos3x = posx + letterData["x4"];
  let pos3y = posy + letterData["y4"];
  let pos4x = posx + letterData["x5"];
  let pos4y = posy + letterData["y5"];
  angleMode(DEGREES);

  arc(posx,posy,150,150,posix,posiy);
  line(pos1x,pos1y,pos2x,pos2y);
  line(pos3x,pos3y,pos4x,pos4y);
  
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
