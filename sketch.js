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

//   "offsety": 0
   const letterA = {
    "sizeLine": 80,
    "sizeCirc": 30,
    "circx1": 35,
    "circy1": -10,
    "circx2": -75,
    "circy2": -10,
    "linex1": -100, //left
    "liney1": -100, //top
    "linex2": -20,
    "liney2": 100,
    "liney3": 100,
   }

const letterB = {
    "sizeLine": 120,
    "sizeCirc": 160,
    "circx1": 0,
    "circy1": 0,
    "linex1": -110, //left
    "liney1": 0, //top
    "linex2": -10,
    "liney2": 0,
    "liney3": 0,

   }

const letterC = {
    "sizeLine": 100,
    "sizeCirc": 30,
    // "circx1": 35,
    // "circy1": -30,
    // "circx2": -50,
    // "circy2": -10,
    "linex1": -20, // -20
    "liney1": -150, // 130
    "linex2": -70, // ! -70 !
    "liney2": 20, //! 20 !
    "liney3": -100, //!

   }

const colorFront1  = "#DB7F8E";
const colorFront2  = "#FFDBDA";
const colorBack    = "#604D53";
const colorStroke  = "#ffffff";

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
  let sizeLine1 = letterData["sizeLine"];
  let sizeCirc1 = letterData["sizeCirc"];
  let circ2x = posx + letterData["circx1"];
  let circ2y = posy + letterData["circy1"];
  let circ3x = posx + letterData["circx2"];
  let circ3y = posy + letterData["circy2"];
  let linePosX1 = posx + letterData["linex1"];
  let linePosY1 = posy + letterData["liney1"];
  let linePosX2 = posx + letterData["linex2"];
  let linePosY2 = posy + letterData["liney2"];
  let linePosY3 = posy + letterData["liney3"];

  // draw two circles
  fill(colorFront1);
  ellipse(circ2x, circ2y, sizeCirc1, sizeCirc1);

  fill(colorFront1);
  ellipse(circ3x, circ3y, sizeCirc1, sizeCirc1);

  fill(colorFront2);
  line(linePosX1, linePosY3, linePosX1 + sizeLine1, linePosY1);
  line(linePosX2, linePosY1, linePosX2 + sizeLine1, linePosY2);

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
