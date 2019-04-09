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
    "T11x": 50,
    "T11y": 10,
    "T12x": 100,
    "T12y": 200,
    "T13x": 0,
    "T13y": 200,

    "T21x": 50,
    "T21y": 50,
    "T22x": 80,
    "T22y": 150,
    "T23x": 20,
    "T23y": 150
}

const letterB = {
    "T11x": 0,
    "T11y": 10,
    "T12x": 80,
    "T12y": 70,
    "T13x": 0,
    "T13y": 100,

    "T21x": 0,
    "T21y": 75,
    "T22x": 100,
    "T22y": 80,
    "T23x": 0,
    "T23y": 200
}

const letterC = {
    "T11x": 100,
    "T11y": 10,
    "T12x": 30,
    "T12y": 100,
    "T13x": 5,
    "T13y": 100,

    "T21x": 50,
    "T21y": 100,
    "T22x": 3,
    "T22y": 100,
    "T23x": 80,
    "T23y": 195
}

const colorFront1  = "#fae";
const colorFront2  = "#59ccff";
const colorBack    = "#e3eded";
const colorStroke  = "#FFFFFF";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let T11x = letterData["T11x"];
  let T11y = letterData["T11y"];
  let T12x = letterData["T12x"];
  let T12y = letterData["T12y"];
  let T13x = letterData["T13x"];
  let T13y = letterData["T13y"];
  let T21x = letterData["T21x"];
  let T21y = letterData["T21y"];
  let T22x = letterData["T22x"];
  let T22y = letterData["T22y"];
  let T23x = letterData["T23x"];
  let T23y = letterData["T23y"];


  // draw two circles
  fill(colorFront1);
  triangle(T11x +posx, T11y + posy, T12x + posx, T12y + posy, T13x + posx, T13y + posy);
  fill(colorFront2);
  triangle(T21x +posx, T21y + posy, T22x + posx, T22y + posy, T23x + posx, T23y + posy);

  // fill(colorFront1);
  // triangle(0, 10, 80, 70, 0, 100);
  // fill(colorFront2);
  // triangle(0, 75, 100, 80, 0, 200);

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
