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

  "pos_x1": 200,
  "pos_y1":270,
  "width_1":90,
  "height_1":20,

  "pos_x2": 270,
  "pos_y2": 190,
  "width_2":20,
  "height_2":100
}

const letterB = {

  "pos_x1": 440,
  "pos_y1":270,
  "width_1":100,
  "height_1":20,

  "pos_x2": 420,
  "pos_y2": 190,
  "width_2":20,
  "height_2":100,

  "pos_x3": 520,
  "pos_y3": 190,
  "width_3":20,
  "height_3":100


}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0,

  "pos_x1": 670,
  "pos_y1":270,
  "width_1":90,
  "height_1":20,

  "pos_x2": 670,
  "pos_y2": 190,
  "width_2":20,
  "height_2":100
}

const colorFront  = "#800000";
const colorBack   = "#000000";
const colorStroke = "#000000";

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
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  let w = letterData["width_1"];
  let h = letterData["height_1"];
  let x = letterData["pos_x1"];
  let y = letterData["pos_y1"];

  let w2 = letterData["width_2"];
  let h2 = letterData["height_2"];
  let x2 = letterData["pos_x2"];
  let y2 = letterData["pos_y2"];

  let w3 = letterData["width_3"];
  let h3 = letterData["height_3"];
  let x3 = letterData["pos_x3"];
  let y3 = letterData["pos_y3"];

  // draw two circles
  //ellipse(posx, posy, 150, 150);
  //ellipse(pos2x, pos2y, size2, size2);
  rect(x,y,w,h);
  rect(x2,y2,w2,h2);
  rect(x3,y3,w3,h3);
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
