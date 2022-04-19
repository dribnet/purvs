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
  "sizex": 1, // first square
    "sizey": 1,
    "offsetx": 20,
    "offsety": 35,
    "sizexT": 0, // second square
    "sizeyT": 0,
    "offsetxT": 20,
    "offsetyT": 35,
    "offsetx3": 0, // arc
    "offsety3": 0,
    "angleR":2, //red
    "angleL":0,
    "angleR":1.9, // orange
    "angleL":1.1
}

const letterB = {
  "sizex": 1,
    "sizey": 1,
    "offsetx": 100,
    "offsety": -35, // red
    "offsetx3": 100, //orange
    "offsety3": 45,
    "angleR":-1.57, // orange
    "angleL":0,
    "angleR2":0, // red 
    "angleL2":-4.7
}

const letterC = {
  "sizex": 1,
    "sizey": 1,
    "offsetx": 200, //red
    "offsety": 0,
    "offsetx3": 200, // orange
    "offsety3": 0,
    "angleR":-1.57, 
    "angleL":1.57,
    "angleR2":0, // red
    "angleL2":0
}

const backgroundColor  = "#12c4ff";
const strokeColor      = "#ebd834";

const darkBlue  = "#ff8112";
const lightBlue  = "#ff3612";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
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
  let size1 = letterData["sizex"];
  let size2 = letterData["sizey"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];

  let pos3x = 50  + letterData["offsetx3"];
  let pos3y = 150 + letterData["offsety3"];
  let rightAngle = letterData["angleR"];
  let leftAngle = letterData["angleL"];
  let rightAngle2 = letterData["angleR2"];
  let leftAngle2 = letterData["angleL2"];

  let size1T = letterData["sizexT"]; // second square
  let size2T = letterData["sizeyT"];
  let pos2xT = 50  + letterData["offsetxT"];
  let pos2yT = 150 + letterData["offsetyT"];

  // draw two circles
  arc(pos2x, pos2y, 80, 80, rightAngle2, leftAngle2, PIE);
  
  fill(darkBlue);
  arc(pos3x, pos3y, 80, 80, rightAngle, leftAngle, PIE);
  fill(lightBlue);
  
  rect(pos2x, pos2y, size1, size2);
  fill(darkBlue);
  rect(pos2xT, pos2yT, size1T, size2T);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
