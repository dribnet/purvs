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

  "topRectWidth": 130,
  "middleRectWidth": 130,
  "bottomRectWidth": 0,
  "topRectHeight": 30,
  "middleRectHeight": 30,
  "bottomRectHeight": 0,
  "leftRectWidth": 30,
  "leftRectHeight": 180,
  "rightRectWidth": 30,
  "rightRectHeight": 180,
  "size": 80,
  "offsetx": 0,
  "offsety": 35,
  "rotateValue": 90

}

const letterB = {

  "topRectWidth": 130,
  "middleRectWidth": 130,
  "bottomRectWidth": 130,
  "topRectHeight": 30,
  "middleRectHeight": 30,
  "bottomRectHeight": 30,
  "leftRectWidth": 30,
  "leftRectHeight": 180,
  "rightRectWidth": 30,
  "rightRectHeight": 180,
  "size": 150,
  "offsetx": 0,
  "offsety": -145



}

const letterC = {

  "topRectWidth": 130,
  "middleRectWidth": 0,
  "bottomRectWidth": 130,
  "topRectHeight": 30,
  "middleRectHeight": 0,
  "bottomRectHeight": 30,
  "leftRectWidth": 30,
  "leftRectHeight": 180,
  "rightRectWidth": 0,
  "rightRectHeight": 0,
  "size": 100,
  "offsetx": 30,
  "offsety": 0

}



function setup () {

  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(25,25,112);
  angleMode(DEGREES);
  strokeWeight(15);

}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  // let i = letterData["shapeType"];
  // let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let topRectW = letterData["topRectWidth"];
  let middleRectW = letterData["middleRectWidth"];
  let botRectW = letterData["bottomRectWidth"];
  let topRectH = letterData["topRectHeight"];
  let middleRectH = letterData["middleRectHeight"];
  let botRectH = letterData["bottomRectHeight"];
  let leftRectW = letterData["leftRectWidth"];
  let leftRectH = letterData["leftRectHeight"];
  let rightRectW = letterData["rightRectWidth"];
  let rightRectH = letterData["rightRectHeight"];

  fill(255,192,203);
    rect(posx,posy - 80,leftRectW,leftRectH); //left strip (A,B,C)
    rect(posx + 100, posy - 80, rightRectW, rightRectH); //right strip (A,B)
    rect(posx,posy,middleRectW, middleRectH); //middle  strip (A,B)
    ellipse(posx+65,posy-70,130,40); //top (A,B,C)
    ellipse(posx+65,posy+100,botRectW, botRectH); //bottom  (B,C)
    
}

function draw () {

  
  background(176,196,222);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 200, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 200, center_y, letterC);

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}