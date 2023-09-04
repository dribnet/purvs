const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  "offsetX1": 85,
  "offsetX2": 80,
  "offsetX3": 85,
  "offsetX4": 75,
 
  "offsetY1": 20,
  "offsetY2": 30,
  "offsetY3": 20,
  "offsetY4": 50

}

const letterB = {
  "offsetX1": 65,
  "offsetX2": 85,
  "offsetX3": 90,
  "offsetX4": 95,
 
  "offsetY1": 50,
  "offsetY2": 25,
  "offsetY3": 15,
  "offsetY4": 5 

}

const letterC = {
  "offsetX1": 85,
  "offsetX2": 80,
  "offsetX3": 75,
  "offsetX4": 80,
 
  "offsetY1": 50,
  "offsetY2": 55,
  "offsetY3": 65,
  "offsetY4": 55
 
}

const colorBack    = "#FFD745";
const colorStroke  = "#FFFF00";
const lineSpacing = 10;

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
  // determine parameters for lines
  let Yshift1 = letterData["offsetX1"];
  let Yshift2 = letterData["offsetX2"];
  let Yshift3 = letterData["offsetX3"];
  let Yshift4 = letterData["offsetX4"];
 
  let length1 = letterData["offsetY1"];
  let length2 = letterData["offsetY2"];
  let length3 = letterData["offsetY3"];
  let length4 = letterData["offsetY4"]; 

  // draw four lines
  line(posx + lineSpacing, posy + Yshift1, posx + lineSpacing, posy + length1 + Yshift1);
  line(posx + lineSpacing*2, posy + Yshift2, posx + lineSpacing*2, posy + length2 + Yshift2);
  line(posx + lineSpacing*3, posy + Yshift3, posx + lineSpacing*3, posy + length3 + Yshift3);
  line(posx + lineSpacing*4, posy + Yshift4, posx + lineSpacing*4, posy + length4 + Yshift4);
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
