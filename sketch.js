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
  "point1X": 30, "point1Y": -70,
  
  "point2X": 60, "point2Y": 0,
  
  "point3X": 10, "point3Y": -20,
  
  "point4X": 50, "point4Y": -20,
  
  "point5X": 7, "point5Y": -12,
  
  "point6X": 20, "point6Y": -12
}

const letterB = {
  "point1X": 0, "point1Y": -70,
  
  "point2X": 50, "point2Y": -35,
  
  "point3X": 50, "point3Y": -35,
  
  "point4X": 0, "point4Y": 0,
  
  "point5X": 50, "point5Y": -35,
  
  "point6X": 15, "point6Y": -35
}

const letterC = {
  "point1X": 0, "point1Y": -70,
  
  "point2X": 50, "point2Y": -70,
  
  "point3X": 50, "point3Y": 0,
  
  "point4X": 0, "point4Y": 0,
  
  "point5X": 50, "point5Y": 0,
  
  "point6X": 50, "point6Y": -15
}

const colorFront  = "#f8f8ff";
const colorBack   = "#f8f8ff";
const colorStroke = "#ffc482";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}



function drawLetter(posX, posY, letterData){
  //determine parameters for lines

  line(posX, posY, posX+letterData["point1X"], posY+letterData["point1Y"]);

  line(posX+letterData["point1X"], posY+letterData["point1Y"], posX+letterData["point2X"], posY+letterData["point2Y"]);
  line(posX+letterData["point3X"], posY+letterData["point3Y"], posX+letterData["point4X"], posY+letterData["point4Y"]);
  line(posX+letterData["point5X"], posY+letterData["point5Y"], posX+letterData["point6X"], posY+letterData["point6Y"]);
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
