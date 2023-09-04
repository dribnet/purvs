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
  "size1": 90,
  "size2": 25,
  "offsetx": 0,
  "offsety": 70,
  "arcOffsetx": 50,
  "arcOffsety": 130,
  "RectAngle": 30,
  "angleStart": 0,
  "angleEnd": 360,
  "opacity": 255
}

const letterB = {
  "size1": 25,
  "size2": 100,
  "offsetx": 50,
  "offsety": 25,
  "arcOffsetx": 75,
  "arcOffsety": 100,
  "RectAngle": 0,
  "angleStart": 0,
  "angleEnd": 360,
  "opacity": 255
}

const letterC = {
  "size1": 90,
  "size2": 150,
  "offsetx": 60,
  "offsety": 75,
  "arcOffsetx": 30,
  "arcOffsety": 75,
  "RectAngle": 0,
  "angleStart": 25,
  "angleEnd": 0,
  "opacity": 0
}

const backgroundColor  = "#e3eded";
const strokeColor      = "#233f11";



function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);
  angleMode(DEGREES); //angle mode to degrees
  // with no animation, redrawing the screen is not necessary
  noLoop();
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
  // determine parameters for second circle
  
  let size1 = letterData["size1"]
  let size2 = letterData["size2"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3x = posx + letterData["arcOffsetx"];
  let pos3y = posy + letterData["arcOffsety"];
  let RectAngle = letterData["RectAngle"];
  let angleStart = letterData["angleStart"];
  let angleEnd = letterData["angleEnd"];
  let opacity = letterData["opacity"];

  // draw a rectangle and rotate it
  noStroke();
  fill(219, 32, 122, opacity);

  push();
  translate(posx,posy);
  rotate(RectAngle);
  rect(0, 0, 15, 150);
  pop();
  
  fill(144, 21, 135)
  ellipse(pos2x, pos2y, size1, size1);

  fill(169, 9, 69);
  arc(pos3x, pos3y, size2, size2, angleStart, angleEnd)
  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
