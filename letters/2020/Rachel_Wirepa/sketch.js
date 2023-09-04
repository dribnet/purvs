const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my fourteen variables per letter are:
 *
 "arcW" : width of all arcs
 "arcH" : height of all arcs
 "arcX" : x position of arc 1
 "arcY" : y position of arc 1
 "arcS" : starting point of arc 1
 "arcE" : ending point of arc 1
 "arcX2" : x position of arc 2
 "arcY2" : y position of arc 2
 "arcS2" : starting point of arc 2
 "arcE2" : ending point of arc 2
 "arcX3" : x position of arc 3
 "arcY3" : y position of arc 3
 "arcS3" : starting point of arc 3
 "arcE3" : ending point of arc 3
 *
 */

const letterA = {
  //constant arc parameters
  "arcW" : 80,
  "arcH" : 80,

  //arc 1
  "arcX" : 8,
  "arcY" : 40,
  "arcS" : 270,
  "arcE" : 90,

  //arc 2
  "arcX2" : -20,
  "arcY2" : 40,
  "arcS2" : 45,
  "arcE2" : 225,

  //arc 3
  "arcX3" : -20,
  "arcY3" : 40,
  "arcS3" : 135,
  "arcE3" : 315,

}

const letterB = {
  //arc
  "arcW" : 80,
  "arcH" : 80,

  //arc 1
  "arcX" : -2,
  "arcY" : -28,
  "arcS" : 90,
  "arcE" : 270,

  //arc 2
  "arcX2" : 25,
  "arcY2" : 40,
  "arcS2" : 225,
  "arcE2" : 45,

  //arc 3
  "arcX3" : 25,
  "arcY3" : 40,
  "arcS3" : 315,
  "arcE3" : 135,

}

const letterC = {
  //arc
  "arcW" : 80,
  "arcH" : 80,

  //arc 1
  "arcX" : 10,
  "arcY" : 40,
  "arcS" : 135,
  "arcE" : 315,

  //arc 2
  "arcX2" : 10,
  "arcY2" : 40,
  "arcS2" : 45,
  "arcE2" : 225,

  //arc 3
  "arcX3" : 10,
  "arcY3" : 40,
  "arcS3" : 135,
  "arcE3" : 315,

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

  //arc 3
  let arcX3 = posx + letterData ["arcX3"];
  let arcY3 = posy + letterData ["arcY3"];
  let arcS3 = letterData ["arcS3"];
  let arcE3 = letterData ["arcE3"];


  let arcWid = letterData ["arcW"];
  let arcHei = letterData ["arcH"];

  //arc 1
  fill(colorFront1);
  arc(arcX, arcY, arcWid, arcHei, arcS, arcE);

  //arc 2
  fill(colorFront2);
  arc(arcX2, arcY2, arcWid, arcHei, arcS2, arcE2);

  //arc 3
  fill(colorFront3);
  arc(arcX3, arcY3, arcWid, arcHei, arcS3, arcE3);

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
