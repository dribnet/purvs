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
 // "size": 80,
  "offsetx": 0,
  "offsety": 35,
  "rotate2": 10
}

const letterB = {
 // "size": 150,
  "offsetx": 0,
  "offsety": -145
}

const letterC = {
 //"size": 100,
  "offsetx": 30,
  "offsety": 0
}
 
//const colorFront  = "#FFB6C1";
const colorBack   = "#E7FDF7";
const colorStroke = "#FF84BC";


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  noFill();
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  //determine parameters for second circle
  //let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let rot2 = letterData["rotate2"];

  // draw two circles
  triangle(posx, posy, posx+50, posy-80, posx+100, posy);
  //ellipse(posx, posy, 150, 150);
  //ellipse(pos2x, pos2y, size2, size2);
  push();
  angleMode(DEGREES);
  //translate(posx2,posy2);
  rotate(rot2);
  translate(canvasWidth/2, canvasHeight/2);
  
  triangle(pos2x, pos2y, pos2x+50, pos2y-80, pos2x+100, pos2y);
  pop();
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, 10, letterA);
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
