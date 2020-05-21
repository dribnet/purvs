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
//  "size": 100,
  "offsetx": 0,
  "offsety":0,

  "offset2x": 30,
  "offset2y": 70,

  "offset3x": -70,
  "offset3y": -100,

  "offset4x": -160,
  "offset4y": 70,

//triangle 2
  "offsetx2": -70,
  "offsety2":-40,

  "offsetx3":30,
  "offsety3":70,

  "offsetx4":-160,
  "offsety4":70,


}

const letterB = {

  "offset2x": -160,
  "offset2y": 70,

  "offset3x": -30,
  "offset3y": 70,

  "offset4x": -160,//top
  "offset4y": -100,

//triangle 2
  "offsetx2": -160,
  "offsety2":-100,

  "offsetx3":-40,
  "offsety3":-100,

  "offsetx4":-160,
  "offsety4":70,
}

const letterC = {
  "offset2x": 0,
  "offset2y": 70,

  "offset3x": -160,
  "offset3y": -15,

  "offset4x": -160,
  "offset4y": 70,

//triangle 2
  "offsetx2": -160,
  "offsety2":-100,

  "offsetx3":0,
  "offsety3":-100,

  "offsetx4":-160,
  "offsety4":-15,

}

const colorFront1  = "#269482"; //dark
const colorFront2  = "#40d6cc"; // light
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(1);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];

//  let posx = posx + letterData["offsetx"];
//  let posy = posy + letterData["offsety"];

//triangle 1
  let pos2x = posx + letterData["offset2x"];
  let pos2y = posy + letterData["offset2y"];

  let pos3x = posx + letterData["offset3x"];
  let pos3y = posy + letterData["offset3y"];

  let pos4x = posx + letterData["offset4x"];
  let pos4y = posy + letterData["offset4y"];

//triangle 2
let posx2 = posx + letterData["offsetx2"];
let posy2 = posy + letterData["offsety2"];

let posx3 = posx + letterData["offsetx3"];
let posy3 = posy + letterData["offsety3"];

let posx4 = posx + letterData["offsetx4"];
let posy4 = posy + letterData["offsety4"];




  fill(colorFront1);
  triangle(pos2x, pos2y, pos3x, pos3y, pos4x, pos4y);

  fill(colorFront2);
  triangle(posx2, posy2, posx3, posy3, posx4, posy4);

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
