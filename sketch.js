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
  "arch": 80,
  "arcw": 80,
  "offsetx": 0,
  "offsety": 35,

  "arch1":100,
  "arcw1": 10,
  "offsetx1":10,
  "offsety1":100,

  "archx3": 50,
  "archy3": 50,
  "offsetx2":50,
  "offsety2":50,


  
}

const letterB = {
  "arch": 100,
  "arcw": 80,
  "offsetx": 0,
  "offsety": -30,

  "arch1":100,
  "arcw1": 50,
  "offsetx1":50,
  "offsety1":100,


  "archx3": 50,
  "archy3": 50,
  "offsetx2":50,
  "offsety2":50,
}

const letterC = {
  "arch": 100,
  "arcw": 80,
  "offsetx": 20,
  "offsety": 0,

  "arch1":50,
  "arcw1": 100,
  "offsetx1":100,
  "offsety1":50,


  "archx3": 50,
  "archy3": 50,
  "offsetx2":50,
  "offsety2":50,
}

const colorFront1  = "#19cff";  //dark blue 
const colorFront2  = "#59ccff";  //light blue
const colorFront3  = "#ffef42";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  // stroke(colorStroke);
  // strokeWeight(1);
 noStroke();
 angleMode(DEGREES);
  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy,letterData) {
  // determine parameters for second circle
  let size1x = letterData["arch"];
  let size1y = letterData["arcw"];
  let pos1x = posx + letterData["offsetx"];
  let pos1y = posy + letterData["offsety"];

  let size2x = letterData["arch1"];
  let size2y = letterData["arcw1"];
  let pos2x = posx + letterData["offsetx1"];
  let pos2y = posy + letterData["offsety1"];

  let size3x = letterData["archx3"];
  let size3y = letterData["archy3"];
  let pos3x = posx + letterData["offsetx2"];
  let pos3y = posy + letterData["offsety2"];


  // draw two circles
  fill(colorFront1);
  ellipse(pos3x , pos3y, 150, 150);
  
  fill(colorFront2);
  arc(pos1x,pos1y,size1x,size1y,180,0);
  
  fill(colorFront3);
  rect(pos2x, pos2y, 55, 55);

  // fill(colorfront)
  
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
  // drawLetter(center_x       , center_y LetterD);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
