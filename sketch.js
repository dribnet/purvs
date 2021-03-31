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
  "size": 5,
  "offsetx": 0,
  "offsety": 100,
  "ArcStart":120,
  "ArcEnd":420,
  "TrianglePoint":0

}

const letterB = {
  "size": 8,
  "offsetx": 50,
  "offsety": -50,
  "ArcStart":0,
  "ArcEnd":270,
  "TrianglePoint":40
}

const letterC = {
  "size": 10,
  "offsetx": -50,
  "offsety": -50,
  "ArcStart":40,
  "ArcEnd":320,
  "TrianglePoint":-50
}

const backgroundColor  = "#000000";
const strokeColor      = "#233f11";

const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  // stroke(strokeColor);
  // strokeWeight(4);
  noStroke();

  // with no animation, redrawing the screen is not necessary
  noLoop();
  angleMode(DEGREES)
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // // determine parameters for second circle
  let size = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  // let pos2y = posy + letterData["offsety"];

  // let startAngle = letterData["ArcStart"];
  // let stopAngle = letterData["ArcEnd"];
  // let sideTriangle = letterData["TrianglePoint"];
  // // draw two circles
  // fill(darkBlue);
  // triangle(pos2x-25-size2, pos2y+sideTriangle, pos2x, pos2y-50,pos2x+25+size2,pos2y+sideTriangle);
  // fill(lightBlue);
  // arc(posx, posy, 200, 200,startAngle,stopAngle

  stroke(255);
  strokeWeight(1);
  strokeCap(PROJECT);
  
  line(posx,posy-150,posx-50,posy+150);
  line(posx-50,posy-150,pos2x,posy+150);
  line(posx-50,posy-150,posx-50,posy+150);
  
for (let i = 0; i < 9; i++) {
  line(posx,posy-150,pos2x-50+(i*size),posy+150);
  line(posx-50,posy-150,pos2x+(i*size),posy+150);
  line(posx-50,posy-150,pos2x-50+(i*size),posy+150);
}


}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
