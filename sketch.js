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
  "offsetx1": 15,
  "offsetx2": 15,
  "offsetx3": 15,
  "offsetx4": 15,
  "offsetx5": 15,
 
  "offsety1": 40,
  "offsety2": 40,
  "offsety3": 40,
  "offsety4": 40,
  "offsety5": 50,
}

const letterB = {
  "offsetx1": 15,
  "offsetx2": 15,
  "offsetx3": 15,
  "offsetx4": 15,
  "offsetx5": 15,
  "offsetx3": 15,
  "offsetx4": 15,
  "offsetx5": 15,

  "offsety1": 40,
  "offsety2": 40,
  "offsety3": 40,
  "offsety4": 40,
  "offsety5": 40,
  "offsety6": 40,
  "offsety7": 40,
  "offsety8": 40,
}

const letterC = {
  "offsetx1": 15,
  "offsetx2": 15,
  "offsetx3": 15,
  "offsetx4": 15,
  "offsetx5": 15,
 
  "offsety1": 40,
  "offsety2": 20,
  "offsety3": 10,
  "offsety4": 20,
  "offsety5": 40,
}

const colorBack    = 0;
const colorStroke  = 255;
const lineSpacing = 10;

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
 
  let shiftx1 = letterData["offsetx1"];
  let shiftx2 = letterData["offsetx2"];
  let shiftx3 = letterData["offsetx3"];
  let shiftx4 = letterData["offsetx4"];
  let shiftx5 = letterData["offsetx5"];
 
  let length1 = letterData["offsety1"];
  let length2 = letterData["offsety2"];
  let length3 = letterData["offsety3"];
  let length4 = letterData["offsety4"]; 
  let length5 = letterData["offsety5"]; 

  line(posx + shiftx1, posy + lineSpacing,   posx + length1 + shiftx1, posy + lineSpacing);
  line(posx + shiftx2, posy + lineSpacing*2, posx + length2 + shiftx2, posy + lineSpacing*2);
  line(posx + shiftx3, posy + lineSpacing*3, posx + length3 + shiftx3, posy + lineSpacing*3);
  line(posx + shiftx4, posy + lineSpacing*4, posx + length4 + shiftx4, posy + lineSpacing*4);
  line(posx + shiftx5, posy + lineSpacing*5, posx + length5 + shiftx5, posy + lineSpacing*5);
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
