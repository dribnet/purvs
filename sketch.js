const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my five variables per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
   arcStart: starting angle (in radians) of the arc
   arcStop: end angle (in radians) of the arc
 *
 */

const letterA = {
  "size": 80,
  "offsetx": 0,
  "offsety": 35,
  "arcStart": 180/3, // PI/3 - third of half circle
  "arcStop": 180/3*2 // 2/3 of half circle
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -50,
  "arcStart": 180/3*2 + 30, // just over 2/3 of half circle
  "arcStop":  150 + 180/3   // in between half circle point and 1/3 half circle
}

const letterC = {
  "size": 70,
  "offsetx": 0,
  "offsety": 0,
  "arcStart": 180/3 - 30,  // just under third of half circle
  "arcStop": 180/3*2 + 210 // just under a complete circle
}

// changed colorFronts to arrays so I could pass it into fill function and add alpha value 
const colorFront1  = [46, 139, 87]; // sea green #2E8B57
const colorFront2  = [173, 255, 87]; // greenyellow #ADFF2F
const colorBack    = "#e3eded";
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
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let start = letterData["arcStart"];
  let stop = letterData["arcStop"];

  // draw two arcs
  fill(colorFront1[0], colorFront1[1], colorFront1[2], 255);
  arc(posx, posy, 150, 150, radians(start), radians(stop), PIE);
  fill(colorFront2[0], colorFront2[1], colorFront2[2], 160);
  arc(pos2x, pos2y, size2, size2, radians(start), radians(stop), PIE);
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
