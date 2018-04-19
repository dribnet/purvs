const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my twelve variable per letter are:
 *
   Octo1x
   Octo1y
   Octo1Scale
   Octo1poly
   Octo2x
   Octo2y
   Octo2Scale
   Octo2poly
   Rectx
   Recty
   RectScale
   RectAngle
 *
 */

const letterA = {
  "o1x": -14,
  "o1y": 3,
  "o1s": 10.5,
  "o1p" : 8,
  "o2x": -26.75,
  "o2y": -31,
  "o2s": 18.75,
  "o2p" : 3,
  "rx": 0,
  "ry": -2,
  "rs": 31.5,
  "rr": 53
}

const letterB = {
  "o1x": -6.5,
  "o1y": -10.5,
  "o1s": 13.25,
  "o1p" : 3,
  "o2x": -3.75,
  "o2y": 12.5,
  "o2s": 18.75,
  "o2p" : 3,
  "rx": -30,
  "ry": 1.25,
  "rs": 25,
  "rr": 90
}

const letterC = {
  "o1x": 16.5,
  "o1y": 20,
  "o1s": 16,
  "o1p" : 4,
  "o2x": -10.5,
  "o2y": 20,
  "o2s": 16,
  "o2p" : 4,
  "rx": -2,
  "ry": -30,
  "rs": 33.75,
  "rr": -180
}

const colorFront  = "#199cff";
const colorBack   = "#e3eded";
const colorStroke = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter (posx, posy, letterData) {

  let o1x = letterData["o1x"];
  let o1y = letterData["o1y"];
  let o1s = letterData["o1s"];
  let o1p = letterData["o1p"];
  let o2x = letterData["o2x"];
  let o2y = letterData["o2y"];
  let o2s = letterData["o2s"];
  let o2p = letterData["o2p"];
  let rx = letterData["rx"];
  let ry = letterData["ry"];
  let rs = letterData["rs"];
  let rr = letterData["rr"];

  //Drop Shadows
  fill(255, 130, 148);

  //Immovable Rect
  rect(posx-25+6,posy+6,5,30);

  //Moveable Objects
  drawFromSliders(1,posx+o1x,posy+o1y,o1s,o1p,6,6);
  drawFromSliders(1,posx+o2x,posy+o2y,o2s,o2p,6,6);
  drawFromSliders(2,posx+rx,posy+ry,rs,rr,6,6);

  //Front of Objects
  fill(255);
  resetMatrix();
  rect(posx-25,posy,5,30);

  //Moveable Objects
  drawFromSliders(1,posx+o1x,posy+o1y,o1s,o1p,0,0);
  drawFromSliders(1,posx+o2x,posy+o2y,o2s,o2p,0,0);
  drawFromSliders(2,posx+rx,posy+ry,rs,rr,0,0);
  resetMatrix();
}

function drawFromSliders(drawtype, x, y,scal,poly,xoff,yoff) {

  if (drawtype==1) {
    drawPoly(x+xoff,y+yoff,scal,poly);
  }
  if (drawtype==2) {
    drawRect(x+xoff,y+xoff,scal,poly);
  }
} 

function drawRect(x, y, scal, tilt) {
  resetMatrix();
  translate(x,y);
  rotate(tilt);
  rectMode(RADIUS);
  rect(0,0,scal,scal/6);
  rotate(-tilt);
  translate(-x, -y);
}

function drawPoly(x, y, scal, poly) {
  resetMatrix();
  translate(x, y);

  polygon(0,0,scal,poly);
  translate(-x, -y);
}

function polygon(x, y, radius, npoints) {
  angleMode(RADIANS);
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  angleMode(DEGREES);
}

function draw () {

  background(85, 72, 89);
  noStroke();

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
