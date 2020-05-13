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
  "offsetx": 17,
  "offsety": 0,
  "rectlength": 28,
  "rectheight": 90,
  "nofill_length": 20,
  "nofill_height": 82,
  "rect_twoposx": 55,
  "rect_twoposy": 4,
  "triangleleftx": 188,
  "trianglelefty": 270,
  "triangletopx": 228,
  "triangletopy": 198,
  "trianglerightx": 266,
  "trianglerighty": 270,
}

const letterB = {
  "offsetx": 32,
  "offsety": 52,
  "rectlength": 70,
  "rectheight": 37,
  "nofill_length": 62,
  "nofill_height": 36,
  "rect_twoposx": 27,
  "rect_twoposy": 2,
  "triangleleftx": 465,
  "trianglelefty": 270,
  "triangletopx": 465,
  "triangletopy": 198,
  "trianglerightx": 525,
  "trianglerighty": 235,

}

const letterC = {
  "offsetx": 56,
  "offsety": 1,
  "rectlength": 60,
  "rectheight": 90,
  "nofill_length": 64,
  "nofill_height": 50,
  "rect_twoposx": 58,
  "rect_twoposy": 22,
  "triangleleftx": 803,
  "trianglelefty": 275,
  "triangletopx": 803,
  "triangletopy": 198,
  "trianglerightx": 742,
  "trianglerighty": 235,
}

const colorFront1  = "#75cc0a50"; //green
const colorFront2  = "#ccd9deFA"; //white
const colorBack    = "#242424"; //bg colour (dark gray)
const colorStroke  = "#0f0f0f80"; //stroke colour

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(8);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  let rectwidth = letterData["rectlength"];
  let recthigh = letterData["rectheight"];
  let rectwidth_two = letterData["nofill_length"];
  let recthigh_two = letterData["nofill_height"];
  let rect_twox = posx + letterData["rect_twoposx"];
  let rect_twoy = posy + letterData["rect_twoposy"];
  let tri_onex = letterData["triangleleftx"];
  let tri_twox = letterData["triangletopx"];
  let tri_threex = letterData["trianglerightx"];
  let tri_oney = letterData["trianglelefty"];
  let tri_twoy = letterData["triangletopy"];
  let tri_threey = letterData["trianglerighty"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];


  //draws the shapes for my letters
  noStroke();
  fill(colorFront1);
  rect(pos2x, pos2y, rectwidth, recthigh);
  stroke(colorFront2);
  strokeWeight(8);
  noFill();
  rect(rect_twox, rect_twoy, rectwidth_two, recthigh_two);
  stroke(colorStroke);
  fill(colorBack);
  triangle(tri_onex, tri_oney, tri_twox, tri_twoy, tri_threex, tri_threey);
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2 - 50;  
  let center_y = canvasHeight / 2 - 60;

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
