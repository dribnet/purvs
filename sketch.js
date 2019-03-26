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
  "dot1": 1,
  "dot2": 0,
  "dot3": 0,
  "dot4": 0,
  "dot5": 0,
  "dot6": 0
}

const letterB = {
  "dot1": 1,
  "dot2": 1,
  "dot3": 0,
  "dot4": 0,
  "dot5": 0,
  "dot6": 0
}

const letterC = {
  "dot1": 1,
  "dot2": 0,
  "dot3": 0,
  "dot4": 1,
  "dot5": 0,
  "dot6": 0,
}

const colorBack    = "#F2C816";
const colorW = "#FFFFFF";
const colorB = "#000000";
function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size=40;
  let spacing=55;
  strokeJoin(BEVEL);
  angleMode(DEGREES);
  shearX(PI / 7.0);
  shearY(PI / 9.0);
  if(letterData["dot1"]==1){
    fill(colorW);
    stroke(colorB);
    rect(posx,posy,size,size);
  }
   if(letterData["dot2"]==1){
    fill(colorB);
    stroke(colorW);
    rect(posx,posy+spacing,size,size);
  }
   if(letterData["dot4"]==1){
    fill(colorW);
    stroke(colorB);
    rect(posx+spacing,posy,size,size);
  }

 
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;
  let shiftUp=90;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y-shiftUp, letterA);
  drawLetter(center_x, center_y-shiftUp, letterB);
  drawLetter(center_x + 250, center_y-shiftUp, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
