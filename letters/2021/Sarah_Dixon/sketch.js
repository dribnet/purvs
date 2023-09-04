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
  "size": 30,
  "offsetx": 25,
  "offsety": 35,
  // "rect1": 10,
  // "rect 2": 20
}

const letterB = {
  "size": 60,
  "offsetx": 45,
  "offsety": 15
}

const letterC = {
  "size": 60,
  "offsetx": 90,
  "offsety": 40
}

const backgroundColor  = "#ffb3ff";
// const strokeColor      = "#0000b3";

const darkGrey  = "#282626";
const darkRed  = "#AF0A37";
const white = "#FFFFFF";


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  // stroke(strokeColor);
  // strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 400, center_y, letterA);
  drawLetter(center_x - 100  , center_y, letterB);
  drawLetter(center_x + 200, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  fill(darkGrey);
  rect(posx, posy, 150, 200);
  fill(255, 255, 255); 
  line(155, 250, 155, 450); 
  fill(darkRed);
  // rect(pos2x, pos2y, size2, size2+50);
  rect(140, 260, 35, 25);
  rect(100, 300, 35, 55);
  rect(100, 350, 35, 55); 

  rect(180, 300, 35, 55);
  rect (180, 350, 35, 55);
  rect(140, 325, 35, 25);

  line(455, 250, 455, 450);
  rect(400, 300, 35, 55);
  rect(400, 350, 35, 55); 
  rect(440, 410, 35, 25);
  rect(480, 300, 35, 55); 
  rect(480, 350, 35, 55);
  rect(440, 340, 35, 25);
  rect (440, 270, 35, 25);

  line(755, 250, 755, 450);
  rect (705, 300, 35, 55);
  rect(705, 355, 35, 55);
  rect(745, 265, 35, 25);
  rect(745, 400, 45, 25);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
