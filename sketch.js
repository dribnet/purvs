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
      "offsetx": 0,
      "offsety": 23,

      "pos_x1": 10,
      "pos_y1":170,
      "width_1":100,
      "height_1":20,

      "pos_x2": 90,
      "pos_y2": 90,
      "width_2":20,
      "height_2":100
}

const letterB = {
      "size": 100,
      "offsetx": 0,
      "offsety": 8,
      
      "pos_x1": 10,
      "pos_y1":170,
      "width_1":100,
      "height_1":20,

      "pos_x2": 90,
      "pos_y2": 90,
      "width_2":20,
      "height_2":100,

      "pos_x3": 10,
      "pos_y3": 90,
      "width_3":20,
      "height_3":100
}

const letterC = {
      "size": 68,
      "offsetx": 15,
      "offsety": 0,

      "pos_x1": 10,
      "pos_y1":170,
      "width_1":100,
      "height_1":20,

      "pos_x2": 10,
      "pos_y2": 90,
      "width_2":20,
      "height_2":100,
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

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
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

  let w4 = letterData["width_4"];
  let h4 = letterData["height_4"];
  let x4 = letterData["pos_x4"];
  let y4 = letterData["pos_y4"];

  // draw two circles
  rect(x,y,w,h);
  rect(x2,y2,w2,h2);
  rect(x3,y3,w3,h3);
  rect(x4,y4,w4,h4);
  
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
