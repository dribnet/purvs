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
  "size2": 40,
  "X2": 10,
  "Y2": 0,
  "start2": 0,
  "end2": 360,
  "rectX": 10,
  "rectY": -40,
  "rectH": 80,
  "rectW": 30
}

const letterB = {
  "size2": 40,
  "X2": 0,
  "Y2": -20,
  "start2": 0,
  "end2": 360,
  "rectX": -30,
  "rectY": 0,
  "rectH":40,
  "rectW":60
}

const letterC = {
  "size2": 0,
  "X2": -20,
  "Y2": 10,
  "start2" : 0,
  "end2": 360,
  "rectX": -40,
  "rectY": 10,
  "rectH": 30,
  "rectW": 70
}

const colorFront1  = "#f55a42";
const colorFront2  = "#42b6f5";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

const red1 = 255;
const green1 = 234;
const blue1 = 0;
const red2 = 0;
const green2 = 34;
const blue2 = 255;
const red3 = 255;
const green3 = 0;
const blue3 = 0;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  noStroke();

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size2"];
  let pos2x = posx + letterData["X2"];
  let pos2y = posy + letterData["Y2"];
  let start2 = letterData["start2"];
  let end2 = letterData["end2"];
  let rectX = posx + letterData["rectX"];
  let rectY = posy + letterData["rectY"];
  let rectH = letterData["rectH"];
  let rectW = letterData["rectW"];
  

  // draw two arcs
  fill(red1, green1, blue1, 150);
  angleMode(DEGREES); 
  arc(posx, posy, 100, 100, 110, -70);
  fill(red2, green2, blue2, 150);
  arc(pos2x, pos2y, size2, size2, start2, end2);
  fill(red3, green3, blue3, 150);
  rect(rectX, rectY, rectW, rectH);
  
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
