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
  "pointoneX": 50,
  "pointoneY": 0,
  "pointtwoX": 100,
  "pointtwoY": 200,
  "pointthreeX":36,
  "pointthreeY":60
}

const letterB = {
  "pointoneX": 100,
  "pointoneY": 200,
  "pointtwoX":50,
  "pointtwoY": 100,
  "pointthreeX":100,
  "pointthreeY":0
}

const letterC = {
  "pointoneX": 100,
  "pointoneY": 0,
  "pointtwoX":100,
  "pointtwoY": 0,
  "pointthreeX":100,
  "pointthreeY":0
}

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorBack    = "#2B2118";
const colorStroke  = "#A8763E";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(10);
  strokeCap(ROUND);
  strokeJoin(ROUND);
  noFill();

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let pointoneX = posx+letterData["pointoneX"];
  let pointoneY = posy+letterData["pointoneY"];
  let pointtwoX = posx+letterData["pointtwoX"];
  let pointtwoY = posy+letterData["pointtwoY"];
  let pointthreeX = posx+letterData["pointthreeX"];
  let pointthreeY = posy+letterData["pointthreeY"];

  const baselineY = posy +200;

  beginShape();
  vertex (posx, posy);
  vertex (posx, baselineY);
  vertex (pointoneX, pointoneY);
  vertex (pointtwoX, pointtwoY);
  vertex (pointthreeX,pointthreeY);
  endShape();

}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2 -100;


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
