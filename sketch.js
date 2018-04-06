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

  "translate1X": 506,
  "translate1Y": 261,
  "rotate1" : 260,

  "translate2X": 605,
  "translate2Y": 245,
  "rotate2" : -11
}

const letterB = {

  "translate1X": 500,
  "translate1Y": 245,
  "rotate1" : 270,

  "translate2X": 0,
  "translate2Y": 0,
  "rotate2" : 0
}

const letterC = {

  "translate1X": 700,
  "translate1Y": 245,
  "rotate1" : 270,

  "translate2X": 0,
  "translate2Y": 0,
  "rotate2" : 0
}

const colorFront  = "#199cff";
const colorBack   = "#e3eded";
const colorStroke = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);
  angleMode(DEGREES);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData,scale) {
  // determine parameters for second circle


  let trans1X = letterData["translate1X"];
  let trans1Y = letterData["translate1Y"];
  let rot1 = letterData["rotate1"];

  let trans2X = letterData["translate2X"];
  let trans2Y = letterData["translate2Y"];
  let rot2 = letterData["rotate2"];

  // draw 1st right angle.
  push();
  translate(trans1X,trans1Y);
  rotate(rot1);
  line(0, 0, 0, 100);
  line(0, 100, 100, 100);
  pop();

  // draw 2nd right angle.
  push();
  translate(trans2X, trans2Y);
  rotate(rot2);
  line(0, 0, 0, 100);
  line(0, 100, 100, 100);
  pop();


}

function draw () {

  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  //Drawing static base line
  push()
  translate(center_x, center_y);
  rotate(45);
  translate(-center_x, -center_y);
  line(center_x, 400, center_x, 100);
  pop()


  // draw the letters A, B, C from saved data
  drawLetter(center_x, center_y, letterA, 1);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
