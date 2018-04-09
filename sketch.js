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
  "size": 80,
  "offsetx": 0,
  "offsety": 35
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0
}

const colorFront  = "ffffff";
const colorBack   = "ffffff";
const colorStroke = "#233f11";


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(200);
  stroke(0);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  //ellipse(posx, posy, 150, 150);
  //ellipse(pos2x, pos2y, size2, size2);                                                                        
}

function draw () {
  // clear screen
  background(200);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, 10, letterA);
  drawLetter(center_x      , center_y, 10, letterB);
  drawLetter(center_x + 250, center_y, 10, letterC);
  
  //A
  push();
  translate(-320,0);
  beginShape();
  vertex(center_x,center_y-100);                      
  vertex(center_x-50,center_y);
  vertex(center_x-50,center_y+100);
  vertex(center_x,center_y+25);
  vertex(center_x+50,center_y+100);
  vertex(center_x+50,center_y);             
  endShape(CLOSE);
  //
  beginShape();
  vertex(center_x,center_y-75);                      
  vertex(center_x-25,center_y);
  vertex(center_x-25,center_y+25);
  vertex(center_x,center_y);
  vertex(center_x+25,center_y+25);
  vertex(center_x+25,center_y);             
  endShape(CLOSE);
  pop();

  //B
  push();
  translate(0,0);
  beginShape();
  vertex(center_x,center_y-100);
  vertex(center_x-90,center_y);
  vertex(center_x,center_y+100);
  vertex(center_x+90,center_y);
  endShape(CLOSE);
  //
  beginShape();
  vertex(center_x,center_y-80);
  vertex(center_x-60,center_y-10);
  vertex(center_x+60,center_y-10);
  endShape(CLOSE);
  //
  beginShape();
  vertex(center_x,center_y+80);
  vertex(center_x-60,center_y+10);
  vertex(center_x+60,center_y+10);
  endShape(CLOSE);
  pop();

  //C
  translate(320,0);
  push();
  beginShape();
  vertex(center_x,center_y-100);
  vertex(center_x-100,center_y);
  vertex(center_x,center_y+100);
  vertex(center_x-50,center_y);
  endShape(CLOSE);
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
