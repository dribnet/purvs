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
  "status": 1,
  "offsetx": -32,
  "offsety": 120,
  "r": 105,
  "rotffset": - 30,
  "movex":-50,
  "movey":-125,
  "gx":45,
  "gy":-4,
  "g2x": 110,
  "g2y": -5
}

const letterB = {
  "status": 0,
  "offsetx": 0,
  "offsety": 125,
  "r": 90,
  "rotffset": 0,
  "movex":-50,
  "movey":-125,
  "gx":80,
  "gy":58,
  "g2x": 80,
  "g2y": 58
}

const letterC = {
  "status": 1,
  "offsetx": 0,
  "offsety": 125,
  "r": 90,
  "rotffset": -90,
  "movex":-50,
  "movey":-125,
  "gx":20,
  "gy":15,
  "g2x": 20,
  "g2y": 88
}

const colorFront  = "#281c1c";
const colorBack   = "#ffd0d0";
const colorStroke = "#ffffff";
const colorInside = "#ffffff";
const colorPattern = "#514444";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  // fill(colorFront);
  // stroke(colorStroke);
  // strokeWeight(4);
  noStroke();
  angleMode(DEGREES);
  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(x, y, letterData) {
  // determine parameters for second circle
  let sta = letterData["status"];

  let transx = x + letterData["movex"];
  let transy = y + letterData["movey"];

  let rot = letterData["r"];
  let rotgap = letterData["rotffset"];

  let gapx = letterData["gx"];
  let gapy = letterData["gy"];

  let gap2x = letterData["g2x"];
  let gap2y = letterData["g2y"];

  let posx = 0;
  let posy = 0;

  let trans2x = transx + letterData["offsetx"];
  let trans2y = transy + letterData["offsety"];

  // draw oreo
  if(sta == 1){
    push();
    translate(transx, transy);
    rotate(rot);
    fill(colorFront);
    rect(posx, posy - 14, 120, 17, 6);
    rect(posx, posy + 14, 120, 17, 6);

    fill(colorInside);
    rect(posx + 10, posy + 4, 100, 10, 5);
    pop();

    push();
    translate(trans2x, trans2y);
    rotate(rot);
    fill(colorFront);
    rect(posx, posy - 14, 120, 17, 6);
    rect(posx, posy + 14, 120, 17, 6);

    fill(colorInside);
    rect(posx + 10, posy + 4, 100, 10, 5);
    pop();

    push();
    translate(transx + gapx, transy + gapy);
    rotate(rot + rotgap);
    fill(colorFront);
    rect(posx, posy - 14, 120, 17, 6);
    rect(posx, posy + 14, 120, 17, 6);

    fill(colorInside);
    rect(posx + 10, posy + 4, 100, 10, 5);
    pop();

    push();
    translate(trans2x + gap2x, trans2y + gap2y);
    rotate(rot + rotgap);
    fill(colorFront);
    rect(posx, posy - 14, 120, 17, 6);
    rect(posx, posy + 14, 120, 17, 6);

    fill(colorInside);
    rect(posx + 10, posy + 4, 100, 10, 5);
    pop();
  }else if(sta == 0){
    push();
    translate(transx, transy);
    rotate(rot);
    fill(colorFront);
    rect(posx, posy - 14, 120, 17, 6);
    rect(posx, posy + 14, 120, 17, 6);

    fill(colorInside);
    rect(posx + 10, posy + 4, 100, 10, 5);
    pop();

    push();
    translate(trans2x, trans2y);
    rotate(rot);
    fill(colorFront);
    rect(posx, posy - 14, 120, 17, 6);
    rect(posx, posy + 14, 120, 17, 6);

    fill(colorInside);
    rect(posx + 10, posy + 4, 100, 10, 5);
    pop();

    push();
    translate(transx + gapx, transy + gapy);
    fill(colorFront);
    drawOreo(posx, posy, 120);
    pop();

    push();
    translate(trans2x + gap2x, trans2y + gap2y);
    fill(colorFront);
    drawOreo(posx, posy, 120);
    pop();
  }
}

function drawOreo(ox, oy, size){
  push();
  ellipseMode(CENTER);
  ellipse(ox, oy, size, size);
  fill(colorPattern);
  push();
  for(let i = 0; i < 30; i ++){
    rotate(12);
    rect(ox + 43, oy, 10, 5, 3);
  }
  pop();
  push();
  for(let v = 0; v < 6; v ++){
    rotate(60);
    triangle(ox - 6, oy - 38, ox + 6, oy - 38, ox, oy - 30);
    triangle(ox - 6, oy - 18, ox + 6, oy - 18, ox, oy - 26);
    triangle(ox - 10, oy - 34, ox - 10, oy - 22, ox - 2, oy - 28);
    triangle(ox + 10, oy - 34, ox + 10, oy - 22, ox + 2, oy - 28);
    ellipse(ox + 16, oy - 28, 6, 6);
  }
  pop();
  stroke(colorPattern);
  strokeWeight(4);
  noFill();
  ellipse(ox, oy, size * 0.2, size * 0.2);
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
