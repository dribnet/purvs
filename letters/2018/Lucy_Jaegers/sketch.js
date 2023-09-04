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
 // "size": 80,
 // "offsetx": 0,
 // "offsety": 35,

  "offset": 150,

  "x1": 100,
  "y1": 450,
  "x2": 200,
  "y2": 450
}

const letterB = {
 // "size": 150,
 // "offsetx": 0,
 // "offsety": -145,

  "offset": 450,

  "x1": 500,
  "y1": 50,
  "x2": 500,
  "y2": 450
}

const letterC = {
// "size": 100,
// "offsetx": 30,
// "offsety": 0,

  "offset": 700,

  "x1": 900,
  "y1": 50,
  "x2": 900,
  "y2": 450
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
  //let size2 = letterData["size"];
  //let pos2x = posx + letterData["offsetx"];
  //let pos2y = posy + letterData["offsety"];

  let posx1 = letterData["x1"];
  let posy1 = letterData["y1"];
  let posx2 = letterData["x2"];
  let posy2 = letterData["y2"];

  let offset = letterData["offset"];


  // draw two circles
  //ellipse(posx, posy, 150, 150);
  //ellipse(pos2x, pos2y, size2, size2);


  line(posx1, posy1, offset, canvasHeight/2);
  line(posx2, posy2, offset, canvasHeight/2);

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
}
