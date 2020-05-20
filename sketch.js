const canvasWidth = 960;
const canvasHeight = 500;

/* 
 The sixteen parameters per letter:
  * triX1: first x point triangle
  * triY1: first y point triangle
  * triX2: second x point triangle
  * triY2: second y point triangle
  * triX3: third x point triangle
  * triY3: third y point triangle
  * ptX1: first x point triangle
  * ptY1: first y point triangle
  * ptX2: second x point triangle
  * ptY2: second y point triangle
  * ptX3: third x point triangle
  * ptY3: third y point triangle
  * rectL: length of rectangle
  * rectW: width of rectangle
  * rectX: x point of rectangle
  * rectY: y point of rectangle

 *
 */

const letterA = {
  "triX1": 50,
  "triY1": 100,
  "triX2": 80,
  "triY2": 40,
  "triX3": 110,
  "triY3": 100,

  "ptX1": 50,
  "ptY1": 100,
  "ptX2": 80,
  "ptY2": 60,
  "ptX3": 110,
  "ptY3": 100,
  
  "rectX": 50,
  "rectY": 110,
  "rectL": 10,
  "rectW": 60,
  
}

const letterB = {
  "triX1": 200,
  "triY1": 100,
  "triX2": 200,
  "triY2": 40,
  "triX3": 240,
  "triY3": 60,

  "ptX1": 200,
  "ptY1": 123,
  "ptX2": 200,
  "ptY2": 70,
  "ptX3": 240,
  "ptY3": 100,
  
  "rectX": 180,
  "rectY": 40,
  "rectL": 85,
  "rectW": 10,

}

const letterC = { 
  "triX1": 325,
  "triY1": 100,
  "triX2": 325,
  "triY2": 40,
  "triX3": 370,
  "triY3": 40,

  "ptX1": 325,
  "ptY1": 123,
  "ptX2": 325,
  "ptY2": 70,
  "ptX3": 370,
  "ptY3": 123,
  
  "rectX": 305,
  "rectY": 40,
  "rectL": 85,
  "rectW": 10,
  
 
}

const colorFront1  = "#67f08c";
const colorFront2  = "#a4edde";
const colorFront3  = "#ab93fa";
const colorBack    = "#09094f";
const colorStroke  = "#ffffff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle

  
  let triangleX1 = letterData["triX1"];
  let triangleY1 = letterData["triY1"];
  let triangleX2 = letterData["triX2"];
  let triangleY2 = letterData["triY2"];
  let triangleX3 = letterData["triX3"];
  let triangleY3 = letterData["triY3"];

  let pointX1 = letterData["ptX1"];
  let pointY1 = letterData["ptY1"];
  let pointX2 = letterData["ptX2"];
  let pointY2 = letterData["ptY2"];
  let pointX3 = letterData["ptX3"];
  let pointY3 = letterData["ptY3"]

  let rectLen = letterData["rectL"];
  let rectWid = letterData["rectW"];
  let rectX = letterData["rectX"];
  let rectY = letterData["rectY"];
 
  // draw two triangles
  fill(colorFront3);
  triangle(triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3);
  
  fill(colorFront2);
  triangle(pointX1, pointY1, pointX2, pointY2, pointX3, pointY3);

  // draw rectangle
  fill(colorFront1);
  rect(rectX, rectY, rectWid, rectLen);

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
