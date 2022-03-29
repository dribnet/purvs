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
  "squareX": 0,
  "squareY": -100,
  "squareSize": 100,
  "rectX": 35,
  "rectY": 10,
  "rectWidth": 30,
  "rectHeight": 100,
  "lineX": -47,
  "lineY": -38,
  "lineLength": 100,
  "lineAngle": "vertical"
}

const letterB = {
  "squareX": 15,
  "squareY": 10,
  "squareSize": 110,
  "rectX": 15,
  "rectY": -125,
  "rectWidth": 110,
  "rectHeight": 50,
  "lineX": -50,
  "lineY": -150,
  "lineLength": 215,
  "lineAngle": "vertical"
}

const letterC = {
  "squareX": 30,
  "squareY": 42,
  "squareSize": 50,
  "rectX": -20,
  "rectY": -40,
  "rectWidth": 30,
  "rectHeight": 215,
  "lineX": 5,
  "lineY": -147,
  "lineLength": 50,
  "lineAngle": "horizonal"
}

const backgroundColor  = "#FFFFF0";
const strokeColor = "#000000";
const squareColour = "#FF0000";
const rectColour = "#0000FF";


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

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
  rectMode(CENTER);

  // determine parameters for second circle
  let squareSize = letterData["squareSize"];
  let squareX = posx + letterData["squareX"];
  let squareY = posy + letterData["squareY"];

  let rectWidth = letterData["rectWidth"];
  let rectHeight = letterData["rectHeight"];
  let rectX = posx + letterData["rectX"];
  let rectY = posy + letterData["rectY"];

  let lineX = posx + letterData["lineX"];
  let lineY = posy + letterData["lineY"];
  let lineLength = letterData['lineLength'];

  fill(squareColour);
  rect(squareX, squareY, squareSize);
  fill(rectColour);
  rect(rectX, rectY, rectWidth, rectHeight);


  if(letterData['lineAngle'] == "vertical"){
  //  line(squareX-squareSize/2+3, rectY-rectHeight/2, squareX-squareSize/2+3, rectY+lineLength);
    line(lineX, lineY, lineX, lineY+lineLength);

  }
  else{
    //line(squareX-squareSize/2+3, rectY-rectHeight/2, squareX-squareSize/2+3, rectY+lineLength);
    line(lineX, lineY, lineX+lineLength, lineY);

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
