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
  //second line
  "point1X": 30, "point1Y": -70,
  "point2X": 60, "point2Y": 0,
  //third line
  "point3X": 10, "point3Y": -20,
  "point4X": 50, "point4Y": -20,
  
  //final line (decoration)
  "point5X": 7, "point5Y": -12,
  "point6X": 20, "point6Y": -12
}

const letterB = {
  //second line
  "point1X": 0, "point1Y": -70,
  "point2X": 50, "point2Y": -35,
  //third line
  "point3X": 50, "point3Y": -35,
  "point4X": 0, "point4Y": 0,
  
  //final line (decoration)
  "point5X": 50, "point5Y": -35,
  "point6X": 15, "point6Y": -35
}

const letterC = {
  //second line
  "point1X": 0, "point1Y": -70,
  "point2X": 50, "point2Y": -60,
  //third line
  "point3X": 50, "point3Y": -10,
  "point4X": 0, "point4Y": 0,
  
  //final line (decoration)
  "point5X": 10, "point5Y": -2,
  "point6X": 10, "point6Y": -25
}

const letterD = {
  //second line
  "point1X": 0, "point1Y": -70,
  "point2X": 50, "point2Y": -35,
  //third line
  "point3X": 50, "point3Y": -35,
  "point4X": 0, "point4Y": 0,
  
  //final line (decoration)
  "point5X": 10, "point5Y": -10,
  "point6X": 10, "point6Y": -25
}

const letterE = {
  //second line
  "point1X": 0, "point1Y": -70,
  "point2X": 50, "point2Y": -70,
  //third line
  "point3X": 50, "point3Y": 0,
  "point4X": 0, "point4Y": 0,
  
  //final line (decoration)
  "point5X": 10, "point5Y": -35,
  "point6X": 35, "point6Y": -35
}

const letterF = {
  //second line
  "point1X": 0, "point1Y": -70,
  "point2X": 50, "point2Y": -70,
  //third line
  "point3X": 10, "point3Y": -70,
  "point4X": 10, "point4Y": -55,
  
  //final line (decoration)
  "point5X": 10, "point5Y": -35,
  "point6X": 35, "point6Y": -35
}


const letterG = {
  //second line
  "point1X": 0, "point1Y": -70,
  "point2X": 50, "point2Y": -60,
  //third line
  "point3X": 50, "point3Y": -10,
  "point4X": 0, "point4Y": 0,
  
  //final line (decoration)
  "point5X": 50, "point5Y": 0,
  "point6X": 50, "point6Y": -15
}

const letterH = {
  //second line
  "point1X": 0, "point1Y": -70,
  "point2X": 0, "point2Y": -60,
  //third line
  "point3X": 0, "point3Y": -35,
  "point4X": 50, "point4Y": -35,
  
  //final line (decoration)
  "point5X": 50, "point5Y": 0,
  "point6X": 50, "point6Y": -70
}

const letterI = {
  //second line
  "point1X": 25, "point1Y": 0,
  "point2X": 25, "point2Y": -70,
  //third line
  "point3X": 0, "point3Y": -70,
  "point4X": 50, "point4Y": -70,
  
  //final line (decoration)
  "point5X": 50, "point5Y": 0,
  "point6X": 25, "point6Y": 0
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


  drawLetter(center_x - 400, center_y, letterA);
  drawLetter(center_x - 300, center_y, letterB);
  drawLetter(center_x - 200, center_y, letterC);
  drawLetter(center_x - 100, center_y, letterD);
  drawLetter(center_x      , center_y, letterE);
  drawLetter(center_x + 100, center_y, letterF);
  drawLetter(center_x + 200, center_y, letterG);
  drawLetter(center_x + 300, center_y, letterH);

  drawLetter(center_x - 400, center_y + 150, letterI);


}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
