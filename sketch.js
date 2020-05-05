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
  "arcStart": 40,
  "arcFinish": 100,
  //"Divide": -95
}

const letterB = {

  "DivideHeight": height_difference*36,
  "offsetx": 0,
  "offsety": 100,
  "arcStart": 20,
  "arcFinish": 200,
  //"Divide":-20
}

const letterC = {

  "DivideHeight": height_difference*35,
  "offsetx": 30,
  "offsety": 100,
  "arcStart": 0,
  "arcFinish": 800,
  //"Divide":-50
}


const colour_DarkSquare = "#c9c9c9";
const colour_LightSquare = "#ededed";

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorBack    = "#1c1c1c";
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
  let arcStart = letterData["arcStart"];
  let arcFinish = letterData["arcFinish"];
  let arcX = posx+50
  let arcY= posy+50

//black square
  fill (colour_DarkSquare);
  rect (posx, posy, 200, 100);
//white square
  fill (colour_LightSquare);
  rect (posx, pos2y, 200, -Divide);

noFill ();
stroke(5);
strokeWeight (5);
arc(arcX, arcY, 50, 50, arcStart , arcFinish);
noStroke ();

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
