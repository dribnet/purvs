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
  // "offsety": 3
  "positionx1": 226,
  "positiony1": 160,
  "tilt1": -45,
  "positionx2": 262,
  "positiony2": 100,
  "tilt2": -45,
  "positionx3": 300,
  "positiony3": 40,
  "tilt3": -45,
  "positionx4": 310,
  "positiony4": 290,
  "tilt4": 45,
  "positionx5": 350,
  "positiony5": 350,
  "tilt5": 45,
  "positionx6": 390,
  "positiony6": 410,
  "tilt6": 45,

}

const letterB = {
  "positionx1": 620,
  "positiony1": 320,
  "tilt1": 0,
  "positionx2": 450,
  "positiony2": 118,
  "tilt2": 80.1,
  "positionx3": 450,
  "positiony3": 20,
  "tilt3": 80.1,
  "positionx4": 620,
  "positiony4": 150,
  "tilt4": 0,
  "positionx5": 600,
  "positiony5": 60,
  "tilt5": -45,
  "positionx6": 580,
  "positiony6": 400,
  "tilt6": 45,

}

const letterC = {
  "positionx1": 900,
  "positiony1": 320,
  "tilt1": 0,
  "positionx2": 825,
  "positiony2": 320,
  "tilt2": 0,
  "positionx3": 650,
  "positiony3": 120,
  "tilt3": 80.1,
  "positionx4": 650,
  "positiony4": 45,
  "tilt4": 80.1,
  "positionx5": 825,
  "positiony5": 165,
  "tilt5": 0,
  "positionx6": 900,
  "positiony6": 165,
  "tilt6": 0,
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

function drawPart(posx, posy, scale, offsetx, offsety, tilt) {
  push();
  // resetMatrix();
  // translate(posx + offsetx*scale/2, posy);
  translate(offsetx, offsety);
  rotate(tilt);
  noFill();
  strokeWeight(1);
  rect(-200, -15, 10*scale, 3*scale, 25);
  fill(186, 243, 255);
  strokeWeight(2.5);
  rect(-20*scale, -3*scale, 10*scale, 3*scale, 50);
  fill(255);
  ellipse(-12*scale, -1.5*scale, 5, 5);
  ellipse(-18*scale, -1.5*scale, 5, 5);
  pop();
  
}

function drawLetter(posx, posy, scale, letterData) {
  // let y_offset = 2.5*scale;
  drawPart(posx, posy, scale, letterData["positionx1"], letterData["positiony1"], letterData["tilt1"]);
  drawPart(posx, posy, scale, letterData["positionx2"], letterData["positiony2"], letterData["tilt2"]);
  drawPart(posx, posy, scale, letterData["positionx3"], letterData["positiony3"], letterData["tilt3"]);
  drawPart(posx, posy, scale, letterData["positionx4"], letterData["positiony4"], letterData["tilt4"]);
  drawPart(posx, posy, scale, letterData["positionx5"], letterData["positiony5"], letterData["tilt5"]);
  drawPart(posx, posy, scale, letterData["positionx6"], letterData["positiony6"], letterData["tilt6"]);

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