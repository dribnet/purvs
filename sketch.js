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
  "rotation": 30,
  "rotation1": 70,
  "offsetx": -10,
  "offsety": 0
}

const letterB = {
  "rotation": 0,
  "rotation1": 30,
  "offsetx": -30,
  "offsety": 0
}

const letterC = {
  "rotation": -75,
  "rotation1": -15,
  "offsetx": 0,
  "offsety": 0
}

const backgroundColor  = "#e3eded";
// const strokeColor      = "#233f11";

// const darkBlue  = "#199cff";
// const lightBlue  = "#59ccff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  // stroke(strokeColor);
  stroke(255, 0, 0,80);
  strokeWeight(3);
  noFill();

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

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = 150;
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  // fill(darkBlue);
  push();
  translate(posx, posy);
  rotate(letterData["rotation"])
  rect(0, 0, 10, 150);
  pop();
  // fill(lightBlue);
  // rect(pos2x, pos2y, size2, size2,50,10,);

  push();
  translate(pos2x,pos2y);
  rotate(letterData["rotation1"]);
  rect(0,0,150,10,);
  pop();
  // rect()

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
