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
  "offsetx": 0,
  "offsety": 35,
  "archH": 30,
  "archW": 90,
  "strokeW": 4,
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145,
  "archH": -60,
  "archW": 20,
  "strokeW": 4,
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0,
  "archH": 80,
  "archW": 70,
  "strokeW": 0,
}

const letterD = {
  "size": 50,
  "offsetx": 30,
  "offsety": -30,

}

const colorFront1  = "#6461A0";
const colorFront2  = "#B68CB8";
const colorFront3 = "#EFBDEB";
const colorBack    = "#FCECC9";
const colorStroke  = "#314CB6";
const strokeWeight = "strokeW";

const red1 = 54
const green1 = 82
const blue1 = 36

const red2 = 100
const green2 = 200
const blue2 = 0



function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(strokeW);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  let length1x = posx + letterData["offsetx"];
  let length1y = posy + letterData["offsety"];

  let archHeight = letterData["archH"];
  let archWidth = letterData["archW"];

  //nofill()

  // draw two circles

  strokeWeight(strokeW);
  fill(colorFront3);
  triangle(posx+20, posy+20,posx +60, posy+100, posx-30, posy+50);
  fill(colorFront2);
  triangle(posx+10, posy+10,posx +50, posy+90, posx-40, posy+40);
  fill(colorFront1);
  triangle(posx, posy,posx +40, posy+80, posx-50, posy+30);

  //fill(red2,green2, blue2, 30);
  //arc (x position, y position, width, height, start, stop, type of arch)
  //arc(posx, posy, archWidth, archHeight, 0, 180, PIE);
}

function draw () {
  // clear screen
  background(colorBack);

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
