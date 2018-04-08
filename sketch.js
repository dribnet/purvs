const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my three variable per letter are:
 *
   The idea of this concept is from the audio pitch. 
   The yellow arc show the level of pitch.
   For example the A tone is lower tha C tone, 
   the arc of A is more smooth than the arc of C.
   
   x,y2 and x5,y5 control the blue arc
   x2,y3 and x6,y6 control the filled arc
   x3,2y and x7,y7 control the green arc
 *
 */

const letterA = {

  "x": -280,
  "y":-10 ,
  "x2":-280 ,
  "y2": -34,
  "x3": -280,
  "y3": 50,
  "x5": -100,
  "y5":-90,
  "x6": 240,
  "y6":290,
  "x7":100,
  "y7":70,

}

const letterB = {
  "x": -140,
  "y":-10 ,
  "x2":5 ,
  "y2": -7,
  "x3": -38,
  "y3": 0,
  "x5": 180,
  "y5":-180,
  "x6": 136,
  "y6":360,
  "x7":180,
  "y7":170,
}

const letterC = {
  "x": 290,
  "y":-10 ,
  "x2":248 ,
  "y2": -4,
  "x3": 340,
  "y3": 0,
  "x5": -36,
  "y5":22,
  "x6": 350,
  "y6":360,
  "x7":30,
  "y7":-30,
}

const colorFront  = "#E0FFFF";
const colorBack   = "#FFE4E1";
const colorStroke = "#233f11";

function setup () {
  angleMode(DEGREES);
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(255);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(x, y,letterData) {

// Postion of blue arc
  let posx = x + letterData["x"];
  let posy = y + letterData["y"];

// Postion of green arc
  let pos2x = x + letterData["x2"];
  let pos2y = y + letterData["y2"];

// Postion of filled arc
  let pos3x = x + letterData["x3"];
  let pos3y = y + letterData["y3"];

// Rotation of blue arc
  let pos5x = x + letterData["x5"];
  let pos5y = y + letterData["y5"];

// Rotation of green arc
  let pos6x = x + letterData["x6"];
  let pos6y = y + letterData["y6"];

// Rotation of filled arc
  let pos7x = x + letterData["x7"];
  let pos7y = y + letterData["y7"];

angleMode(DEGREES);

  // draw the elemets
  strokeWeight(8);
  stroke(30,144,255);
  noFill();
  // The blue arc
  arc(posx, pos2y, 200,200, pos5x, pos5y);
noStroke();
  fill(255,215,0);
  // The yellow arc
  arc(pos2x, pos3y, 200, 400, pos7x, pos7y);
  strokeWeight(8);
  stroke(154,205,50);
  noFill();
  // The green arc
  arc(pos3x, pos2y, 180, 50, pos6x, pos6y);
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x, center_y,letterA);
  drawLetter(center_x, center_y, letterB);
  drawLetter(center_x, center_y, letterC);
  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}