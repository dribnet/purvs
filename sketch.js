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

  "offsetx": 0,
  "offsety": 0,
  "translateX": 356,
  "translateY": -105,
  "rotate" : 45
}

const letterB = {
  "offsetx": 0,
  "offsety": -145
}

const letterC = {
  "offsetx": 0,
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
  angleMode(DEGREES);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData,scale) {
  // determine parameters for second circle

  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  let transX = letterData["translateX"];
  let transY = letterData["translateY"];
  let rotate = letterData["rotate"];

  // draw two circles
  translate(transX,transY);
  line(posx, posy, posx, posy + 100);
  line(posx, posy+100, posx+100, posy+100);


}

function draw () {

  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  push()
  translate(center_x, center_y);
  rotate(45);
  translate(-center_x, -center_y);
  line(center_x, 400, center_x, 100); //Base line
  pop()


  drawLetter(center_x - 250, center_y, letterA, 1);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
