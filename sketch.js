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
  "size": 90,
  "offsetx": 0,
  "offsety": 60,
  "size_3":50,
  "offsetx3": 0,
  "offsety3": -30, 
}

const letterB = {
  "size": 150,
  "offsetx": -100,
  "offsety": 0,
  "size_3": 50,
  "offsetx3": 50,
  "offsety3": 0,
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0,
  "size_3": 30,
  "offsetx3": -50,
  "offsety3": 0,
}

const backgroundColor  = "#000000";
const strokeColor      = "#000000";

const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

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
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let size3 = letterData["size_3"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3x = posx + letterData["offsetx3"];
  let pos3y = posy + letterData["offsety3"];


  // draw two circles
  fill('#0');
  ellipse(posx, posy, 150, 150);

  fill('#000000');
  ellipse(pos2x, pos2y, size2, size2);

 fill('#000000');
  ellipse(pos3x, pos3y, size3, size3);


  //  fill('white');
  // ellipse(pos2x, pos2y, size2, size2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
