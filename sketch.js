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
  //"size": 80,
  "offsetx1 tri 1": -80,
  "offsety1 tri 1": 75,

  "offsetx2 tri 1": 0,
  "offsety2 tri 1": 75,

  "offsetx3 tri 1": 0,
  "offsety3 tri 1": -30,


  "offsetx1 tri 2": 0,
  "offsety1 tri 2": 75,

  "offsetx2 tri 2": 80,
  "offsety2 tri 2": 75,

  "offsetx3 tri 2": 0,
  "offsety3 tri 2": -30,


  "offsetx1 tri 3": -80,
  "offsety1 tri 3": 45,

  "offsetx2 tri 3": 0,
  "offsety2 tri 3": -60,

  "offsetx3 tri 3": 0,
  "offsety3 tri 3": -90,


  "offsetx1 tri 4": 0,
  "offsety1 tri 4": -60,

  "offsetx2 tri 4": 80,
  "offsety2 tri 4": 45,

  "offsetx3 tri 4": 0,
  "offsety3 tri 4": -90,


}

const letterB = {
  "offsetx1 tri 1": -70,
  "offsety1 tri 1": -80,

  "offsetx2 tri 1": -70,
  "offsety2 tri 1": -10,

  "offsetx3 tri 1": 35,
  "offsety3 tri 1": -10,


  "offsetx1 tri 2": -70,
  "offsety1 tri 2": 10,

  "offsetx2 tri 2": -70,
  "offsety2 tri 2": 80,

  "offsetx3 tri 2": 35,
  "offsety3 tri 2": 10,


  "offsetx1 tri 3": -40,
  "offsety1 tri 3": -80,

  "offsetx2 tri 3": 80,
  "offsety2 tri 3": 0,

  "offsetx3 tri 3": 110,
  "offsety3 tri 3": 0,


  "offsetx1 tri 4": 80,
  "offsety1 tri 4": 0,

  "offsetx2 tri 4": -40,
  "offsety2 tri 4": 80,

  "offsetx3 tri 4": 110,
  "offsety3 tri 4": 0,
}

const letterC = {
  "offsetx1 tri 1": 95,
  "offsety1 tri 1": -80,

  "offsetx2 tri 1": 95,
  "offsety2 tri 1": 0,

  "offsetx3 tri 1": -10,
  "offsety3 tri 1": 0,


  "offsetx1 tri 2": 95,
  "offsety1 tri 2": 0,

  "offsetx2 tri 2": 95,
  "offsety2 tri 2": 80,

  "offsetx3 tri 2": -10,
  "offsety3 tri 2": 0,


  "offsetx1 tri 3": 65,
  "offsety1 tri 3": -80,

  "offsetx2 tri 3": -40,
  "offsety2 tri 3": 0,

  "offsetx3 tri 3": -70,
  "offsety3 tri 3": 0,


  "offsetx1 tri 4": -40,
  "offsety1 tri 4": 0,

  "offsetx2 tri 4": 65,
  "offsety2 tri 4": 80,

  "offsetx3 tri 4": -70,
  "offsety3 tri 4": 0,
}

const colorFront1  = "#bc0000";
const colorFront2  = "#9e0000";
const colorBack    = "#2b2b2b";
const colorStroke  = "#1e1e1e";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  //strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];

  let pos2x = posx + letterData["offsetx1 tri 1"];
  let pos2y = posy + letterData["offsety1 tri 1"];

  let pos3x = posx + letterData["offsetx2 tri 1"];
  let pos3y = posy + letterData["offsety2 tri 1"];

  let pos4x = posx + letterData["offsetx3 tri 1"];
  let pos4y = posy + letterData["offsety3 tri 1"];

  let pos5x = posx + letterData["offsetx1 tri 2"];
  let pos5y = posy + letterData["offsety1 tri 2"];

  let pos6x = posx + letterData["offsetx2 tri 2"];
  let pos6y = posy + letterData["offsety2 tri 2"];

  let pos7x = posx + letterData["offsetx3 tri 2"];
  let pos7y = posy + letterData["offsety3 tri 2"];

  let pos8x = posx + letterData["offsetx1 tri 3"];
  let pos8y = posy + letterData["offsety1 tri 3"];

  let pos9x = posx + letterData["offsetx2 tri 3"];
  let pos9y = posy + letterData["offsety2 tri 3"];

  let pos10x = posx + letterData["offsetx3 tri 3"];
  let pos10y = posy + letterData["offsety3 tri 3"];

  let pos11x = posx + letterData["offsetx1 tri 4"];
  let pos11y = posy + letterData["offsety1 tri 4"];

  let pos12x = posx + letterData["offsetx2 tri 4"];
  let pos12y = posy + letterData["offsety2 tri 4"];

  let pos13x = posx + letterData["offsetx3 tri 4"];
  let pos13y = posy + letterData["offsety3 tri 4"];
  // draw three circles
   

  fill(colorFront1);
  triangle(pos2x, pos2y, pos3x, pos3y, pos4x, pos4y);

  fill(colorFront2);
  triangle(pos5x, pos5y, pos6x, pos6y, pos7x, pos7y);




  fill(colorFront1);
  triangle(pos8x, pos8y, pos9x, pos9y, pos10x, pos10y);

  fill(colorFront2);
  triangle(pos11x, pos11y, pos12x, pos12y, pos13x, pos13y);

  //fill(255);
   //ellipse(posx, posy, 10, 10);
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
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
