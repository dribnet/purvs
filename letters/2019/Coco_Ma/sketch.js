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
  "offset1x": 0,
  "offset1y": 40,
  "offset2x": 30,
  "offset2y": -20,
  "offset3x": 38,
  "offset3y": 0,

  "off1x": 30,
  "off1y": -20,
  "off2x": 60,
  "off2y": 40
}

const letterB = {
  "offset1x": -40,
  "offset1y": -30,
  "offset2x": 0,
  "offset2y": 40,
  "offset3x": -40,
  "offset3y": 40,

  "off1x": -40,
  "off1y": -30,
  "off2x": 0,
  "off2y": -30,


  "off3x": 0,
  "off3y": -30,
  "off4x": -40,
  "off4y": 0
}

const letterC = {
  "offset1x": -40,
  "offset1y": 20,
  "offset2x": 0,
  "offset2y": 40,
  "offset3x": -40,
  "offset3y": 40,

  "off1x": -40,
  "off1y": -30,
  "off2x": 0,
  "off2y": -30,

  "off3x": -40,
  "off3y": -30,
  "off4x": -40,
  "off4y": 40
}


const colorFront1  = "#99bfe6";
const colorFront2  = "#59ccff";
const colorBack    = "#8B658B";
const colorStroke  = "#EEB4B4";

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
  let post1x = posx + letterData["offset1x"];
  let post1y = posy + letterData["offset1y"];

  let post2x = posx + letterData["offset2x"];
  let post2y = posy + letterData["offset2y"];

  let post3x = posx + letterData["offset3x"];
  let post3y = posy + letterData["offset3y"];


  let posl1x = posx + letterData["off1x"];
  let posl1y = posy + letterData["off1y"];

  let posl2x = posx + letterData["off2x"];
  let posl2y = posy + letterData["off2y"];

  let posl3x = posx + letterData["off3x"];
  let posl3y = posy + letterData["off3y"];

  let posl4x = posx + letterData["off4x"];
  let posl4y = posy + letterData["off4y"];

  let posl5x = posx + letterData["off5x"];
  let posl5y = posy + letterData["off5y"];

  let posl6x = posx + letterData["off6x"];
  let posl6y = posy + letterData["off6y"];
  // draw two circles
  fill(colorFront1);
  triangle(post1x, post1y, post2x, post2y, post3x ,post3y);
  fill(colorFront2);
  line(posl1x, posl1y, posl2x, posl2y);
  line(posl3x, posl3y, posl4x, posl4y);
  line(posl5x, posl5y, posl6x, posl6y);
 
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




