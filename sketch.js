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
  "positionX1": -180,
  "positionY1": 100,
  "tilt1": -1,
  "change1": 1,
  "positionX2": 60,
  "positionY2": -120,
  "tilt2": 1.5,
  "change2": 1,
  "positionX3": -150,
  "positionY3": -10,
  "tilt3": 0,
  "change3": 1,

}

const letterB = {
  "positionX1": -100,
  "positionY1": 120,
  "tilt1": -1.5,
  "change1": 1,
  "positionX2": 100,
  "positionY2": -60,
  "tilt2": 2,
  "change2": 0,
  "positionX3": 120,
  "positionY3": 50,
  "tilt3": 2,
  "change3": 0,

}

const letterC = {
  "positionX1": -100,
  "positionY1": 120,
  "tilt1": -1.5,
  "change1": 1,
  "positionX2": -100,
  "positionY2": 30,
  "tilt2": 0,
  "change2": 1,
  "positionX3": -100,
  "positionY3": -120,
  "tilt3": 0,
  "change3": 1,
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


function drawPart(posx, posy, scale, offsetx, offsety, tilt, change) {


  //straight part//
if(change == 1){
  //draw Dandelion part//
  push();
  translate(posx + offsetx, posy + offsety);
  rotate(tilt);
  noFill();
  stroke(51, 94, 50);
  //draw stalk//
  bezier(85, 20, 10, 10, 90, 90, 15, 80);
  // bezier(20*scale, 4*scale, 10+scale, 10+scale, 90-scale, 90-scale, 15-scale, 7*scale);
  bezier(150, 20, 10, 10, 90, 90, 15, 80);
  // bezier(24*scale, 65-scale, -20+scale, 10+scale, 90-scale, 90-scale, 15-scale, 7*scale);
  bezier(200, 10, 20, 25, 90, 90, 15, 80);
  // bezier(18*scale, 34-scale, 2*scale, 6*scale, 9*scale, 9*scale, 15-scale, 7*scale);
  bezier(180, 34, 10, 10, 90, 90, 15, 80);
  // bezier(15*scale, 7*scale, -2*scale, -2*scale, 9*scale, 9*scale, 15-scale, 7*scale);
  bezier(54, 120, 10, 10, 90, 90, 100, 50);
  //draw flower//
  stroke(255);
  fill(255);
  ellipse(85, 20, 15, 15);
  ellipse(150, 20, 20, 20);
  ellipse(200, 10, 30, 30);
  ellipse(180, 34, 10, 10);
  ellipse(100, 50, 10, 10);
  //draw leaves//
  fill(51, 94, 50);
  noStroke();
  ellipse(70, 70, 50, 10);
  rotate(1);
  ellipse(80, -100, 10, 50);
  ellipse(60, -25, 30, 10);
  rotate(1);
  ellipse(-20, -130, 10, 30);
  pop();
}else if(change == 0){ //draw an ellipse of Dandelion//
  push();
  translate(posx + offsetx, posy + offsety);
  rotate(tilt);
  stroke(51, 94, 50);
  noFill();
  // fill(255);
  arc(50, 100, 100, 100, 360, 0);
  fill(51, 94, 50);
  ellipse(-10, 100, 20, 10);
  rotate(1);
  ellipse(45, 10, 30, 10);
  rotate(1);
  ellipse(115, -45, 30, 10);
  rotate(3);
  ellipse(-25, 45, 30, 10);
  fill(255);
  noStroke();
  ellipse(-40, 45, 10, 10);
  ellipse(-40, 35, 10, 10);

  // ellipse(10*scale, 2*scale, 100, 100);
  pop();
}else if(change == 2){ //draw V shaped of Dandelion//
  //draw Dandelion part//
  push();
  translate(posx + offsetx, posy + offsety);
  rotate(tilt);
  noFill();
  stroke(51, 94, 50);
  //draw stalk//
  line(105, -80, 45, 90);
  line(80, -80, 45, 90);
  bezier(85, 20, 10, 10, 90, 90, 15, 80);
  bezier(85, -50, -50, -100, 185, 90, 15, 120);
  // bezier(20*scale, 4*scale, 10+scale, 10+scale, 90-scale, 90-scale, 15-scale, 7*scale);
  bezier(150, 20, 10, 10, 90, 90, 15, 80);
  // bezier(24*scale, 65-scale, -20+scale, 10+scale, 90-scale, 90-scale, 15-scale, 7*scale);
  bezier(200, 10, 20, 25, 90, 90, 15, 80);
  // bezier(18*scale, 34-scale, 2*scale, 6*scale, 9*scale, 9*scale, 15-scale, 7*scale);
  bezier(180, 34, 10, 10, 90, 90, 15, 80);
  // bezier(15*scale, 7*scale, -2*scale, -2*scale, 9*scale, 9*scale, 15-scale, 7*scale);
  bezier(54, 120, 10, 10, 90, 90, 100, 50);
  //draw flower//
  stroke(255);
  fill(255);
  ellipse(85, 20, 15, 15);
  ellipse(150, 20, 20, 20);
  ellipse(200, 10, 30, 30);
  ellipse(180, 34, 10, 10);
  ellipse(100, 50, 10, 10);

  ellipse(105, -80, 20, 20);
  ellipse(80, -80, 10, 10);
  ellipse(85, -50, 10, 10);
  //draw leaves//
  fill(51, 94, 50);
  noStroke();
  ellipse(70, 70, 50, 10);
  rotate(1);
  ellipse(80, -100, 10, 50);
  ellipse(60, -25, 30, 10);
  rotate(1);
  ellipse(-20, -130, 10, 30);
  rotate(1);
  ellipse(-45, 50, 10, 30);
  rotate(1);
  ellipse(-45, 50, 10, 30);
  ellipse(-35, 100, 10, 30);
  pop();

}


}

function drawLetter(posx, posy, scale, letterData) {
  let y_offset = 5 * scale;
  drawPart(posx, posy, scale, letterData["positionX1"], letterData["positionY1"], letterData["tilt1"], letterData["change1"]);
  drawPart(posx,          posy, scale, letterData["positionX2"], letterData["positionY2"], letterData["tilt2"], letterData["change2"]);
  drawPart(posx, posy, scale, letterData["positionX3"], letterData["positionY3"], letterData["tilt3"], letterData["change3"]);

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
