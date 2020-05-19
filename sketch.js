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
  "cx1": -30,
  "cy1": 0,
  "cx2": -40,
  "cy2": 60,	

  "x1": -40,
  "y1": -70,
  "x2": 40,
  "y2": 60
}

const letterB = {
  "cx1": 10,
  "cy1": 30,
  "cx2": 10,
  "cy2": -40,	
  
  "x1": -40,
  "y1": -70,
  "x2": -40,
  "y2": 61
}

const letterC = {
  "cx1": 5,
  "cy1": -70,
  "cx2": 5,
  "cy2": 60,	
  
  "x1": -40,
  "y1": -70,
  "x2": -40,
  "y2": 60
}

const colorFront1  = "#B10D4C";
const colorFront2  = "#59ccff";
const colorBack    = "#EA526F";
const colorStroke  = "#ffffff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(20);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let cPosx1 = posx + letterData["cx1"];
  let cPosy1 = posy + letterData["cy1"];
  let cPosx2 = posx + letterData["cx2"];
  let cPosy2 = posy + letterData["cy2"];

  let pos1x = posx + letterData["x1"];
  let pos1y = posy + letterData["y1"];
  let pos2x = posx + letterData["x2"];
  let pos2y = posy + letterData["y2"];

  // draw two circles
  //fill(colorFront1);
  //ellipse(posx, posy, 150, 150);
  //fill(colorFront2);
  //ellipse(pos2x, pos2y, size2, size2);

  fill(colorFront1)
  strokeWeight(0)
  rect(posx - 50, posy - 80, 100, 150, 10 )

  strokeWeight(20)
  line(pos1x, pos1y, pos2x, pos2y)
  ellipse(cPosx1, cPosy1, 0, 0)
  ellipse(cPosx2, cPosy2, 0, 0)


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
