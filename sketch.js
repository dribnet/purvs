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
  "arcStart": 0,
  "arcStop": 0,
  "VerticalLine": false,
  "horizontalline": false,
  "Diagonalline1": false,
  "Diagonalline2": true,
  "Diagonalline3": true,
  "Diagonalline4": false,

  
}

const letterB = {
  "arcStart": 0,
  "arcStop": 90,
  "VerticalLine": true,
  "horizontalline": true,
  "Diagonalline1": false,
  "Diagonalline2": false, 
  "Diagonalline3": false, 
  "Diagonalline4": false, 
}

const letterC = {
  "arcStart": 0,
  "arcStop": 0,
  "VerticalLine": false, 
  "horizontalline": false, 
  "Diagonalline1": true, 
  "Diagonalline2": true,
  "Diagonalline3": false, 
  "Diagonalline4": false,
}

const backgroundColor  = "#e3eded";
const strokeColor      = "#233f11";

const darkBlue  = "#199cff";
//const lightBlue  = "#59ccff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
  angleMode(DEGREES);
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

function drawLetter(0, 0, letterData) {
  
let arcStartAngle = letterData ["arcStart"];
let arcStopAngle = letterData["arcStop"];
let line1 = letterData["VerticalLine"];
let line2 = letterData ["Diagonalline1"]
let line3 = letterData ["horizontalline"]
let line4 = letterData ["Diagonalline2"]
let line5 = letterData ["Diagonalline3"]
let line6 = letterData ["Diagonalline4"]

//potential parameters set by true/false statements or if statements. so maybe parametrs could include
// "verticalline"
// "horizontalline"
// "arc1" etc. something like that 

noFill();
stroke(153, 0, 89, 50);
//main wheel
  arc(0, 0, 100, 100, 0, 360);
  line(0, 0+50, 0, 0-50)
  line(0+50, 0, 0-50, 0)
  line(0+35, 0-35, 0-35, 0+35)
  line(0-35, 0-35, 0+35, 0+35)

  //parameters
  stroke(153, 0, 89);
  arc(0, 0, 100, 100, arcStartAngle, arcStopAngle);

  if(line1 == true){
   line(0, 0+50, 0, 0-50)
  } 
  if(line2 == true){
   line(0, 0, 0+35, 0-35)
  }
  if(line3 == true){
   line(0, 0, 0+50, 0)
  }
  if(line4 == true){
   line(0, 0, 0+35, 0+35)
  }
  if(line5 == true){
   line(0, 0, 0-35, 0+35)
  }
  if(line6 == true){
   line(0, 0, 0-35, 0-35)
  }



}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
