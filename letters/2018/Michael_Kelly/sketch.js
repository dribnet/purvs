const canvasWidth = 960;
const canvasHeight = 500;

const letterSize = 100;
const pointSize = letterSize/20;
const letterAngle = 0.872665;

const colourOpac = 100;

/* 
 * The 6 parameters per letter:
 *
  `pointone` : x and y value of pointOne
  `pointTwo` : x and y value of pointTwo
  etc..
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
  "p1": { "ang": 000,   "dist": letterSize},
    "p2": { "ang": 130,   "dist": letterSize},
    "p3": { "ang": 300,   "dist": 0.5*(letterSize)},
    "p4": { "ang": 000,   "dist": letterSize},
    "p5": { "ang": 230,   "dist": letterSize},
    "p6": { "ang": 070,   "dist": 0.5*(letterSize)},
}

const letterB = {
   "p1": { "ang": 320,   "dist": letterSize},
    "p2": { "ang": 050,   "dist": 0.76*letterSize},
    "p3": { "ang": 220,   "dist": letterSize},
    "p4": { "ang": 220,   "dist": letterSize},
    "p5": { "ang": 140,   "dist": 0.76*letterSize},
    "p6": { "ang": 320,   "dist": letterSize},
}

const letterC = {
  "p1": { "ang": 270,   "dist": letterSize},
    "p2": { "ang": 035,   "dist": letterSize},
    "p3": { "ang": 210,   "dist": 0.5*letterSize},
    "p4": { "ang": 270,   "dist": letterSize},
    "p5": { "ang": 140,   "dist": letterSize},
    "p6": { "ang": 330,   "dist": 0.6*letterSize},
}

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

  push();
  blendMode(MULTIPLY)

  angleMode(DEGREES);

  // determine parameters for triangle points
  let p1 = createVector(0 - sin(letterData["p1"]["ang"]) * letterData["p1"]["dist"], 0 + cos(letterData["p1"]["ang"]) * letterData["p1"]["dist"]);
  let p2 = createVector(0 - sin(letterData["p2"]["ang"]) * letterData["p2"]["dist"], 0 + cos(letterData["p2"]["ang"]) * letterData["p2"]["dist"]);
  let p3 = createVector(0 - sin(letterData["p3"]["ang"]) * letterData["p3"]["dist"], 0 + cos(letterData["p3"]["ang"]) * letterData["p3"]["dist"]);
  let p4 = createVector(0 - sin(letterData["p4"]["ang"]) * letterData["p4"]["dist"], 0 + cos(letterData["p4"]["ang"]) * letterData["p4"]["dist"]);
  let p5 = createVector(0 - sin(letterData["p5"]["ang"]) * letterData["p5"]["dist"], 0 + cos(letterData["p5"]["ang"]) * letterData["p5"]["dist"]);
  let p6 = createVector(0 - sin(letterData["p6"]["ang"]) * letterData["p6"]["dist"], 0 + cos(letterData["p6"]["ang"]) * letterData["p6"]["dist"]);

  //paper fill
  //fill(232, 232, 220, colourOpac);
  //colour fill
  fill(80, 150, 255, colourOpac);

  push();
  translate(posx,posy);

  beginShape();
  vertex(0 - p1.x, 0 - p1.y);
  vertex(0 - p2.x, 0 - p2.y);
  vertex(0 - p3.x, 0 - p3.y);
  endShape(CLOSE);

  //paper fill
  //fill(242, 242, 242, colourOpac);
  //colour fill
   fill(255, 50, 50,colourOpac);

  beginShape();
  vertex(0 - p4.x, 0 - p4.y);
  vertex(0 - p5.x, 0 - p5.y);
  vertex(0 - p6.x, 0 - p6.y);
  endShape(CLOSE);

  push();
  stroke(0,40);
  noFill();
  ellipse(0,0,5,5);
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
