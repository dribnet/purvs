const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {

  "x2": -130,
  "y2": 20,

  "x3":-130,
  "y3":-20,

  "x5":-50, //layer
  "y5":50, //actually under 

  "x6":-50, //layer
  "y6":10, //actually under

  "x7":-50, //solid
  "y7":-30, //solid

  "x8":-81, //very top
  "y8":30, //very top

  "x4":-97, //very behind
  "y4":-39 //very behind
}

const letterB = {

  "x2": -130,
  "y2": 20,

  "x3":-130,
  "y3":-20,

  "x4":-98,
  "y4":-39,

  "x5":-62,
  "y5":-31,

  // "x8":-83,
  // "y8":-11,

  "x8":-64,
  "y8":64,

  "x9":-81,
  "y9":79,
  
  "x10":-88,
  "y10":-8

}

const letterC = {

  "x2": -130, //solid
  "y2": 20, //solid

  "x3":-130, //solid
  "y3":-20, //solid

  "x4":-100,
  "y4":-38,

  "x7":-55,
  "y7":-30,

  "x8":-81,
  "y8":80,

  "x5":-73,
  "y5":73
}



function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  col1 = color(255,204,116); //dark green
  col2 = color(255,121,145); //light green
  col3 = color(79,196,216); //red
  col4 = color(255,192,203);
  // color/stroke setup


  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, col, letterData) {
  // determine parameters for second circle
  // let col3 = letterData["col3"];
  
  let pos2x = posx + letterData["x2"];
  let pos2y = posy + letterData["y2"];

  let pos3x = posx + letterData["x3"];
  let pos3y = posy + letterData["y3"];

  let pos5x = posx + letterData["x5"];
  let pos5y = posy + letterData["y5"];

  let pos6x = posx + letterData["x6"];
  let pos6y = posy + letterData["y6"];

  let pos7x = posx + letterData["x7"];
  let pos7y = posy + letterData["y7"];

  let pos8x = posx + letterData["x8"];
  let pos8y = posy + letterData["y8"];

  let pos4x = posx + letterData["x4"];
  let pos4y = posy + letterData["y4"];  

  let pos9x = posx + letterData["x9"];
  let pos9y = posy + letterData["y9"]; 
  
  let pos10x = posx + letterData["x10"];
  let pos10y = posy + letterData["y10"]; 
  // draw two circles
  // ellipse(posx, posy, 150, 150);
  // ellipse(pos2x, pos2y, size2, size2);

  drawOwl(posx-130,posy+60,150,150);
  drawOwl(pos4x,pos4y,150,150); //x4y4
  drawOwl(pos2x,pos2y,150,150);


  drawOwl(pos3x,pos3y,150,150); //x3y3
  drawOwl(pos5x,pos5y,150,150); //x5y5
  drawOwl(pos6x,pos6y,150,150); //x6y6
  drawOwl(pos7x,pos7y,150,150); //x7y7
  drawOwl(pos8x,pos8y,150,150); //x8y8

  drawOwl2(pos9x,pos9y,150,150) //x10y10 //different col
  drawOwl2(pos10x,pos10y,150,150) //x10y10 //different col
}

function draw () {
  translate(0,-70);
  // clear screen
  background(255,192,203);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data

  // drawOwl(100,350);
  drawLetter(center_x - 250, center_y, 10, letterA);
  drawLetter(center_x      , center_y, 10, letterB);
  drawLetter(center_x + 250, center_y, 10, letterC);
}
function drawOwl(x,y){
  push();
  translate(x, y);


  push();
  fill(col1);
  stroke(col1);
  beginShape();
  vertex(50,50);
  vertex(100,70);
  vertex(100,20);
  vertex(50,10);
  endShape();
  pop();
  
  push();
  fill(col2);
  stroke(col2);
  beginShape();
  vertex(100,70);
  vertex(100,20);
  vertex(130,0);
  vertex(130,40);
  endShape();
  pop();
  
  push();
  fill(col3);
  stroke(col3);
  beginShape();
  vertex(100,20);
  vertex(130,-2);
  vertex(85,-10);
  vertex(50,10);
  endShape();
  pop();

  pop();
}
function drawOwl2(x,y){
  push();
  translate(x, y);


  push();
  fill(col1);
  stroke(col1);
  beginShape();
  vertex(50,50);
  vertex(100,70);
  vertex(100,20);
  vertex(50,10);
  endShape();
  pop();
  
  push();
  fill(col2);
  stroke(col2);
  beginShape();
  vertex(100,70);
  vertex(100,20);
  vertex(130,0);
  vertex(130,40);
  endShape();
  pop();
  
  push();
  fill(col4);
  stroke(col4);
  beginShape();
  vertex(100,20);
  vertex(130,-2);
  vertex(85,-10);
  vertex(50,10);
  endShape();
  pop();

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
