
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
  "size": 80,
  "offsetx": 200,
  "offsety": 480

  //"rotate": 
}

const letterB = {
  "size": 80,
  "offsetx2": 200,
  "offsety2": 480,
  "rotate2": 500,
  "offsetx4": 240,
  "offsety3": 480,
  "offsetx5": 160,
}

const letterC = {
  "size": 100,
  "offsetx6": -50,
  "offsety6":  800
}

const colorFront  = "#e2d3ed";
const colorBack   = "#e3eded";
const colorStroke = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');


  angleMode(DEGREES);

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
  let rotate2 = letterData["rotate"];
  let pos2x2 = posx + letterData["offsetx2"];
  let pos2y2 = posy + letterData["offsety2"];
  let pos2x4 = posx + letterData["offsetx4"];
  let pos2x5 = posx + letterData["offsetx5"];
  let pos2y3 = posy + letterData["offsety3"];
  let pos2x6 = posx + letterData["offsetx6"];
  let pos2y6 = posy + letterData["offsety6"];


  // draw two circles
  //ellipse(posx, posy, 150, 150);
  //ellipse(pos2x, pos2y, size2, size2);

  push();

  rotate(0);
  translate(-240,-400);
  //rect or whatever  r

  noFill();
  arc(pos2x, pos2y, 150, -450, 180, PI, PI + QUARTER_PI);
  arc(pos2x, pos2y, 100, -80, 180, PI, PI + QUARTER_PI);

  pop();

  push();

  noFill();
  rotate(-90);
  translate(-895,-200);
  arc(pos2x2, pos2y2, 220, -250, 180, PI, PI + QUARTER_PI);
  arc(pos2x4, pos2y3, 80, -100, 180, PI, PI + QUARTER_PI);
  arc(pos2x5, pos2y3, 80, -100, 180, PI, PI + QUARTER_PI);

  pop();

  push();
  
  noFill();
  rotate(-90);
  translate(-895,-200);
  arc(pos2x6, pos2y6, 220, -250, 180, PI, PI + QUARTER_PI);
  pop();


  //arc(pos2x, pos2y, 140, 300, PI + QUARTER_PI, TWO_PI);

  //arc(pos2x + 60, pos2y+30, 300, 500, PI, PI + QUARTER_PI);

  //arc(pos2x, pos2y, 50, 50, 0, HALF_PI);

  //arc(pos2x - 13.5, pos2y - 61, 100, 200, HALF_PI, PI);


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
