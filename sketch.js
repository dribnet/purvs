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

  * 'offsetTrunkx' : x offset of the tree trunk rectangle
  * 'offsetTrunky' " y offset of the tree trunk rectangle

 *
 */

const letterA = {
  "size": 80,
  "offsetx": -20,
  "offsety": 20,
  "offsetTrunkx":-10,
  "offsetTrunky":-30,


}

const letterB = {
  "size": 100,
  "offsetx": -10,
  "offsety": 22,
  "offsetTrunkx":-10,
  "offsetTrunky":-20,


}

const letterC = {
  "size": 100,
  "offsetx":-30,
  "offsety":21,
  "offsetTrunkx":0,
  "offsetTrunky":0,


}

const colorFront1  = "#d000ff";
const colorFront2  = "#ff6e00";
const colorFront3 =  "#dc44ff";
//const colorTrunk1 =  "#ffae00"; yellow 
const colorTrunk1 =  "#872d00"; //brown

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
  let pos2x = posx + letterData["offsetTrunkx"];
  let pos2y = posy + letterData["offsetTrunky"];
  let size3 = size2-10+ letterData["size"];
  let pos3x = pos2x + letterData ["offsetx"];
  let pos3y = pos2y + letterData ["offsety"];
  let pos4x = pos3x +50 + letterData ["offsetx"];
  let pos4y = pos3y+30 + letterData ["offsety"];
  let pos5x = pos4x+20 + letterData ["offsetx"];
  let pos5y = pos4y -50+ letterData ["offsety"];



  // draw two circles
  noStroke();
  
  fill(colorTrunk1);
  rect(pos2x, pos2y, 20, 400,5);

  //top branch
  
  fill(colorFront1);
  arc(posx, pos3y, size2,  40, 0, PI);

  //bottom branch

  fill(colorFront3);
  arc(pos4x, pos4y, size3, 40,0 , PI);

  //middle branch

  fill(colorFront2);
  arc(pos5x, pos5y, size2, 40, 0 , PI);

  
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
