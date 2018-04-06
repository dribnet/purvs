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
  "x1": 140,
  "y1": 250,
  
  "x2": 100,
  "y2": 300,
  
  "x3": 125,
  "y3": 150,

  "x4": 150,
  "y4": 300
}

const letterB = {
  "x1": 400,
  "y1": 150,
  
  "x2": 400,
  "y2": 300,
  
  "x3": 450,
  "y3": 250,

  "x4": 400,
  "y4": 200
}

const letterC = {
  "x1": 750,
  "y1": 150,
  
  "x2": 700,
  "y2": 200,
  
  "x3": 700,
  "y3": 250,

  "x4": 750,
  "y4": 300
}

const colorFront  = "#199cff";
const colorBack   = "#ffaa02";
const colorStroke = "#233f11";

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

rectMode(CENTER);
  let x1 = letterData["x1"];
  let y1 = letterData["y1"];

  let x2 = letterData["x2"];
  let y2 = letterData["y2"];

  let x3 = letterData["x3"];
  let y3 = letterData["y3"];

  let x4 = letterData["x4"];
  let y4 = letterData["y4"];

  line(x1,y1,x2,y2);
  line(x2,y2,x3,y3);
  line(x3,y3,x4,y4);
  
  rect(x1,y1,10,10);
  rect(x2,y2,10,10);
  rect(x3,y3,10,10);
  rect(x4,y4,10,10);
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
