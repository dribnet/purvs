const canvasWidth = 960;
const canvasHeight = 500;

const letterSize = 100;
const pointSize = letterSize/20;
const letterAngle = 0.872665;

const colourOpac = 50;

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

//  const letterB = {
//   "pointOne":   { "x": 0, "y": 0},
//   "pointTwo":   { "x": 0, "y": 0},
//   "pointThree": { "x": 0, "y": 0},
//   "pointFour":  { "x": 0, "y": 0},
//   "pointFive":  { "x": 0, "y": 0},
//   "pointSix":   { "x": 0, "y": 0},
// }

const letterA = {
  "pointOne":   { "x": 0, "y": letterSize},
  "pointTwo":   { "x": Math.sin(letterAngle) * -letterSize, "y": Math.cos(letterAngle) * -letterSize},
  "pointThree": { "x": (Math.tan(0.366519) * letterSize) * Math.cos(0.698132), "y": (Math.tan(0.523599) * letterSize) * Math.sin(0.698132)},
  "pointFour":  { "x": 0, "y": letterSize},
  "pointFive":  { "x": Math.sin(letterAngle) * letterSize, "y": Math.cos(letterAngle) * -letterSize},
  "pointSix":   { "x": (Math.tan(0.366519) * -letterSize) * Math.cos(0.698132), "y": (Math.tan(0.523599) * letterSize) * Math.sin(0.698132)},
}

const letterB = {
  "pointOne":   { "x": letterSize/2, "y": letterSize},
  "pointTwo":   { "x": -letterSize/2, "y": letterSize/3},
  "pointThree": { "x": letterSize/2, "y": -letterSize/3},
  "pointFour":  { "x": letterSize/2, "y": letterSize/3},
  "pointFive":  { "x": -letterSize/2, "y": -letterSize/3},
  "pointSix":   { "x": letterSize/2, "y": -letterSize},
}

const letterC = {
  "pointOne":   { "x": letterSize, "y": 0},
  "pointTwo":   { "x": Math.cos(letterAngle) * -letterSize, "y": Math.sin(letterAngle) * -letterSize},
  "pointThree": { "x": (Math.tan(0.523599) * letterSize) * Math.sin(0.698132), "y": (Math.tan(0.366519) * letterSize) * Math.cos(0.698132)},
  "pointFour":  { "x": letterSize, "y": 0},
  "pointFive":  { "x": Math.cos(letterAngle) * -letterSize, "y": Math.sin(letterAngle) * letterSize},
  "pointSix":   { "x": (Math.tan(0.523599) * letterSize) * Math.sin(0.698132), "y": (Math.tan(0.366519) * -letterSize) * Math.cos(0.698132)},
}

const colorBack   = "#e3eded";
const colorStroke = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(100,70);
  stroke(colorStroke);
  strokeWeight(1);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {

  // determine parameters for second circle
  let p1 = createVector(letterData["pointOne"]["x"], letterData["pointOne"]["y"]);
  let p2 = createVector(letterData["pointTwo"]["x"], letterData["pointTwo"]["y"]);
  let p3 = createVector(letterData["pointThree"]["x"], letterData["pointThree"]["y"]);
  let p4 = createVector(letterData["pointFour"]["x"], letterData["pointFour"]["y"]);
  let p5 = createVector(letterData["pointFive"]["x"], letterData["pointFive"]["y"]);
  let p6 = createVector(letterData["pointSix"]["x"], letterData["pointSix"]["y"]);

  //paper fill
  fill(232, 232, 220);
  //colour fill
  //fill(255, 223, 17, colourOpac);

  push();
  translate(posx,posy);
  angleMode(DEGREES);
  rotate(random(-10,10));

  beginShape();
  vertex(0 - p1.x, 0 - p1.y);
  vertex(0 - p2.x, 0 - p2.y);
  vertex(0 - p3.x, 0 - p3.y);
  endShape(CLOSE);

  //paper fill
  fill(242, 242, 242);
  //colour fill
  // fill(17, 215, 255,colourOpac);

  beginShape();
  vertex(0 - p4.x, 0 - p4.y);
  vertex(0 - p5.x, 0 - p5.y);
  vertex(0 - p6.x, 0 - p6.y);
  endShape(CLOSE);

  push();
  stroke(0,40);
  noFill();
  //ellipse(0,0,5,5);
  ellipse(0,0,letterSize*2,letterSize*2);
  fill(0);
  // ellipse(0 - p1.x, 0 - p1.y,pointSize,pointSize);
  // ellipse(0 - p4.x, 0 - p4.y,pointSize,pointSize);
  // ellipse(0 - p2.x, 0 - p2.y,pointSize,pointSize);
  // ellipse(0 - p5.x, 0 - p5.y,pointSize,pointSize);
  // ellipse(0 - p3.x, 0 - p3.y,pointSize,pointSize);
  // ellipse(0 - p6.x, 0 - p6.y,pointSize,pointSize);
  pop();

  pop();
}

function draw () {
  // clear screen
  background(255);

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
