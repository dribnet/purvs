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


const backgroundColor  = "#161513";
const strokeColor      = "#5a5137";
const roundCorner = 100;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  strokeWeight(1);
  ellipseMode(CORNER);
  noFill();
  // with no animation, redrawing the screen is not necessary
  noLoop();
}

const letterA = {
  "vertRectX": -215, 
  "vertRectY": -75, 
  "vertRectWidth": 25, 
  "vertRectHeight": 100, 
  "circleX": -300, 
  "circleY": -75, 
  "circleSize": 100, 
  "horizRectX": -300, 
  "horizRectY": -35,
  "horizRectWidth": 100,  
  "horizRectHeight": 25  
}

const letterB = {
  "vertRectX": -55, 
  "vertRectY": -100, 
  "vertRectWidth": 25, 
  "vertRectHeight": 125, 
  "circleX": -55, 
  "circleY": -75, 
  "circleSize": 100, 
  "horizRectX": -55, 
  "horizRectY": -35,
  "horizRectWidth": 100,  
  "horizRectHeight": 25  
}

const letterC = {
  "vertRectX": 175, 
  "vertRectY": -50, 
  "vertRectWidth": 25, 
  "vertRectHeight": 55, 
  "circleX": 150, 
  "circleY": -75, 
  "circleSize": 100, 
  "horizRectX": 175, 
  "horizRectY": -35,
  "horizRectWidth": 75,  
  "horizRectHeight": 25  
}

function draw () {
  // clear screen
  push();
  background(backgroundColor);
  stroke(strokeColor);
  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;
  translate(center_x+25,center_y);
  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
  pop();
}

function drawLetter(posx, posy, letterData) {
  rect(letterData["vertRectX"],letterData["vertRectY"],letterData["vertRectWidth"],letterData["vertRectHeight"], roundCorner);
  circle(letterData["circleX"],letterData["circleY"],letterData["circleSize"]);
  rect(letterData["horizRectX"],letterData["horizRectY"],letterData["horizRectWidth"],letterData["horizRectHeight"], roundCorner);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
