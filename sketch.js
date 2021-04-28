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
  "l1x1":0,
  "l1y1":35,
  "l1x2":0,
  "l1y2":100,

  "l2x1":0,
  "l2y1":35,
  "l2x2":0,
  "l2y2":100,

  "l3x1":-10,
  "l3y1":-10,
  "l3x2":10,
  "l3y2":10,

  "l4x1":10,
  "l4y1":-10,
  "l4x2":-10,
  "l4y2":10,
}

const letterB = {
  "l1x1":-75,
  "l1y1":-160,
  "l1x2":-75,
  "l1y2":0,

  "l2x1":0,
  "l2y1":0,
  "l2x2":0,
  "l2y2":0,

  "l3x1":-10,
  "l3y1":-10,
  "l3x2":10,
  "l3y2":10,

  "l4x1":10,
  "l4y1":-10,
  "l4x2":-10,
  "l4y2":10,
}

const letterC = {
  "l1x1":35,
  "l1y1":0,
  "l1x2":100,
  "l1y2":0,

  "l1x1":35,
  "l1y1":0,
  "l1x2":100,
  "l1y2":0,

  "l1x1":35,
  "l1y1":0,
  "l1x2":100,
  "l1y2":0,

  "l1x1":35,
  "l1y1":0,
  "l1x2":100,
  "l1y2":0,

}

const backgroundColor  = "#abf28f";
const strokeColor      = "#000000";

const darkBlue  = "#ffffff";
const lightBlue  = "#59ccff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
  angleMode(DEGREES)
}

function draw () {
  // clear screen
  background(backgroundColor);
  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle


  // draw two circles
  fill(darkBlue);
  ellipse(posx, posy, 150, 150);
  fill(lightBlue);

  let line1x1 = letterData["l1x1"];
  let line1y1 = letterData["l1y1"];
  let line1x2 = letterData["l1x2"];
  let line1y2 = letterData["l1y2"];
  let line2x1 = letterData["l2x1"];
  let line2y1 = letterData["l2y1"];
  let line2x2 = letterData["l2x2"];
  let line2y2 = letterData["l2y2"];
  let line3x1 = letterData["l3x1"];
  let line3y1 = letterData["l3y1"];
  let line3x2 = letterData["l3x2"];
  let line3y2 = letterData["l3y2"];
  let line4x1 = letterData["l4x1"];
  let line4y1 = letterData["l4y1"];
  let line4x2 = letterData["l4x2"];
  let line4y2 = letterData["l4y2"];

  line(posx+line1x1,posy+line1y1,posx+line1x2,posy+line1y2);
  line(posx+line2x1,posy+line2y1,posx+line2x2,posy+line2y2);
  line(posx+line3x1,posy+line3y1,posx+line3x2,posy+line3y2);
  line(posx+line4x1,posy+line4y1,posx+line4x2,posy+line4y2);


}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
