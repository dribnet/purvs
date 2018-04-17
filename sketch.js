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
<<<<<<< HEAD
 "pbx": +30,
 "pby": -25,
 "pcx": +90,
 "pcy": +140,
 "p1x": -40,
 "p1y": +120,
 "p2x": +30,
 "p2y": -25,
 "p3x": +90,
 "p3y": +120,
}

const letterB = {
 "pbx": -40,
 "pby": -220,
 "pcx": +90,
 "pcy": -180,
 "p1x": -40,
 "p1y": +50,
 "p2x": -40,
 "p2y": -60,
 "p3x": +50,
 "p3y": -10,
}

 const letterC = {
 // "pbx": +30,
 // "pby": -25,
 // "pcx": +90,
 // "pcy": +140,
 "p1x": -40,
 "p1y": +50,
 "p2x": +90,
 "p2y": -25,
 "p3x": +90,
 "p3y": +120,

}

const colorFront  = "#194284";
const colorBack   = "#e3eded";
const colorStroke = "#194284";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  //First Triangle
  let posbx = posx + letterData["pbx"];
  let posby = posx + letterData["pby"];
  let poscx = posx + letterData["pcx"];
  let poscy = posx + letterData["pcy"];

  //Second Triangle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["p1x"];
  let pos2y = posy + letterData["p1y"];
  let pos3x = posx + letterData["p2x"]
  let pos3y = posy + letterData["p2y"]
  let pos4x = posx + letterData["p3x"]
  let pos4y = posy + letterData["p3y"]
  
  

  // draw two circles
  triangle(posx -40, posy +120, posbx, posby, poscx, poscy);
  triangle(pos2x, pos2y, pos3x, pos3y, pos4x, pos4y);

=======
  "size": 80,
  "offsetx": 0,
  "offsety": 35
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0
}

const colorFront  = "#199cff";
const colorBack   = "#e3eded";
const colorStroke = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  ellipse(posx, posy, 150, 150);
  ellipse(pos2x, pos2y, size2, size2);
>>>>>>> upstream/part2
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, 10, letterA);
  drawLetter(center_x      , center_y, 10, letterB);
  drawLetter(center_x + 250, center_y, 10, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}Dta
