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


 /**
  * ordering of lines: top, topright, botright,bottom,botleft,topleft,mid
  * 1 == draw as line
  * 1.5 == draw as half line
  * 2 == draw as arc
  */

const one_unit = 30;
const letterA = {
  p1offsetX:0,
  p1offsetY:0,
  p2offsetX:0,
  p2offsetY:one_unit,
  p3offsetX:one_unit,
  p3offsetY:one_unit,
  p4offsetX:one_unit*2,
  p4offsetY:one_unit,
  p5offsetX:0,
  p5offsetY:one_unit*2,
  p6offsetX:one_unit,
  p6offsetY:-one_unit,
  p7offsetX:one_unit*2,
  p7offsetY:0,
  p8offsetX:one_unit*2,
  p8offsetY:one_unit*2,
}

const letterB = {

  p1offsetX:0,
  p1offsetY:-one_unit,
  p2offsetX:0,
  p2offsetY:0,
  p3offsetX:0,
  p3offsetY:one_unit,
  p4offsetX:0,
  p4offsetY:one_unit*2,
  p5offsetX:one_unit,
  p5offsetY:one_unit,
  p6offsetX:one_unit,
  p6offsetY:one_unit*2

}

const letterC = {

  p1offsetX:0,
  p1offsetY:-one_unit,
  p2offsetX:0,
  p2offsetY:0,
  p3offsetX:0,
  p3offsetY:one_unit,
  p4offsetX:0,
  p4offsetY:one_unit*2,
  p5offsetX:one_unit,
  p5offsetY:one_unit*2,
  p6offsetX:one_unit*2,
  p6offsetY:one_unit*2,
  p7offsetX:one_unit,
  p7offsetY:-one_unit,
  p8offsetX:one_unit*2,
  p8offsetY:-one_unit,

}
const colorFront1 = "#199cff";
const colorFront2 = "#59ccff";
const colorBack = "#e3eded";
const colorStroke = "#233f11";

function setup() {
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
  angleMode(DEGREES); 
  stroke("black");
  strokeWeight(1);
  fill(233,100,34)
  let w = 100;
  let h = 200;
  let startX = posx;
  let startY = posy;
  positionRect(posx,posy,letterData.p1offsetX,letterData.p1offsetY)
  positionRect(posx,posy,letterData.p2offsetX,letterData.p2offsetY)
  positionRect(posx,posy,letterData.p3offsetX,letterData.p3offsetY)
  positionRect(posx,posy,letterData.p4offsetX,letterData.p4offsetY)
  positionRect(posx,posy,letterData.p5offsetX,letterData.p5offsetY)
  positionRect(posx,posy,letterData.p6offsetX,letterData.p6offsetY)
  positionRect(posx,posy,letterData.p7offsetX,letterData.p7offsetY)
  positionRect(posx,posy,letterData.p8offsetX,letterData.p8offsetY)

}

function positionRect(startingX,startingY,offsetX,offsetY) {
  push();
  translate(offsetX,offsetY)
  rect(startingX,startingY,30,30);
  strokeWeight(0.2);
  fill(200,70,20)
  ellipse(startingX+15,startingY+15,10,10);
  pop();
}


function draw() {
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
