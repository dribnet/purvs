const canvasWidth = 960;
const canvasHeight = 500;

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

const weight = 5;

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
  "initX": 0,
  "initY": -40,
  "width": 80,
  "offsetX": -5,
  "offsetY": 10,
  "modWidth": -10,
  "lineChange": 4,
  "lineSkip": 4
}

const letterB = {
  "initX": 0,
  "initY": -40,
  "width": 80,
  "offsetX": 0,
  "offsetY": 10,
  "modWidth": -10,
  "lineChange": 2,
  "lineSkip": null
}

const letterC = {
  "initX": 0,
  "initY": -40,
  "width": 40,
  "offsetX": 0,
  "offsetY": 10,
  "modWidth": 10,
  "lineChange": 2,
  "lineSkip": null,
  "repeat": 3
}

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  rectMode(CENTER);

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA, letterA["lineSkip"]);
  drawLetter(center_x      , center_y, letterB, letterB["lineSkip"]);
  drawLetter(center_x + 250, center_y, letterC, letterC["lineSkip"]);
}

function drawLetter(posx, posy, letterData, drawn, skip) {
  var posX = posx + letterData["initX"];
  var posY = posy + letterData["initY"];
  var width = letterData["width"];
  var change = letterData["lineChange"];
  var repeat = letterData["repeat"];
  var drawn = 0;

  while(drawn < 9){
    rect(posX, posY, width, weight);
    if((drawn < change) && (skip != drawn) && (drawn != repeat)){
      posX += letterData["offsetX"];
      posY += letterData["offsetY"];
      width += letterData["modWidth"];
    }else if(drawn == repeat){
      posX;
      posY;
      width;
    }else if(drawn == skip){
      break;
    }else{
      posX -= letterData["offsetX"];
      posY += letterData["offsetY"];
      width -= letterData["modWidth"];
    }
    drawn++;
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