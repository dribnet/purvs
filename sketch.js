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

const height_difference = "2.7027";

const letterA = {

  "DivideHeight": height_difference*37,
  "offsetx": 0,
  "offsety": 100,
  //"Divide": -95
}

const letterB = {

  "DivideHeight": height_difference*36,
  "offsetx": 0,
  "offsety": 100,
  //"Divide":-20
}

const letterC = {

  "DivideHeight": height_difference*35,
  "offsetx": 30,
  "offsety": 100,
  //"Divide":-50
}


const colour_BlackSquare = "#dbdbdb";
const colour_WhiteSquare = "#a3a3a3";

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(0);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let Divide = letterData["DivideHeight"];
  let arcX = posx+50
  let arcY= posy+50

//black square
  fill (colour_BlackSquare);
  rect (posx, posy, 200, 100);
//white square
  fill (colour_WhiteSquare);
  rect (posx, pos2y, 200, -Divide);

// noFill ();
// stroke(255);
// strokeWeight (5);
// arc(arcX, arcY, 80, 80, PI , PI-500);

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
