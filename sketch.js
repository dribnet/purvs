const canvasWidth = 960;
const canvasHeight = 500;


const letterA = {
  "offsetx": 80,
  "offsety": 0
  
}

const letterB = {
  "offsetx": 0,
  "offsety": -125,
  
}

const letterC = {
  "offsetx": 40,
  "offsety": 40,
  
}

// #23c7e0 = blue
// #212121 = black
// #ed8f02 = orange


const colorFront  = "#212121";
const colorBack   = "#ed8f02";
const colorStroke = "#23c7e0";

function setup () {
  
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(20);

  
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // parameters used
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  



point(posx, posy +50);
point(posx+40, posy-40 +50);
point(pos2x, pos2y +50);

}

function draw () {
  // clear screen
  background(colorBack);
  push();
    rectMode(CENTER);
    strokeWeight(3)
    stroke(255);
    rect(width/2, height/2, 800, 400);
  pop();

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