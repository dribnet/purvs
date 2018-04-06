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

// const letterA = {
//   "size": 0,
//   "offsetx": 0,
//   "offsety": 35
// }

const letterA = {
  "rotate": 180,
  "accentXa": 0,
  "accentYa": 45
}

const letterB = {
  "rotate": 90,
  "accentXa": -45,
  "accentYa": 25
}

const letterC = {
  "rotate": 90,
  "accentXa": 0,
  "accentYa": -90
}

const colorFront  = "#d3b59c";
const colorBack   = "#e3ede5";
const colorStroke = "#85bcb7";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  angleMode (DEGREES);

  // color/stroke setup
  fill (colorFront);
  stroke (colorStroke);
  strokeWeight (10);

  // with no animation, redrawing the screen is not necessary
  noLoop ();
}

function drawLetter (posx, posy, letterData) {
  // determines variables for the Arc
  let rotate2 = letterData["rotate"];

  // determines variables for the first "accent"
  let accentXb = letterData["accentXa"];
  let accentYb = letterData["accentYa"];

  // draws the Arc and the Accent
  push ();
  rotate (rotate2);
  arc (posx ,posy ,200 ,200 ,-40 ,220 ,PIE);
  ellipse (accentXb, accentYb, 50);
  pop ();
}

function draw () {
  // clear screen
  background (colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  push ();
  translate (center_x - 250, center_y);
  drawLetter (0, 0, letterA);
  pop ();

  push ();
  translate (center_x, center_y);
  drawLetter (0, 0, letterB);
  pop ();

  push ();
  translate (center_x + 250, center_y);
  drawLetter (0, 0, letterC);
  pop ();
}

function keyTyped () {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
