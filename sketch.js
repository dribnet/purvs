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
  "sizeEll_x1":100,
  "sizeEll_y1":100,
  "sizeEll_x2":30,
  "sizeEll_y2":140,
  "sizeEll_x3":25,
  "sizeEll_y3":25,
  "loc1X": 0,
  "loc1Y": 0,
  "loc2X": 60,
  "loc2Y": 0,
  "loc3X": -23,
  "loc3Y": -20,
}

const letterB = {
  "sizeEll_x1":100,
  "sizeEll_y1":100,
  "sizeEll_x2":30,
  "sizeEll_y2":250,
  "sizeEll_x3":25,
  "sizeEll_y3":25,
  "loc1X": 0,
  "loc1Y": -1,
  "loc2X": -65,
  "loc2Y": -50,
  "loc3X": -23,
  "loc3Y": -20,
}

const letterC = {
  "sizeEll_x1":100,
  "sizeEll_y1":100,
  "sizeEll_x3":25,
  "sizeEll_y3":25,
  "sizeEll_x4":100,
  "sizeEll_y4":100,
  "loc1X": 0,
  "loc1Y": 0,
  "loc3X": -23,
  "loc3Y": -20,
  "loc4X": 50,
  "loc4Y": -1,
}

const backgroundColor  = "#ccecec";//light blue
const strokeColor      = "#c4c6c0";//gray

const peach  = "#f7cabe";// peach
const lightBlue  = "#ccecec";//"#90e0ef";//light blue
const darkGreen = "#014d4a"

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
  drawLetter(center_x      , center_y , letterB);
  drawLetter(center_x + 250, center_y , letterC);
}

function drawLetter(ell_x, ell_y, letterData) {
  // determine parameters for second circle
  let sizeEll_x1 = letterData["sizeEll_x1"];
  let sizeEll_y1 = letterData["sizeEll_y1"];
  let sizeEll_x2 = letterData["sizeEll_x2"];
  let sizeEll_y2 = letterData["sizeEll_y2"];
  let sizeEll_x3 = letterData["sizeEll_x3"];
  let sizeEll_y3 = letterData["sizeEll_y3"];
  let sizeEll_x4 = letterData["sizeEll_x4"];
  let sizeEll_y4 = letterData["sizeEll_y4"];
  let ell1_x = ell_x + letterData["loc1X"];
  let ell1_y = ell_y + letterData["loc1Y"];
  let ell2_x = ell_x + letterData["loc2X"];
  let ell2_y = ell_y + letterData["loc2Y"];
  let ell3_x = ell_x + letterData["loc3X"];
  let ell3_y = ell_y + letterData["loc3Y"];
  let ell4_x = ell_x + letterData["loc4X"];
  let ell4_y = ell_y + letterData["loc4Y"];



  // draw two circles
  noStroke();
  fill(peach);
  ellipse(ell2_x, ell2_y, sizeEll_x2, sizeEll_y2);
  fill(peach);
  ellipse(ell_x, ell_y, 150, 150);
  fill(lightBlue);
  ellipse(ell1_x, ell1_y, sizeEll_x1, sizeEll_y1);
  fill(lightBlue);
  ellipse(ell4_x, ell4_y, sizeEll_x4, sizeEll_y4);
  fill(darkGreen);
  ellipse(ell3_x, ell3_y, sizeEll_x3, sizeEll_y3);
  ellipse(ell3_x + 50, ell3_y, sizeEll_x3, sizeEll_y3);


}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
