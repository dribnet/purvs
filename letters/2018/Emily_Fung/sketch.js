const canvasWidth = 960;
const canvasHeight = 500;


const letterA = {
  "size": 20,
  "offsetx": 200,
  "offsety": 485,
  "offset3x": 235,
  "offset3y": 515,
  "rotate": 90 
}

const letterC = {
  "size": 80,
}

const letterB = {
  "size": 100,     
}

const colorFront  = "#e2d3ed";
const colorBack   = "#e3eded";
const colorStroke = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');


  angleMode(DEGREES);

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3x = posx + letterData["offset3x"];
  let pos3y = posy + letterData["offset3y"];
  let rotate2 = letterData["rotatearc"];
  
angleMode(DEGREES);

  push();

  translate(-140,-690);

  noFill();
  arc(pos2x, pos2y, 230, -230, 270, PI, PI + QUARTER_PI);
  arc(pos3x, pos3y, 90, -90, 270, PI, PI + QUARTER_PI);

  pop();

    
  push();

  noFill();
  rotate(-45);
  translate(-30,-40);


  arc(pos2x, pos2y, 230, -230, 270, PI, PI + QUARTER_PI);
  arc(pos3x, pos3y, 90, -90, 270, PI, PI + QUARTER_PI);
    
  pop();
    
    
  push();  
  noFill();
  rotate(-225);
  translate(-660, -1280);
  arc(pos3x, pos3y, 90, -90, 270, PI, PI + QUARTER_PI);
  pop();
    
  push();
  
  noFill();
  rotate(-45);
  translate(-250,-260);
  arc(pos2x, pos2y, 230, -230, 270, PI, PI + QUARTER_PI); 
    
    
  pop();

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
