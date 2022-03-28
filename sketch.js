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
  "size": 80,
  "offsetx": 0,
  "offsety": 35,
  "rectangle_x": -40,
  "rectangle_y": 30,
  "rectangle_width": 80,
  "rectangle_height": 10,
  "rectangle_first": false
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145,
  "rectangle_x": -70,
  "rectangle_y": -120,
  "rectangle_width": 80,
  "rectangle_height": 150,
  "rectangle_first": true
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0,
  "rectangle_x": 0,
  "rectangle_y": 0,
  "rectangle_width": 0,
  "rectangle_height": 0,
  "rectangle_first": false
}

const backgroundColor  = "#caf0f8";
const strokeColor      = "#03045e";

const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  noStroke()

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
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  fill(darkBlue);
  ellipse(posx, posy, 150, 150);

  // If we draw the rectangle first then draw!
  if (letterData["rectangle_first"]) {
    rect(posx + letterData["rectangle_x"], posy + letterData["rectangle_y"], letterData["rectangle_width"], letterData["rectangle_height"]);
  }

  fill(lightBlue);
  ellipse(pos2x, pos2y, size2, size2);

  // If we draw the rectangle last then draw!
  if (!letterData["rectangle_first"]) {
    fill(darkBlue);
    rect(posx + letterData["rectangle_x"], posy + letterData["rectangle_y"], letterData["rectangle_width"], letterData["rectangle_height"]);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
