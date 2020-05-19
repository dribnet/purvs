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
  "offsetx": -50,
  "offsety": 40,
  "offset2x": 0, 
  "offset2y": -100, 
  "offset3x": 50, 
  "offset3y": 40, 

  "strokeW": 1,
  "opacity": 130,

  "offsetx2": -80,
  "offsety2": 90,
  "offset2x2": 0,
  "offset2y2": -50,
  "offset3x2": 80,
  "offset3y2": 90,
}

const letterB = {
  "offsetx": 40,
  "offsety": -40,
  "offset2x": -20, 
  "offset2y": 80, 
  "offset3x": -20, 
  "offset3y": -80, 

  "strokeW": 2,
  "opacity": 140,

  "offsetx2": 40,
  "offsety2": 40,
  "offset2x2": -20,
  "offset2y2": 80,
  "offset3x2": -20,
  "offset3y2": -70,
}

const letterC = {
  "offsetx": -40,
  "offsety": -50,
  "offset2x": -40,
  "offset2y": 20,
  "offset3x": 40,
  "offset3y": 20,

  "strokeW": 2,
  "opacity": 100,

  "offsetx2": -40,
  "offsety2": -50,
  "offset2x2": -40,
  "offset2y2": -100,
  "offset3x2": 40,
  "offset3y2": -100,
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
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3x = posx + letterData["offset2x"];
  let pos3y = posy + letterData["offset2y"];
  let pos4x = posx + letterData["offset3x"];
  let pos4y = posy + letterData["offset3y"];

  let pos2x2 = posx + letterData["offsetx2"];
  let pos2y2 = posy + letterData["offsety2"];
  let pos3x2 = posx + letterData["offset2x2"];
  let pos3y2 = posy + letterData["offset2y2"];
  let pos4x2 = posx + letterData["offset3x2"];
  let pos4y2 = posy + letterData["offset3y2"];



  let stroke2W = letterData["strokeW"];
  let opacity2 = letterData["opacity"];

  let archHeight = letterData["archH"];
  let archWidth = letterData["archW"];

  strokeWeight(stroke2W);

  fill(red1,green1,blue1);
  triangle(pos2x, pos2y,pos3x, pos3y, pos4x, pos4y);

  fill(red4,green4,blue4,opacity2);
  triangle(pos2x2, pos2y2,pos3x2, pos3y2, pos4x2, pos4y2);

 

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
