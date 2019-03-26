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
  "size": 100,
  "offsetx": 60,
  "offsety": 50
 
}

const letterA2 = {
  "size3": 80,
  "offsetx3": 0,
  "offsety3": 0
 
}


const letterB = {
  "size": 150,
  "offsetx": -20,
  "offsety": -100
 
}
const letterB2 = {
  "size4": 80,
  "offsetx4": 0,
  "offsety4": 0
 
}


const letterC = {
  "size": 100,
  "offsetx": 0,
  "offsety": 0
 
}

const letterC2 = {
  "size5": 80,
  "offsetx5": 0,
  "offsety5": 0
 
}
const letterC3 = {
  "size6": 80,
  "offsetx6": 100,
  "offsety6": 0
 
}


const colorFront1  = "#bf78e2";
const colorFront2  = "#6eb5e5";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(0);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}


function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
   let size3 = letterData["size3"];
let pos3x = posx + letterData["offsetx3"];
  let pos3y = posy + letterData["offsety3"];
   let size4 = letterData["size4"];
let pos4x = posx + letterData["offsetx4"];
  let pos4y = posy + letterData["offsety4"];
  let size5 = letterData["size5"];
let pos5x = posx + letterData["offsetx5"];
  let pos5y = posy + letterData["offsety5"];
let size6 = letterData["size6"];
  let pos6x = posx + letterData["offsetx6"];
  let pos6y = posy + letterData["offsety6"];
  // draw two circles
  fill(colorFront1);

  ellipse(posx, posy, 150, 150);
  ellipse(pos2x, pos2y, 50, size2);
  

  fill(colorFront2);
   ellipse(pos6x, pos6y, size6, size6);
  ellipse(pos3x, pos3y, size3, size3);
   ellipse(pos4x, pos4y, size4, size4);
    ellipse(pos5x, pos5y, size5, size5);
    ellipse (781, 250, 50,25)
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x + 250, center_y, letterC, letterC3);
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  
  drawLetter(center_x + 250, center_y, letterC2);
  drawLetter(center_x - 250, center_y, letterA2);
  drawLetter(center_x      , center_y, letterB2);

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
