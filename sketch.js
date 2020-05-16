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
//   "size": 80,
//   "offsetx": 0,
//   "offsety": 35
// }

  const letterA = {
    "offsetx": -25,
    "offsety": 50,
    "triangleX1": -40,
    "triangleY1": 50,
    "triangleX2": 0,
    "triangleY2": -80,
    "triangleX3": 40,
    "triangleY3": 50,
  }

// const letterB = {
//   "size": 150,
//   "offsetx": 0,
//   "offsety": -145
// // }

// const letterB = {
//   "size": 150,
//   "offsetx": 0,
//   "offsety": -145
// }

// const letterC = {
//   "size": 100,
//   "offsetx": 30,
//   "offsety": 0
// }

const colorFront1  = "#DB7F8E";
const colorFront2  = "#FFDBDA";
const colorBack    = "#604D53";
const colorStroke  = "#ffffff";

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

// function drawLetter(posx, posy, letterData) {
//   // determine parameters for second circle
//   let size2 = letterData["size"];
//   let pos2x = posx + letterData["offsetx"];
//   let pos2y = posy + letterData["offsety"];

//   // draw two circles
//   fill(colorFront1);
//   ellipse(posx, posy, 150, 150);
//   fill(colorFront2);
//   ellipse(pos2x, pos2y, size2, size2);
// }

function drawLetter1(posx, posy, letterData) {
  // determine parameters for second circle
  //let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let trix1 = posx + letterData["triangleX1"];
  let triy1 = posy + letterData["triangleY1"];
  let trix2 = posx + letterData["triangleX2"];
  let triy2 = posy + letterData["triangleY2"];
  let trix3 = posx + letterData["triangleX3"];
  let triy3 = posy + letterData["triangleY3"];


  // draw two circles
  fill(colorFront1);
  ellipse(posx, posy, 150, 150);
  // fill(colorFront2);
  // ellipse(pos2x, pos2y, size2, size2);
  fill(colorFront2);
  //noStroke();
  triangle(trix1, triy1, trix2, triy2, trix3, triy3);

}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter1(center_x - 250, center_y, letterA);
  drawLetter1(center_x      , center_y, letterB);
  drawLetter1(center_x + 250, center_y, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
