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
  "sectionx": -70,
  "sectiony": 40,
  "section2x": 0, 
  "section2y": -100, 
  "section3x": 0, 
  "section3y": 40, 
  "strokeW": 0,
  "sectionx2": -45,
  "sectiony2": 40,
  "section2x2": 0, 
  "section2y2": -50, 
  "section3x2": 50, 
  "section3y2": 40,
  

}

const letterB = {
  "sectionx2": -70,
  "sectiony2": -100,
  "section2x2": -70, 
  "section2y2": 40, 
  "section3x2": 20, 
  "section3y2": 40,
  "sectionx": -40,
  "sectiony": 40,
  "section2x": 60, 
  "section2y": 40, 
  "section3x": 60, 
  "section3y": -30, 
  "strokeW": 0,


}

const letterC = {
  "sectionx": -70,
  "sectiony": 40,
  "section2x": -70, 
  "section2y": -100, 
  "section3x": 50, 
  "section3y": 40, 
  "strokeW": 0,
  "sectionx2": -70,
  "sectiony2": 40,
  "section2x2": -70, 
  "section2y2": -100, 
  "section3x2": 50, 
  "section3y2": -100,

}

const colorFront1  = "#EFBDEB";
const colorFront2  = "#B68CB8";
const colorFront3  = "#6461A0";
const colorBackground    = "#000000";
const colorStroke  = "#000000";

//Blue
const red1 = 0
const green1 = 234
const blue1 = 255

//Green
const red2 = 0
const green2 = 255
const blue2 = 140


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let pos2x = posx + letterData["sectionx"];
  let pos2y = posy + letterData["sectiony"];
  let pos3x = posx + letterData["section2x"];
  let pos3y = posy + letterData["section2y"];
  let pos4x = posx + letterData["section3x"];
  let pos4y = posy + letterData["section3y"];

  let pos2x2 = posx + letterData["sectionx2"];
  let pos2y2 = posy + letterData["sectiony2"];
  let pos3x2 = posx + letterData["section2x2"];
  let pos3y2 = posy + letterData["section2y2"];
  let pos4x2 = posx + letterData["section3x2"];
  let pos4y2 = posy + letterData["section3y2"];


  fill(red1,green1,blue1);
  triangle(pos2x, pos2y,pos3x, pos3y, pos4x, pos4y);

  fill(red2,green2,blue2);
  triangle(pos2x2,pos2y2,pos3x2, pos3y2, pos4x2, pos4y2);

 

}

function draw () {
  // clear screen
  background(colorBackground);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x, center_y, letterB);
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