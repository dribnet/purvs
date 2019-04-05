
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
  "size": 80,
  "offsetx": 150,
  "offsety": 70
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145
}

const letterC = {
  "size": 100,
  "offsetx": 50,
  "offsety": 25
}

const colorFront1  = "#ffb266";
const colorFront2  = "#ffe5cc";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}


function drawLetter(posx, posy, letterData) {
  // determine parameters for lines
  
  let pos2x = letterData["x2"];
  let pos2y = letterData["y2"];


  let pos3x = letterData["x3"];
  let pos3y = letterData["y3"];


  let pos5x = letterData["x5"];
  let pos5y = letterData["y5"];
  let pos6x = letterData["x6"];
  let pos6y = letterData["y6"];

  let pos7x = letterData["x7"];
  let pos7y = letterData["y7"];
  let pos8x = letterData["x8"];
  let pos8y = letterData["y8"];


  // draw lines
  fill(colorFront1);
  line(50, 100, pos2x, pos2y, 20);
  fill(colorFront2);
  line(pos3x-75, pos3y-55, 50, 100 ,20);
  fill(colorFront3);
  line(pos5x-100, pos5y-75, pos6x-100, pos6y-75, 20);
  fill(colorFront4);
  line(pos7x-150, pos7y-100, pos8x-150, pos8y-100, 20);
}

function draw () {
  // clear screen
  background(colorBack);
   var startpoint= 0;
   var endpoint = PI;

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
