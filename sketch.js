const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my six variable per letter are:
 *
   vertX: X position of initial start of the line(anchor point)
   vertY: Y position of initial start of the line(anchor point)
   ctrlPx: X position of the control point for vertX
   ctrlPy: Y position of the control point for vertY
   vertX2: X position of the end point of the line(anchor point)
   vertY2: Y position of the end point of the line(anchor point)
 *
 */

const letterA = {
  "vertX": 405,
  "vertY": 175,
  "ctrlPx": 700,
  "ctrlPy": 360,
  "vertX2": 405,
  "vertY2": 325
  
}

const letterB = {
  "vertX": 405,
  "vertY": 175,
  "ctrlPx": 700,
  "ctrlPy": 360,
  "vertX2": 405,
  "vertY2": 325
}

const letterC = {
  "vertX": 405,
  "vertY": 175,
  "ctrlPx": 700,
  "ctrlPy": 360,
  "vertX2": 405,
  "vertY2": 325

}

const colorFront  = "#333332";
const colorBack   = "#e2e2e0";
//const colorStroke = "#e2e2e0";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  //Change rect (x,y) from corner to center
  rectMode(CENTER)

  // color/stroke setup
  fill(colorFront);
  //stroke(colorStroke);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  
  let vert1x = posx + letterData["vertX"];
  let vert1y = posy + letterData["vertY"];
  let ctrl1Px = posx + letterData["ctrlPx"];
  let ctrl1Py = posy + letterData["ctrlPy"];
  let vert2x = posx + letterData["vertX2"];
  let vert2y = posy + letterData["vertY2"];

  stroke(255,0,255); //Pink for testing
  strokeWeight(25);
  beginShape();
  vertex(vert1x,vert1y)
  quadraticVertex(ctrl1Px,ctrl1Py,vert2x,vert2y)
  endShape();
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  //draw rect(secondary canvas) - possibly need to change this later for animation
  rect(center_x - 250, center_y, 150, 150)
  rect(center_x, center_y, 150, 150)
  rect(center_x + 250, center_y, 150, 150)

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
