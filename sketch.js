const canvasWidth = 960;
const canvasHeight = 500;
let tester = 0;
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
   // draw the letters A, B, C from saved data
   /*
  drawLetter(center_x - 250, center_y, letterA, 0, -50, 0, 100, 0, 100);
  drawLetter(center_x      , center_y, letterB, 0, -50, 0, 50, 100, 0);
  drawLetter(center_x + 250, center_y, letterC, 80, 0, 0, 0, 0, 0);
*/
const letterA = {
  "circle1x": 0 ,
  "circle1y": 100,
  "circle2x": 0,
  "circle2y": -50,
  "circle3x": 0,
  "circle3y": -50



}

const letterB = {
  "circle1x": 0 ,
  "circle1y": -50,
  "circle2x": 0,
  "circle2y": 50,
  "circle3x": 100,
  "circle3y": 0

}

const letterC = {
  "circle1x": 0 ,
  "circle1y": 0,
  "circle2x": 75,
  "circle2y": 0,
  "circle3x": 75,
  "circle3y": 0

}

const colorFront1  = "#ff18a6";
const colorFront2  = "#ff59c4";
const colorBack    = "#e3eded";
const colorStroke  = "#3f1128";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);
  // with no animation, redrawing the screen is not necessary
  //noLoop();
}

function drawLetter(posx, posy, letterData) {

  let circle1x = letterData["circle1x"];
  let circle1y = letterData["circle1y"];
  let circle2x = letterData["circle2x"];
  let circle2y = letterData["circle2y"];
  let circle3x = letterData["circle3x"];
  let circle3y = letterData["circle3y"];

  tester = tester +0.01;

 
  noStroke();
  //push();
  strokeWeight(1);
  fill('#ffb2e3');
  push();
  translate(posx, posy);
  rectMode(CENTER);
  rect(0, 0, 210, 210, 20);  
  pop();

  fill('#ff59c4');

  push();
  translate(posx, posy);
  
  if(circle3x == circle2x && circle3y == circle2y){
   ellipse(circle1x, circle1y, 150, 150);
  } else {
    ellipse(circle1x, circle1y, 100, 100);
  }
   ellipse(circle2x, circle2y, 100, 100);
   ellipse(circle3x, circle3y, 100, 100);

  pop();



}


function draw () {
  // clear screen
  background('#ff59c4');

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA, 0, -150, 0, 100, 0, 100);
  drawLetter(center_x      , center_y, letterB, 0, -50, 0, 50, 100, 0);
  drawLetter(center_x + 250, center_y, letterC, 80, 0, 0, 0, 0, 0);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
