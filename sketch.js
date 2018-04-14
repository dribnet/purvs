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
  "vertX": 425,
  "vertY": 310,
  "ctrlPx": 470,
  "ctrlPy": 80,
  "vertX2": 535,
  "vertY2": 310
  
}

const letterB = {
  "vertX": 425,
  "vertY": 190,
  "ctrlPx": 600,
  "ctrlPy": 225,
  "vertX2": 425,
  "vertY2": 250
}

const letterC = {
  "vertX": 510,
  "vertY": 190,
  "ctrlPx": 340,
  "ctrlPy": 250,
  "vertX2": 510,
  "vertY2": 300

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

  //stroke(255,0,255); //Pink for testing
  stroke(colorBack)
  noFill();
  strokeWeight(20);
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
