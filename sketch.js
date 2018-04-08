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
  //"size": 80,
  //"offsetx": 0,
  //"offsety": 35

    "L1x1": 200,
    "L1Y1": 400,
    "L1x2": 400,
    "L1y2": 100,
    "L2x1": 400,
    "L2Y1": 100,
    "L1x2": 600,
    "L2y2": 400,
    "L3x1": 300,
    "L3y1": 200,
    "L3x2": 500,
    "L3y2": 200,
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145


}

const letterC = {
  "size": 100,
  "offsetx": 30,
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

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  //let size2 = letterData["size"];
 // let pos2x = posx + letterData["offsetx"];
 // let pos2y = posy + letterData["offsety"];
    let L1x1 = letterData["L1x1"];
    let L1Y1 = letterData["L1Y1"];
    let L1x2 = letterData["L1x2"];
    let L1y2 = letterData["L1y2"];
    let L2x1 = letterData["L2x1"];
    let L2Y1 = letterData["L2Y1"];
    let L2x2 = letterData["L1x2"];
    let L2y2 = letterData["L2y2"];
    let L3x1 = letterData["L3x1"];
    let L3y1 = letterData["L3y1"];
    let L3x2 = letterData["L3x2"];
    let L3y2 = letterData["L3y2"];


  // draw two circles
  //ellipse(posx, posy, 150, 150);
  //ellipse(pos2x, pos2y, size2, size2);


strokeWeight(4);
stroke(0)
  line(L1x1,L1y1,L1x2, L1y2);
  line(L2x1,L2y1,L2x2, L2y2);
  line(L3x1,L3y1,L3x2, L3y2);


}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(500, 500, 10, letterA);
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
