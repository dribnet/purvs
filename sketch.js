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
  "offsetx2": -50,
  "offsety2": 50,
  "offsetx3": -50,
  "offsety3": 0,
//  "offsetx4": -50, //top left
//  "offsety4": -50,
  "offsetx5": -50,
  "offsety5": 100,

  "offsetx6": -15,
  "offsety6": -50,
 "offsetx7": -15,
  "offsety7": 50,
//  "offsetx8": -15, //middle middle top
//  "offsety8": 0,
  // "offsetx9": -15, // middle bottom
//  "offsety9": 100,

//  "offsetx10": 20, // right top
//  "offsety10": -50,
  "offsetx11": 20,
  "offsety11": 50,
  "offsetx12": 20,
  "offsety12": 0,
  "offsetx13": 20,
  "offsety13": 100

}

const letterB = {
  "offsetx2": -50,
  "offsety2": 50,
  "offsetx3": -50,
  "offsety3": 0,
 "offsetx4": -50, //top left
  "offsety4": -50,
  "offsetx5": -50,
  "offsety5": 100,

  "offsetx6": -15,
  "offsety6": -50,
 //"offsetx7": -15,
//  "offsety7": 50,
  "offsetx8": -15, //middle middle top
  "offsety8": 30,
   "offsetx9": -15, // middle bottom
  "offsety9": 100,

  "offsetx10": 20, // right top
  "offsety10": -50,
  "offsetx11": 20,
  "offsety11": 50,
  "offsetx12": 20,
  "offsety12": 0,
  "offsetx13": 20,
  "offsety13": 100
}

const letterC = {
  "offsetx2": -50,
  "offsety2": 50,
  "offsetx3": -50,
  "offsety3": 0,
 "offsetx4": -50, //top left
  "offsety4": -50,
  "offsetx5": -50,
  "offsety5": 100,

  "offsetx6": -15,
  "offsety6": -50,
 //"offsetx7": -15,
//  "offsety7": 50,
//  "offsetx8": -15, //middle middle top
//  "offsety8": 30,
   "offsetx9": -15, // middle bottom
  "offsety9": 100,

  "offsetx10": 20, // right top
  "offsety10": -50,
  //"offsetx11": 20,
//"offsety11": 50,
//  "offsetx12": 20,
//  "offsety12": 0,
  "offsetx13": 20,
  "offsety13": 100
}

const backgroundColor  = "#caf0f8";
const strokeColor      = "#03045e";

const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(0);

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
  let pos1x = posx + letterData["offset"];
  let pos1y = posx + letterData["offset"];
  let pos2x = posx + letterData["offsetx2"];
  let pos2y = posy + letterData["offsety2"];
  let pos3x = posx + letterData["offsetx3"];
  let pos3y = posy + letterData["offsety3"];
  let pos4x = posx + letterData["offsetx4"];
  let pos4y = posy + letterData["offsety4"];
  let pos5x = posx + letterData["offsetx5"];
  let pos5y = posy + letterData["offsety5"];
  let pos6x = posx + letterData["offsetx6"];
  let pos6y = posy + letterData["offsety6"];
  let pos7x = posx + letterData["offsetx7"];
  let pos7y = posy + letterData["offsety7"];
  let pos8x = posx + letterData["offsetx8"];
  let pos8y = posy + letterData["offsety8"];
  let pos9x = posx + letterData["offsetx9"];
  let pos9y = posy + letterData["offsety9"];
  let pos10x = posx + letterData["offsetx10"];
  let pos10y = posy + letterData["offsety10"];
  let pos11x = posx + letterData["offsetx11"];
  let pos11y = posy + letterData["offsety11"];
  let pos12x = posx + letterData["offsetx12"];
  let pos12y = posy + letterData["offsety12"];
  let pos13x = posx + letterData["offsetx13"];
  let pos13y = posy + letterData["offsety13"];

  // draw two circles

  rectMode(CENTER);
  fill('#5496A5'); // light blue
  rect (posx-40, posy, 180, 200);

  rectMode(CENTER);
  fill('#F15A4D'); // light red
  rect (posx-10, posy+20, 180, 200);

  fill('#A53D3C');// dark red
  strokeWeight();
  ellipse (posx-7, posy-7, 0, 0); // circle 1
  ellipse (pos2x-7, pos2y-7, 20, 20); // circle 2
  ellipse (pos3x-7, pos3y-7, 20, 20); // circle 2
  ellipse (pos4x-7, pos4y-7, 20, 20); // circle 2
  ellipse (pos5x-7, pos5y-7, 20, 20); // circle 2
  ellipse (pos6x-7, pos6y-7, 20, 20); // circle 2
  ellipse (pos7x-7, pos7y-7, 20, 20); // circle 2
  ellipse (pos8x-7, pos8y-7, 20, 20); // circle 2
  ellipse (pos9x-7, pos9y-7, 20, 20); // circle 2
  ellipse (pos10x-7, pos10y-7, 20, 20); // circle 2
  ellipse (pos11x-7, pos11y-7, 20, 20); // circle 2
  ellipse (pos12x-7, pos12y-7, 20, 20); // circle 2
  ellipse (pos13x-7, pos13y-7, 20, 20); // circle 2

  fill('red');
  ellipse (posx, posy, 0, 0); // circle 1
  ellipse (pos2x, pos2y, 20, 20); // circle 2
  ellipse (pos3x, pos3y, 20, 20); // circle 2
  ellipse (pos4x, pos4y, 20, 20); // circle 2
  ellipse (pos5x, pos5y, 20, 20); // circle 2
  ellipse (pos6x, pos6y, 20, 20); // circle 2
  ellipse (pos7x, pos7y, 20, 20); // circle 2
  ellipse (pos8x, pos8y, 20, 20); // circle 2
  ellipse (pos9x, pos9y, 20, 20); // circle 2
  ellipse (pos10x, pos10y, 20, 20); // circle 2
  ellipse (pos11x, pos11y, 20, 20); // circle 2
  ellipse (pos12x, pos12y, 20, 20); // circle 2
  ellipse (pos13x, pos13y, 20, 20); // circle 2




}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
