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
  "offsetx": 50,
  "offsety": 100,
  "height": 400,
  "width": 100,
  "line 1 x1": 50,
  "line 1 y1": 210,
  "line 1 x2": 50,
  "line 1 y2": 250,
  "line 2 x1": 50,
  "line 2 y1": 300,
  "line 2 x2": 50,
  "line 2 y2": 347,
  "angleStart": 180,
  "angleEnd": 0
}

const letterB = {
  "offsetx": 0,
  "offsety": 0,
  "height": 200,
  "width": 200,
  "line 1 x1": 40,
  "line 1 y1": 190,
  "line 1 x2": 40,
  "line 1 y2": 230,
  "line 2 x1": 40,
  "line 2 y1": 270,
  "line 2 x2": 40,
  "line 2 y2": 310,
  "angleStart": 270,
  "angleEnd": 90
}

const letterC = {
  "offsetx": 100,
  "offsety": 0,
  "height": 200,
  "width": 200,
  "line 1 x1": 50,
  "line 1 y1": 250,
  "line 1 x2": 97,
  "line 1 y2": 250,
  "line 2 x1": 'x',
  "line 2 y1": 250,
  "line 2 x2": 97,
  "line 2 y2": 250,
  "angleStart": 90,
  "angleEnd": 270
}
 
const arcColour     = "#ff245e";
const colourBack    = "#303e4f";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  noStroke();
  fill(arcColour);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for circle
  let x = posx + letterData["offsetx"];
  let y = posy + letterData["offsety"];
  
  //arc params
  let h = letterData["height"];
  let w = letterData["width"];
  let angleStart = letterData["angleStart"];
  let angleEnd = letterData["angleEnd"];

  //line 1
  let x1 = posx + letterData["line 1 x1"];
  let x2 = posx + letterData["line 1 x2"];
  let y3 = letterData["line 2 y1"];
  let y4 = letterData["line 2 y2"];
  
  //line 2
  let x3 = posx + letterData["line 2 x1"];
  let x4 = posx + letterData["line 2 x2"];
  let y1 = letterData["line 1 y1"];
  let y2 = letterData["line 1 y2"];

  //drawing the line
  angleMode(DEGREES);
  //draw arch
  
  arc(x, y, w, h, angleStart, angleEnd);

  strokeWeight(4);
  stroke(255);

  line(x1, y1, x2, y2);
  line(x3, y3, x4, y4);

  noStroke();
}


function draw () {
  // clear screen
  background(colourBack);

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
