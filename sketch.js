const canvasWidth = 960;
const canvasHeight = 500;


const letterA = {
  "backgroundShapeType": 3, //triangle
  "offsetx": 0,
  "offsety": 0,
  "boxColour": "#199cff",
  "triangleRotate": 0,
  "triangleSize": 1,
  "length": 0
}

const letterB = {
  "backgroundShapeType": 1, //square
  "offsetx": 0,
  "offsety": 20,
  "boxColour": "#59ccff",
  "triangleRotate": 270,
  "triangleSize": 0.8,
  "length": 150
}

const letterC = {
  "backgroundShapeType": 2, //circle
  "offsetx": 0,
  "offsety": 0,
  "boxColour": "#53d2dc",
  "triangleRotate": 270,
  "triangleSize": 1,
  "length": 0
}

const backgroundColor  = "#e3eded";



function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  
  noStroke();
  rectMode(CENTER);
  angleMode(DEGREES);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}



function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}



function drawLetter(posx, posy, letterData) {

  let shapeType = letterData["backgroundShapeType"];
  let colour = letterData["boxColour"];
  let triPosX = letterData["offsetx"];
  let triPosY = letterData["offsety"];
  let triRotate = letterData["triangleRotate"];
  let triSize = letterData["triangleSize"];
  let leftLineLength = letterData["length"];


  // background shape
  fill(colour);

  if (shapeType == 1){
    rect(posx, posy, 150, 150);
  } else if (shapeType == 2){
    ellipse(posx, posy, 150, 150);
  } else if (shapeType == 3){
    triangle(posx, posy-75, posx+90, posy+75, posx-90, posy+75);
  }


  //triangle
  push();
  translate(posx, posy);
  rotate(triRotate);
  scale(triSize)
  fill(260);
  triangle(triPosX, triPosY, 50+triPosX, 75+triPosY, -50+triPosX, 75+triPosY);
  pop();


  // lines
  push();
  if (leftLineLength > 0){
    stroke(260);
    strokeWeight(1.5);
    line(posx-70, posy-75, posx-70, posy-75+leftLineLength);
    line(posx-65, posy-75, posx-65, posy-75+leftLineLength);
    line(posx-60, posy-75, posx-60, posy-75+leftLineLength);
    line(posx-55, posy-75, posx-55, posy-75+leftLineLength);
    pop();
  }



}




function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
