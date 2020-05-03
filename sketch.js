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
  "offsetx": -25,
  "offsety": 50,
  "triangleX1": -35,
  "triangleY1": 35,
  "triangleX2": 25,
  "triangleY2": 5,
  "triangleX3": 30,
  "triangleY3": 35,
  "arcSizeX": 150,
  "arcSizeY": 200,
  "arcStart": 300,
  "arcEnd": 140
}

const letterB = {
  "offsetx": 0,
  "offsety": 0,
  "triangleX1": -90,
  "triangleY1": -80,
  "triangleX2": -60,
  "triangleY2": 80,
  "triangleX3": -20,
  "triangleY3": -80,
  "arcSizeX": 150,
  "arcSizeY": 150,
  "arcStart": 300,
  "arcEnd": 180 
}

const letterC = {
  "offsetx": 20,
  "offsety": 0,
  "triangleX1": -50,
  "triangleY1": 0,
  "triangleX2": 40,
  "triangleY2": 50,
  "triangleX3": 40,
  "triangleY3": -50,
  "arcSizeX": 180,
  "arcSizeY": 150,
  "arcStart": 70,
  "arcEnd": 270 
}

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

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
  // determine parameters for second circle
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let trix1 = posx + letterData["triangleX1"];
  let trix2 = posx + letterData["triangleX2"];
  let trix3 = posx + letterData["triangleX3"];
  let triy1 = posy + letterData["triangleY1"];
  let triy2 = posy + letterData["triangleY2"];
  let triy3 = posy + letterData["triangleY3"];
  let arcs = posx + letterData["arcStart"];
  let arce = posx + letterData["arcEnd"];
  let arcsx = letterData["arcSizeX"];
  let arcsy = letterData["arcSizeY"];

  // draw two circles
  fill(colorFront1);
  arc(pos2x, pos2y, arcsx, arcsy, arcs, arce);
  fill(colorFront2);
  triangle(trix1, triy1, trix2 , triy2, trix3, triy3);
  
}

function draw () {
  // clear screen
  background(colorBack);
  angleMode(DEGREES);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x , center_y, letterB);
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
