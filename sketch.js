const canvasWidth = 960;
const canvasHeight = 500;
const PI = 3.14159;
const HALF_PI = PI/2;
const TWO_PI = PI*2;

//const pie = PI;
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
  "cSize": 100,
  "arcS": PI, 
  "arcE": PI + HALF_PI,
}

const letterB = {
  "cSize": 100,
  "arcS": PI + HALF_PI, 
  "arcE": TWO_PI
}

const letterC = {
  "cSize": 100,
  "arcS": PI, 
  "arcE": PI + HALF_PI
}

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(0);
  noFill();
  strokeWeight(5);
  strokeCap(PROJECT);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let circleS = letterData["cSize"];
  let ArcStart = letterData["arcS"];
  let ArcEnd = letterData["arcE"];
  let LineLength = letterData["lineL"]

  // draw two circles

  //fill(colorFront1);
  //ellipse(posx, posy, 150, 150);
  //fill(colorFront2);
  //ellipse(pos2x, pos2y, size2, size2);

  arc(posx,posy,circleS,circleS,ArcStart,ArcEnd);
}

function draw () {
  // clear screen
  background(colorBack);

  //A
  strokeWeight(5);
  noFill();
  arc(100,100,100,100,PI,PI + HALF_PI);
  line(50,100,100,100);
  line(100,50,100,100);
  arc(50,50,100,100,PI + HALF_PI,TWO_PI);

  //B
  strokeWeight(5);
  noFill();
  arc(150,100,100,100,PI + HALF_PI,TWO_PI);
  line(150,0,150,100);
  line(150,100,200,100);

  //C
  strokeWeight(5);
  noFill();
  arc(300,100,100,100,PI,PI + HALF_PI);
  line(250,100,300,100);


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
