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
  "size": 50,
  "width": 50,
  "height": 70,
  "offsetx": 30,
  "offsety": 35
}

const letterB = {
  "size": 50,
  "width": 50,
  "height": 70,
  "offsetx": -70,
  "offsety": -50
}

const letterC = {
  "size": 50,
  "width": 40,
  "height": 30,
  "offsetx": 40,
  "offsety": 15
}

const backgroundColor = "#FFFFFF";
const strokeColor = "#233f11";

function setup() {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw() {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x, center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let width = letterData["width"];
  let height = letterData["height"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  stroke(0);
  strokeWeight(2);
  noFill();

  // fill(darkPink);
  ellipse(posx, posy, 150, 150); //Main base of shape

  rect(pos2x - 5, pos2y - 30, width, height)

  // fill(darkBlue);
  // ellipse(pos2x, pos2y, size2, size2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  } else if (key == '@') {
    saveBlocksImages(true);
  }
}


// const canvasWidth = 960;
// const canvasHeight = 500;
//
// /*
//  * my three variable per letter are:
//  *
//    size: radius of the second circle (in pixels)
//    offsetx: x offset (in pixels) of the second circle
//             relative to the first one
//    offsety: y offset (in pixels) of the second circle
//             relative to the first one
//  *
//  */
//
// const letterA = {
//   "posX": 30,
//   "posY": 75,
//   "posX1": 58,
//   "posY1": 20,
//   "posX2": 86,
//   "posY2": 75
// }
//
// const letterB = {
//   "size": 35,
//   "width": 20,
//   "height": 55,
//   "posX": 0,
//   "posY": 38,
//   "posX1": 0,
//   "posY1": 58,
//   "posX2": -25,
//   "posY2": 20
// }
// //
// const letterC = {
//   "posX": 0,
//   "posY": 50,
//   "width": 55,
//   "height": 55,
//   "openingStart": 120,
//   "closingStop": 50
// }
//
// const backgroundColor = "#e3eded";
// const strokeColor = "#233f11";
//
// const yellow = "#FDD70F";
// const darkPink = "#ED1C79";
// const lightPink = "#E08ABA";
// const darkBlue = "#27469D";
// const lightBlue = "#7EB6E3";
//
// function setup() {
//   // create the drawing canvas, save the canvas element
//   main_canvas = createCanvas(canvasWidth, canvasHeight);
//   main_canvas.parent('canvasContainer');
//
//   // color/stroke setup
//   stroke(strokeColor);
//   strokeWeight(4);
//
//   // with no animation, redrawing the screen is not necessary
//   noLoop();
// }
//
// function draw() {
//   // clear screen
//   background(backgroundColor);
//
//   // compute the center of the canvas
//   let center_x = canvasWidth / 2;
//   let center_y = canvasHeight / 2;
//
//   // draw the letters A, B, C from saved data
//   drawLetterA(center_x - 200, center_y - 50, letterA);
//   drawLetterB(center_x, center_y - 50, letterB);
//   drawLetterC(center_x + 140, center_y - 50, letterC);
// }
//
// function drawLetterA(posx, posy, letterData) {
//   //Parameters
//   let posX = posx + letterData["posX"];
//   let posY = posy + letterData["posY"];
//   let posX1 = posx + letterData["posX1"];
//   let posY1 = posy + letterData["posY1"];
//   let posX2 = posx + letterData["posX2"];
//   let posY2 = posy + letterData["posY2"];
//
//   // The A
//   fill(darkPink);
//   noStroke();
//   triangle(posX, posY, posX1, posY1, posX2, posY2);
// }
//
// function drawLetterB(posx, posy, letterData) {
//   //Parameters
//   let size = letterData["size"];
//   let width = letterData["width"];
//   let height = letterData["height"];
//   let posX = posx + letterData["posX"];
//   let posY = posy + letterData["posY"];
//   let posX1 = posx + letterData["posX1"];
//   let posY1 = posy + letterData["posY1"];
//   let posX2 = posx + letterData["posX2"];
//   let posY2 = posy + letterData["posY2"];
//
//   // The B
//   fill(lightBlue);
//   ellipse(posX, posY, size, size);
//   fill(yellow);
//   ellipse(posX1, posY1, size, size);
//   fill(darkBlue);
//   rect(posX2, posY2, width, height);
// }
//
// function drawLetterC(posx, posy, letterData) {
//   //Parameters
//   let posX = posx + letterData["posX"];
//   let posY = posy + letterData["posY"];
//   let width = letterData["width"];
//   let height = letterData["height"];
//   let start = letterData["openingStart"];
//   let stop = letterData["closingStop"];
//
//   // The C
//   fill(lightPink);
//   arc(posX, posY, width, height, start, stop);
// }
//
// function keyTyped() {
//   if (key == '!') {
//     saveBlocksImages();
//   } else if (key == '@') {
//     saveBlocksImages(true);
//   }
// }
