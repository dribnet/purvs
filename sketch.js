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
  "strokeW": 1,
  "opacity": 255,
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145,
  "archH": -60,
  "archW": 20,
  "strokeW": 2,
  "opacity": 140,
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0,
  "archH": 80,
  "archW": 70,
  "strokeW": 1,
  "opacity": 40,
}

const letterD = {
  "size": 50,
  "offsetx": 30,
  "offsety": -30,
  "opacity": 240

}

const colorFront1  = "#EFBDEB";
const colorFront2  = "#B68CB8";
const colorFront3  = "#6461A0";
const colorBack    = "#FCECC9";
const colorStroke  = "#114B5F";

//Dark Purple
const red1 = 239
const green1 = 189
const blue1 = 235

//Middle Purple
const red2 = 182
const green2 = 140
const blue2 = 184

//light pink
const red3 = 100
const green3 = 97
const blue3 = 160

//Dark Turquisoe 

const red4 = 17
const green4 = 75
const blue4 = 95


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
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let stroke2W = letterData["strokeW"];
  let opacity2 = letterData["opacity"];

  let archHeight = letterData["archH"];
  let archWidth = letterData["archW"];

  //nofill()

  // draw two circles
  strokeWeight(stroke2W);

  fill(red1,green1,blue1);
  triangle(posx+20, posy+20,posx +60, posy+100, posx-30, posy+50);
  fill(red2,green2,blue2);
  triangle(posx+10, posy+10,posx +50, posy+90, posx-40, posy+40);
  fill(red3,green3,blue3);
  triangle(posx, posy,posx +40, posy+80, posx-50, posy+30);
  fill(red4,green4,blue4,opacity2);
  triangle(posx-10, posy-10,posx +30, posy+70, posx-60, posy+20);

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
