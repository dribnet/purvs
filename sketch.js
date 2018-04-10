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
  // "size": 80,
  // "offsetx": 0,
  // "offsety": 35
  "position1": -300,
  "tilt1": -90,
  "position2": 50,
  "tilt2": -45,
  "position3": -100,
  "tilt3": 0,
  "turncolor": -12,
}

const letterB = {
  "position1": -191,
  "tilt1": 0,
  "position2": -54,
  "tilt2": 0,
  "position3": -12,
  "tilt3": 0
}

const letterC = {
  "position1": -163,
  "tilt1": -84,
  "position2": -191,
  "tilt2": -95,
  "position3": -100,
  "tilt3": -47
}

const colorFront  = [186, 243, 255];
const colorBack   = [255, 232, 239];
const colorStroke = [255];

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

function drawPart(posx, posy, scale, offsetx, tilt) {
  resetMatrix();
  // translate(posx + offsetx*scale/10, posy);
  translate(posx, posy);
  rotate(tilt);
  noFill();
  strokeWeight(1);
  rect(-200, -15, 20*scale, 3*scale, 25);
  fill(186, 243, 255);
  strokeWeight(2.5);
  rect(-20*scale, -3*scale, 20*scale, 3*scale, 50);
  fill(255);
  ellipse(-18*scale, -1.5*scale, 15, 15);
  ellipse(-2*scale, -1.5*scale, 15, 15);
  
}

function drawLetter(posx, posy, scale, letterData) {
  let y_offset = 5 * scale;
  drawPart(posx, posy-y_offset, scale, letterData["position1"], letterData["tilt1"]);
  // drawPart(posx,          posy, scale, letterData["position2"], letterData["tilt2"]);
  // drawPart(posx, posy+y_offset, scale, letterData["position3"], letterData["tilt3"]);

  // draw two circles
  // ellipse(posx, posy, 150, 150);
  // ellipse(pos2x, pos2y, size2, size2);
  // rect(posx-20, posy, 150, 50, 50);
  // rect(pos2x, pos2y, size2/2, size2*2, 50);
  // rect(pos2x, pos2y, size2/2, size2*2, 50);
  // rect(pos2x+70, pos2y, size2/2, size2*2, 50);
}

function draw () {
  // clear screen
  background(colorBack);

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
