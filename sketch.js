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
  "lineX": -20, //rect1
  "lineY": 0,
  "lineXX":-70,
  "lineYY":150,

  "lineX2":20, //rect2
  "lineY2":0,
  "lineXX2":70,
  "lineYY2":150,

  "offsetx1":-30, //small1
  "offsety1":80,

  "offsetx2":6, //small2
  "offsety2":80
}

const letterB = {
  "lineX": -10, //rect1
  "lineY": 0,
  "lineXX":-10,
  "lineYY": 150,

  "lineX2":15, //rect2
  "lineY2":0,
  "lineXX2":15,
  "lineYY2":150,


  "offsetx1":55, //small1
  "offsety1":0,

  "offsetx2":55, //small2
  "offsety2":125
}

const letterC = {
  "lineX": 0, //rect1
  "lineY": 0,
  "lineXX":0,
  "lineYY":150,

  "lineX2":25, //rect2
  "lineY2":150,
  "lineXX2":100,
  "lineYY2":150,


  "offsetx1":20, //small1
  "offsety1":-7,

  "offsetx2":80, //small2
  "offsety2":-7
}

const colorFront1  = "#f4c242";
const colorFront2  = "#ffe39b";
const colorBack    = "#636363";
const colorStroke  = "#ffe7bc";

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
  // determine parameters for second circle
 
  let lin2x = posx + letterData["lineX"];//line1
  let lin2y = posy + letterData["lineY"];
  let lin2xx = posx + letterData["lineXX"];//line second point
  let lin2yy = posy + letterData["lineYY"];

  let lin3x = posx + letterData["lineX2"];//line2
  let lin3y = posy + letterData["lineY2"];
  let lin3xx = posx + letterData["lineXX2"];//line second point
  let lin3yy = posy + letterData["lineYY2"];

  
  let pos1x = posx + letterData["offsetx1"];//small1
  let pos1y = posy + letterData["offsety1"];
  let pos2x = posx + letterData["offsetx2"];//small2
  let pos2y = posy + letterData["offsety2"];


  // draw two circles
  fill(colorFront1);
  fill(colorFront2);

  push();
  strokeWeight(20);
  line(lin2x, lin2y, lin2xx, lin2yy);
  line(lin3x , lin3y, lin3xx, lin3yy);
  pop();


  rect(pos1x, pos1y, 25, 25,5);
  rect(pos2x, pos2y, 25, 25,5);
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
