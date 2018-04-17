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
  "offset1y": -103,
  "offset2x": 0,
  "offset2y": 30,
  "rotate1": 180,
  "rotate2": 180,
  "color1": "#199cff",
  "color2": "#c6cece"
}

const letterB = {
  "offset1x": -105,
  "offset1y": 0,
  "offset2x": 70,
  "offset2y": 0,
  "rotate1": 90,
  "rotate2": 90,
  "color1": "#c6cece",
  "color2": "#c6cece"
}

const letterC = {
  "offset1x": 70,
  "offset1y": 0,
  "offset2x": 70,
  "offset2y": 0,
  "rotate1": 90,
  "rotate2": 90,
  "color1": "#c6cece",
  "color2": "#c6cece"
}

const colorFront  = "#199cff";
const colorBack   = "#e3eded";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  strokeWeight(4);

  angleMode(DEGREES);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawTri (x, y, angle) {
  push();
  
  
  let height = 125;
  translate(x, y);
  rotate(angle);
  triangle(0, 0+height/2, 0+height/2, 0-height/2, 0-height/2, 0-height/2);
  
  pop();

  //15 high ten wide, half height = middle 
  //from half height, go half height up to find top, half height down to find mottom line, left and right 5 to find other points

}

function drawLetter(posx, posy, rotate, letterData) {
  // determine parameters for second circle
  
  let pos1x = posx + letterData["offset1x"];
  let pos1y = posy + letterData["offset1y"];
  let pos2y = posy + letterData["offset2y"];
  let pos2x = posx + letterData["offset2x"];
  let ro1 = letterData["rotate1"];
  let ro2 = letterData["rotate2"];
  let coltri1 = letterData["color1"];
  let coltri2 = letterData["color2"];




  // draw two circles
 
  noStroke();
  fill(colorFront);
  ellipse(posx, posy, 150, 150);
  fill(coltri1)
  drawTri(pos1x, pos1y, ro1);
  fill(coltri2);
  drawTri(pos2x, pos2y, ro2);



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
