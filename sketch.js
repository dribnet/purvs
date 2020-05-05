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
  "size": -1,
  "offsetx": 0,
  "offsety": 0

}

const letterB = {
  "size": 1,
  "offsetx": -100,
  "offsety": 2
}

const letterC = {
  "size": -1,
  "offsetx": -100,
  "offsety": 1
}

const colorFront1  = "#454342";
const colorFront2  = "#36d6ac";
const colorBack    = "#f2edeb";
const colorStroke  = "#233f11";

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
  let size2 = letterData["size"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];

  angleMode(DEGREES)
  noStroke()
  let yamm = 100 * -size2 * tan(30)

  fill(colorFront1);

beginShape()
vertex(posx-50,posy)
vertex(posx + 50, posy - yamm)
vertex(posx + 50, posy + yamm)
vertex(posx - 50, posy + 2 * yamm)
endShape(CLOSE)

  fill(colorFront2);

  beginShape()
vertex(posx + 50 + pos2x, posy + yamm + pos2y * yamm)
vertex(posx + 100 + pos2x, (posy + yamm + pos2y * yamm) + .5*yamm)
vertex(posx + 100 + pos2x, (posy + yamm + pos2y * yamm) - .5*yamm)
vertex(posx + 50 + pos2x, (posy + yamm + pos2y * yamm) - yamm)
endShape(CLOSE)

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