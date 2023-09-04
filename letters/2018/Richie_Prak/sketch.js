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
 //

const letterA = {
 
  "x1": 150, //110
  "y1": 150, //220
  
  "x2": 180,
  "y2": 150,
  
  "x3": 180,
  "y3": 270,
  
}

const letterB = {
  //"size": 150,
  //"offsetx": 0,
  //"offsety": -120
  "x1": 0,
  "y1": 0,
  
  "x2": 0,
  "y2": 0,
  
  "x3": 0,
  "y3": 0,
}  
const letterC = {
  "x1": 0,
  "y1": 0,
  
  "x2": 0,
  "y2": 0,
  
  "x3": 0,
  "y3": 0,
}

const colorFront  = "#95dadb"; //#199cff
const colorBack   = "#e3eded";
const colorStroke = "#0"; //233f11

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
  //let size3 
  //let pos4x = posx + letterData["offsetx"];
  //let pos4y = posy + letterData["offsety"];

  let pos1x = posx + letterData["x1"];
  let pos1y = posy + letterData["y1"];
  let pos2x = posx + letterData["x2"];
  let pos2y = posy + letterData["y2"];
  let pos3x = posx + letterData["x3"];
  let pos3y = posy + letterData["y3"];
  //let pos4x = posx + letterData["x4"];
 // let pos4y = posy + letterData["y4"];
  //let pos5x = posx + letterData["x5"];
  //let pos5y = posy + letterData["y5"];
  //let pos6x = posx + letterData["x6"];
  //let pos6y = posy + letterData["y6"];

  strokeWeight(3);
  stroke(255);
  fill(116, 160, 242);
  beginShape();
  vertex(pos1x, pos1y);
  vertex(pos2x, pos2y);
  vertex(pos3x, pos3y);
  endShape();



}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x -500, center_y, +20, letterA);
  drawLetter(center_x +20, center_y, 10, letterB);
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
