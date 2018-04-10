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

  "translate1X": 447,
  "translate1Y": 285,
  "rotate1" : 315,

  "translate2X": 375,
  "translate2Y": 357,
  "rotate2" : 315
}

const letterC = {

  "translate1X": 587,
  "translate1Y": 285,
  "rotate1" : 225,

  "translate2X": 375,
  "translate2Y": 357,
  "rotate2" : 315
}

const letterD = {

  "translate1X": 553,
  "translate1Y": 320,
  "rotate1" : 225,

  "translate2X": 411,
  "translate2Y": 320,
  "rotate2" : 315
}

const letterE = {

  "translate1X": 587,
  "translate1Y": 285,
  "rotate1" : 135,

  "translate2X": 375,
  "translate2Y": 355,
  "rotate2" : 225
}

const letterF = {

  "translate1X": 657,
  "translate1Y": 215,
  "rotate1" : 135,

  "translate2X": 585,
  "translate2Y": 287,
  "rotate2" : 135
}

const letterG = {

  "translate1X": 688,
  "translate1Y": 243,
  "rotate1" : 180,

  "translate2X": 375,
  "translate2Y": 357,
  "rotate2" : 270
}

const letterH = {

  "translate1X": 587,
  "translate1Y": 144,
  "rotate1" : 45,

  "translate2X": 588,
  "translate2Y": 428,
  "rotate2" : 225
}

const letterI = {

  "translate1X": 520,
  "translate1Y": 210,
  "rotate1" : 225,

  "translate2X": 520,
  "translate2Y": 210,
  "rotate2" : 225
}

const letterJ = {

  "translate1X": 443,
  "translate1Y": 287,
  "rotate1" : 45,

  "translate2X": 302,
  "translate2Y": 287,
  "rotate2" : 315
}

const letterK = {

  "translate1X": 637,
  "translate1Y": 235,
  "rotate1" : 135,

  "translate2X": 465,
  "translate2Y": 265,
  "rotate2" : 45
}

const letterL = {

  "translate1X": 445,
  "translate1Y": 285,
  "rotate1" : 45,

  "translate2X": 445,
  "translate2Y": 285,
  "rotate2" : 45
}

const letterM = {

  "translate1X": 686,
  "translate1Y": 244,
  "rotate1" : 180,

  "translate2X": 786,
  "translate2Y": 345,
  "rotate2" : 180
}

const letterN = {

  "translate1X": 587,
  "translate1Y": 285,
  "rotate1" : 225,

  "translate2X": 586,
  "translate2Y": 287,
  "rotate2" : 315
}

const letterO = {

  "translate1X": 490,
  "translate1Y": 313,
  "rotate1" : 225,

  "translate2X": 488,
  "translate2Y": 172,
  "rotate2" : 45
}

const letterP = {

  "translate1X": 588,
  "translate1Y": 285,
  "rotate1" : 225,

  "translate2X": 586,
  "translate2Y": 144,
  "rotate2" : 45
}

const letterQ = {

  "translate1X": 487,
  "translate1Y": 244,
  "rotate1" : 270,

  "translate2X": 585,
  "translate2Y": 143,
  "rotate2" : 90
}

const letterR = {

  "translate1X": 687,
  "translate1Y": 243,
  "rotate1" : 180,

  "translate2X": 445,
  "translate2Y": 287,
  "rotate2" : 315
}

const letterS = {

  "translate1X": 587,
  "translate1Y": 285,
  "rotate1" : 225,

  "translate2X": 373,
  "translate2Y": 215,
  "rotate2" : 45
}

const letterT = {

  "translate1X": 587,
  "translate1Y": 285,
  "rotate1" : 225,

  "translate2X": 586,
  "translate2Y": 143,
  "rotate2" : 135
}

const letterU = {

  "translate1X": 659,
  "translate1Y": 356,
  "rotate1" : 135,

  "translate2X": 375,
  "translate2Y": 357,
  "rotate2" : 315
}

const letterV = {

  "translate1X": 374,
  "translate1Y": 214,
  "rotate1" : 45,

  "translate2X": 375,
  "translate2Y": 357,
  "rotate2" : 315
}

const letterW = {

  "translate1X": 517,
  "translate1Y": 357,
  "rotate1" : 315,

  "translate2X": 375,
  "translate2Y": 357,
  "rotate2" : 315
}

const letterX = {

  "translate1X": 418,
  "translate1Y": 312,
  "rotate1" : 225,

  "translate2X": 570,
  "translate2Y": 160,
  "rotate2" : 45
}

const letterY = {

  "translate1X": 515,
  "translate1Y": 144,
  "rotate1" : 45,

  "translate2X": 445,
  "translate2Y": 215,
  "rotate2" : 315
}

const letterZ = {

  "translate1X": 587,
  "translate1Y": 143,
  "rotate1" : 135,

  "translate2X": 375,
  "translate2Y": 357,
  "rotate2" : 315
}


const colorFront  = "#199cff";
const colorBack   = "#e3eded";
const colorStroke = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup


  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData,scale) {
  
  // determine parameters for second circle  
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);
  angleMode(DEGREES);

  let trans1X = letterData["translate1X"];
  let trans1Y = letterData["translate1Y"];
  let rot1 = letterData["rotate1"];

  let trans2X = letterData["translate2X"];
  let trans2Y = letterData["translate2Y"];
  let rot2 = letterData["rotate2"];

  //Drawing static base line
  push()
  translate(center_x, center_y);
  rotate(45);
  translate(-center_x, -center_y);
  line(center_x, 400, center_x, 100);
  pop()

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




  // draw the letters A, B, C from saved data
  drawLetter(center_x, center_y, letterA, 1);
  drawLetter(center_x, center_y, letterB, 1);
  drawLetter(center_x, center_y, letterC, 1);
  // drawLetter(center_x, center_y, letterD, 1);
  // drawLetter(center_x, center_y, letterE, 1);
  // drawLetter(center_x, center_y, letterF, 1);
  // drawLetter(center_x, center_y, letterG, 1);
  // drawLetter(center_x, center_y, letterH, 1);
  // drawLetter(center_x, center_y, letterI, 1);
  // drawLetter(center_x, center_y, letterJ, 1);
  // drawLetter(center_x, center_y, letterK, 1);
  // drawLetter(center_x, center_y, letterL, 1);
  // drawLetter(center_x, center_y, letterM, 1);
  // drawLetter(center_x, center_y, letterN, 1);
  // drawLetter(center_x, center_y, letterO, 1);
  // drawLetter(center_x, center_y, letterP, 1);
  // drawLetter(center_x, center_y, letterQ, 1);
  // drawLetter(center_x, center_y, letterR, 1);
  // drawLetter(center_x, center_y, letterS, 1);
  // drawLetter(center_x, center_y, letterT, 1);
  // drawLetter(center_x, center_y, letterU, 1);
  // drawLetter(center_x, center_y, letterV, 1);
  // drawLetter(center_x, center_y, letterW, 1);
  // // drawLetter(center_x, center_y, letterX, 1);
  // drawLetter(center_x, center_y, letterY, 1);
  drawLetter(center_x, center_y, letterZ, 1);

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
