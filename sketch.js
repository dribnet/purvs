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
  //rectangle
  "rectX" : 0,
  "rectY" : 0,
  "rectW" : 33,
  "rectH" : 82,
  //arc
  "arcW" : 80,
  "arcH" : 80,

  //arc 1
  "arcX" : -20,
  "arcY" : 40,
  "arcS" : 45,
  "arcE" : 225,

  //arc 2
  "arcX2" : -20,
  "arcY2" : 40,
  "arcS2" : 135,
  "arcE2" : 315,

}

const letterB = {
  //rectangle
  "rectX" : -30,
  "rectY" : -30,
  "rectW" : 35,
  "rectH" : 112,
  //arc
  "arcW" : 80,
  "arcH" : 80,

  //arc 1
  "arcX" : 25,
  "arcY" : 40,
  "arcS" : 225,
  "arcE" : 45,

  //arc 2
  "arcX2" : 25,
  "arcY2" : 40,
  "arcS2" : 315,
  "arcE2" : 135,

}

const letterC = {
  //rectangle
  "rectX" : 10,
  "rectY" : 12,
  "rectW" : 28,
  "rectH" : 55,
  //arc
  "arcW" : 80,
  "arcH" : 80,

  //arc 1
  "arcX" : 10,
  "arcY" : 40,
  "arcS" : 45,
  "arcE" : 225,

  //arc 2
  "arcX2" : 10,
  "arcY2" : 40,
  "arcS2" : 135,
  "arcE2" : 315,

}

const colorFront1  = "#6dc9c9"; //tiffany blue
const colorFront2  = "#ffb2b2"; //coral pink
const colorFront3  = "#ffd0b5"; //salmon pink
const colorBack    = "#fffacc"; //pastel yellow

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  angleMode(DEGREES);
  noStroke();

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  //letter parameters
  //rectangle
  let rectangleX = posx + letterData ["rectX"];
  let rectangleY = posy + letterData ["rectY"];
  let rectangleWid = letterData ["rectW"];
  let rectangleHei = letterData ["rectH"];

  //arc 1
  let arcX = posx + letterData ["arcX"];
  let arcY = posy + letterData ["arcY"];
  let arcS = letterData ["arcS"];
  let arcE = letterData ["arcE"];

  //arc 2
  let arcX2 = posx + letterData ["arcX2"];
  let arcY2 = posy + letterData ["arcY2"];
  let arcS2 = letterData ["arcS2"];
  let arcE2 = letterData ["arcE2"];

  //Shared arc parameters
  let arcWid = letterData ["arcW"];
  let arcHei = letterData ["arcH"];

  //rectangle
  fill(colorFront1);
  rect(rectangleX, rectangleY, rectangleWid, rectangleHei)

  //arc 1
  fill(colorFront2);
  arc(arcX, arcY, arcWid, arcHei, arcS, arcE);

  //arc 2
  fill(colorFront3);
  arc(arcX2, arcY2, arcWid, arcHei, arcS2, arcE2);

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
