const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my 10 variable per letter are:
 *
    arcstart: starting angle of the arc
    arc stop: ending angle of the arc
    secondarcstart: starting angle of second arc (for letters that have 2 arcs)
    secondartstop: ending angle of second arc (for letters that have 2 arcs)
    verticalline: calling the vertical line 
    horizontalline: calling the right half of the horizontal line 
    diagonalline1: line at 45 degrees
    diagonalline2: line at 135 degrees
    diagalline3: line at 225 degrees
    diagonalline4: line at 315 degrees

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
  "SecondarcStop": 0,
  "SecondarcStart": 0,

  
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
  "SecondarcStop": 0,
  "SecondarcStart": 0,
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
  "SecondarcStop": 0,
  "SecondarcStart": 0,
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


function drawLetter(x,y,letterData){
let arcStartAngle = letterData ["arcStart"];
let arcStopAngle = letterData["arcStop"];
let SecondarcStartAngle = letterData ["SecondarcStart"];
let SecondarcStopAngle = letterData["SecondarcStop"];
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
  arc(x, y, 100, 100, 0, 360);
  line(x, y+50, x, y-50)
  line(x+50, y, x-50, y)
  line(x+35, y-35, x-35, y+35)
  line(x-35, y-35, x+35, y+35)

  //parameters
  stroke(153, 0, 89);
  arc(x, y, 100, 100, arcStartAngle, arcStopAngle);
  arc(x, y, 100, 100, SecondarcStartAngle, SecondarcStopAngle);

  if(line1 == true){
   line(x, y+50, x, y-50)
  } 
  if(line2 == true){
   line(x, y, x+35, y-35)
  }
  if(line3 == true){
   line(x, y, x+50, y)
  }
  if(line4 == true){
   line(x, y, x+35, y+35)
  }
  if(line5 == true){
   line(x, y, x-35, y+35)
  }
  if(line6 == true){
   line(x, y, x-35, y-35)
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
