const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my ten variable per letter are:
 *
   vertX: X position of initial start of the first curve(anchor point)
   vertY: Y position of initial start of the first curve(anchor point)

   ctrlPx: X position of the control point for first curve
   ctrlPy: Y position of the control point for first curve
   vertX2: X position of the end point of the first curve(anchor point) - Start of second curve
   vertY2: Y position of the end point of the first curve(anchor point) - Start of second curve

   ctrlPx2: X position of the control point for the second curve
   ctrlPy2: Y position of the control point for the second curve
   vertX3: X position of the end point of the second curve(anchor point)
   vertY3: Y position of the end point of the second curve(anchor point)
 *
 */

const letterA = {
  "vertX": 485,
  "vertY": 300,
  "ctrlPx": 395,
  "ctrlPy": 260,
  "vertX2": 487,
  "vertY2": 205,

  "ctrlPx2": 530,
  "ctrlPy2": 185,
  "vertX3": 515,
  "vertY3": 310
  
}

const letterB = {
  "vertX": 485,
  "vertY": 235,
  "ctrlPx": 530,
  "ctrlPy": 250,
  "vertX2": 515,
  "vertY2": 270,

  "ctrlPx2": 420,
  "ctrlPy2": 360,
  "vertX3": 450,
  "vertY3": 200
}

const letterC = {
  "vertX": 505,
  "vertY": 205,
  "ctrlPx": 445,
  "ctrlPy": 185,
  "vertX2": 445,
  "vertY2": 260,

  "ctrlPx2": 445,
  "ctrlPy2": 335,
  "vertX3": 520,
  "vertY3": 285
}

const colorFront  = "#e2e2e0";
const colorBack   = "#333332";
//const colorStroke = "#e2e2e0";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  //Change rect (x,y) from corner to center
  rectMode(CENTER)

  // color/stroke setup
  fill(colorFront);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  
  //anchor point 1 - inital placement of first curve
  let vert1x = posx + letterData["vertX"];
  let vert1y = posy + letterData["vertY"];

  //control point/handle for first curve
  let ctrl1Px = posx + letterData["ctrlPx"];
  let ctrl1Py = posy + letterData["ctrlPy"];

  //anchor point 2 - end of first curve
  let vert2x = posx + letterData["vertX2"];
  let vert2y = posy + letterData["vertY2"];

  //control point/handle for second curve
  let ctrl2Px = posx + letterData["ctrlPx2"];
  let ctrl2Py = posy + letterData["ctrlPy2"];

  //anchor point 3 - end of second curve
  let vert3x = posx + letterData["vertX3"];
  let vert3y = posy + letterData["vertY3"];

  //stroke(255,0,255); //Pink for testing
  stroke(colorBack)
  noFill();
  strokeWeight(15);
  beginShape();
  vertex(vert1x,vert1y)
  quadraticVertex(ctrl1Px,ctrl1Py,vert2x,vert2y)
  quadraticVertex(ctrl2Px, ctrl2Py, vert3x,vert3y)
  endShape();
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  //draw rect(secondary canvas) - possibly need to change this later for animation
  rect(center_x - 250, center_y, 100, 200)
  rect(center_x, center_y, 100, 200)
  rect(center_x + 250, center_y, 100, 200)

  //translate the letters to center
  translate(-canvasWidth/2, -canvasHeight/2)

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
