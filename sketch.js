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
   TriAng
 *
 */

const letterA = {
   "triangleX": 121,
   "triangleY": 40,
   "TriAng": 80,
   "triWidth": 100,
   "triHeight": 140,
   "ellipseX": 48,
   "ellipseY": 99,
   "ellipseSize": 70,
   "rectX": 37,
   "rectY": 33,
   "rectWidth": 15,
   "rectHeight": 80

}

const letterB = {
  "triangleX": -10,
  "triangleY": 120,
  "TriAng": 260,
  "triWidth": 120,
  "triHeight": 120,
  "ellipseX": 54,
  "ellipseY": 100,
  "ellipseSize": 70,
  "rectX": 7,
  "rectY": 20,
  "rectWidth": 15,
  "rectHeight": 95
}

const letterC = {
  "triangleX": 107,
  "triangleY": 60,
  "TriAng": 90,
  "triWidth": 120,
  "triHeight": 100,
  "ellipseX": 58,
  "ellipseY": 100,
  "ellipseSize": 70,
  "rectX": 0,
  "rectY": 0,
  "rectWidth": 0,
  "rectHeight": 0
}

//const backgroundColor  = "#e3eded";
const backgroundColor  = "#ffffff";


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  noStroke();

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
  let triangleX =  letterData["triangleX"];
  let triangleY =  10  + letterData["triangleY"];
  let TriAng = letterData["TriAng"];
  let triWidth = letterData["triWidth"];
  let triHeight = letterData["triHeight"];
  let left = 30 - triWidth/2;
  let right = 30 + triWidth/2;
  let triangleHeight = triangleY + triHeight;
  let ellipseX = letterData["ellipseX"];
  let ellipseY = letterData["ellipseY"];
  let ellipseSize = letterData["ellipseSize"];
  let rectX = letterData["rectX"];
  let rectY = letterData["rectY"];
  let rectWidth = letterData["rectWidth"];
  let rectHeight = letterData["rectHeight"];

  //creates triangle
  push();
  fill(0);
  translate(triangleX,triangleY);
  rotate(TriAng);
  triangle(left, 30, right, 30, 30, triHeight);
  pop();

  //creates an ellipse
  push()
  fill(255);
  ellipse(ellipseX, ellipseY, ellipseSize);
  pop();

  //creates a rectangle
  push()
  fill(255);
  translate(rectX,rectY);
  rect(rectX, rectY, rectWidth, rectHeight)
  pop();

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }

  else if (key == '@') {
    saveBlocksImages(true);
  }
}
