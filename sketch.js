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
  "x": -40,
  "y": 0,   // line
  "x2": 60,
  "y2": 0,
  "circX":  15,
  "circY": 15,
  
  
}

const letterB = {
  "x": -60,
  "y": 100,   // line
  "x2": -60,
  "y2": -105,
  "circX": 15,
  "circY": 15 ,
  "circX1": 15 ,
  "circY1": 15,
  "circX2": 15,
  "circY2":  15,
  
 
}

const letterC = {
  "circX3":15 ,
  "circY3": 15 ,
  "circX4":15,
  "circY4":15 ,
  "start":100 ,
  "stop": 170,
  "start1":210 ,
  "stop1": 315,
  
}

const colorBgd    = "#e5d3b3"; // tan background
const colorStroke  = "#d2b48c"; // darker tan stroke

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(30);

  // angle mode from radians to degrees for arc
  angleMode(DEGREES)
  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {

  // determine parameters for lines
  let lineX1 = posx + letterData["x"];
  let lineY1 = posy + letterData["y"];
  let lineX2 = posx + letterData["x2"];
  let lineY2 = posy + letterData["y2"];

  // determine start and stop parameters for the arc
  let arcStart = letterData["start"];
  let arcStop = letterData["stop"];
  let arcStart1 = letterData["start1"];
  let arcStop1 = letterData["stop1"];

  //determine circle parameters
  let circPosX = letterData["circX"];
  let circPosY = letterData["circY"];
  let circPosX1 = letterData["circX1"];
  let circPosY1 = letterData["circY1"];
  let circPosX2 = letterData["circX2"];
  let circPosY2 = letterData["circY2"];
  let circPosX3 = letterData["circX3"];
  let circPosY3 = letterData["circY3"];
  let circPosX4 = letterData["circX4"];
  let circPosY4 = letterData["circY4"];
  
  
  // draw arc and line stroke
  noFill();
  arc(posx-33, posy+30, 145, 130, arcStart, arcStop);
  arc(posx-30, posy-40, 145, 130, arcStart1, arcStop1);
  line(lineX1, lineY1, lineX2, lineY2);
 

  // draw circles
  fill(colorStroke);
  strokeWeight(30);
  ellipse(posx+10, posy-95, circPosX, circPosY);
  ellipse(posx+10, posy, circPosX1, circPosY1);
  ellipse(posx+10, posy+95, circPosX2, circPosY2);
  ellipse(posx-114, posy-17, circPosX3, circPosY3);
  ellipse(posx+17, posy+95, circPosX4, circPosY4);
 
}

function draw () {
  // clear screen
  background(colorBgd);

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
