const canvasWidth = 960;//do not change
const canvasHeight = 500;//do not change

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
  "triX1": 28,
  "triY1": 150,
  "triX2": 50,
  "triY2": 82,
  "triX3": 70,
  "triY3": 150

}

const letterB = {
  "triX1": 106,
  "triY1": 94,
  "triX2": 48,
  "triY2": 52,
  "triX3": 26,
  "triY3": 102

 
}

const letterC = {
  "triX1": 30,
  "triY1": 130,
  "triX2": 54,
  "triY2": 62,
  "triX3": 88,
  "triY3": 130
}
 
const darkRed  = "#9C2B21";// dark red
const lightPink = "#F8B6AA";// light pink
const colorBack    = "#f8ded2";// background colour
const colorStroke  = "#F8DED2";// stroke colour

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(3);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let triangleX1 = posx + letterData["triX1"];
  let triangleY1 = posy + letterData["triY1"];
  let triangleX2 = posx + letterData["triX2"];
  let triangleY2 = posy +letterData["triY2"];
  let triangleX3 = posx + letterData["triX3"];
  let triangleY3 = posy + letterData["triY3"];






  // draw two circles
  fill(darkRed);
  triangle(posx+0, posy+150, posx+50, posy+50, posx+100, posy+150);
  
  fill(lightPink);
  triangle(triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3);
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
