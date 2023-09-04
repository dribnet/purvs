const canvasWidth = 960;
const canvasHeight = 500;
const colour_LightSquare = "#ededed";
const colorBack    = "#1f1f1f";
const colorLines   = "#000090";

const letterA = {

  "arcStart": 140,
  "arcFinish": 30,
  "arc2Start": 205,
  "arc2Finish":335,
  "arc3Start":0,
  "arc3Finish":0,
  "arc3opacity":0,
  "Size1":40,
  "Size2":30,
  "xpos1":25,
  "ypos1":25,
  "xpos2":75,
  "ypos2":32,
}

const letterB = {

  "arcStart": 270,
  "arcFinish": 90,
  "arc2Start": 270,
  "arc2Finish":90,
  "arc3Start":0,
  "arc3Finish":0,
  "arc3opacity":0,
  "Size1":20,
  "Size2":20,
  "xpos1":25,
  "ypos1":15,
  "xpos2":75,
  "ypos2":35,
}

const letterC = {

  "arcStart": 180,
  "arcFinish": 270,
  "arc2Start": 90,
  "arc2Finish":180,
  "arc3Start":0,
  "arc3Finish":0,
  "arc3opacity":0,
  "Size1":40,
  "Size2":40,
  "xpos1":25,
  "ypos1":25,
  "xpos2":75,
  "ypos2":25,
}

function setup () {
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');
  angleMode (DEGREES);
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  angleMode (DEGREES);

  let xpos1 = letterData["xpos1"];
  let ypos1 = letterData["ypos1"];
  let xpos2 = letterData["xpos2"];
  let ypos2 = letterData["ypos2"];
  let Size1 = letterData["Size1"];
  let Size2 = letterData["Size2"];

  let arcStart = letterData["arcStart"];
  let arcFinish = letterData["arcFinish"];
  let arc2Start = letterData["arc2Start"];
  let arc2Finish = letterData["arc2Finish"];
  let arc3Start = letterData["arc3Start"];
  let arc3Finish = letterData["arc3Finish"];
  let arc3opacity = letterData["arc3opacity"]


  push ();
  translate (posx-50, posy-50);

 //white square
  fill (colour_LightSquare);
  rect (0, 0, 100, 50, 10);
// circles
  noFill ();
  strokeCap (SQUARE);
  stroke(1);
  strokeWeight (0.5);
  ellipse (xpos1, ypos1, Size1, Size1);
  ellipse (xpos2, ypos2, Size2,Size2);
//arcs
  strokeWeight(4);
  arc(xpos1, ypos1, Size1, Size1, arcStart , arcFinish);
  arc(xpos2, ypos2, Size2, Size2, arc2Start , arc2Finish);
  strokeWeight(arc3opacity);
  arc(xpos1, ypos1, Size1, Size1, arc3Start , arc3Finish);

pop();
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
