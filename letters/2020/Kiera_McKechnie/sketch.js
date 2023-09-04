const canvasWidth = 960;
const canvasHeight = 500;


//Edited parameters that make each letter unique
const letterA = {
        "offsetx": 50,
        "offsety": 170,
        "linex1": 0,
        "linex2": -40,
        "liney1": 0,
        "liney2": -60,
        "numRaysVal": 10,
        "numRaysVal2": 1,
        "rotateVal": 130,
        "rangeVal": 140,
        "rayAmount": 10,
        "strokeVal": 5,
        "arcStroke": 8
}
const letterB = {
        "offsetx": 50,
        "offsety": 170,
        "linex1": 0,
        "linex2": -45,
        "liney1": 25,
        "liney2": -60,
        "numRaysVal": 16,
        "numRaysVal2": 1,
        "rotateVal": 130,
        "rangeVal": 140,
        "rayAmount": 10,
        "strokeVal": 5,
        "arcStroke": 8
}
const letterC = {
        "offsetx": 62,
        "offsety": 145,
        "linex1": 36,
        "linex2": 0,
        "liney1": 56,
        "liney2": 0,
        "numRaysVal": 8,
        "numRaysVal2": 12.5,
        "rotateVal": 32.4,
        "rangeVal": 152,
        "rayAmount": 20,
        "strokeVal": 5,
        "arcStroke": 8 
}

// These are the different colours in the rainbow and rays 
const colorFont1  = "#9BEDFF"; 
const colorFont2  = "#DD9BFF"; 
const colorFont3   = "#BDFF9B";
const colorFont4   = "#FFE19B";
const colorFont5   = "#F7347D";
const colorBack    = "#FFFFFF";

let y;


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');


angleMode(DEGREES);
  // with no animation, redrawing the screen is not necessary
  noLoop();
}


function drawLetter(posx, posy, letterData) { 

  // Parameters that determine characteristics for ray shape
  let size2 = letterData["size"]; // Did not use this parameter
  let pos2x = posx + letterData["offsetx"]; // X position of each letter
  let pos2y = posy + letterData["offsety"]; // Y position of each letter
  let linex1 = 0 + letterData["linex1"]; // X-Coordinate of the first point
  let linex2 = 0 + letterData["linex2"]; // Y-Coordinate of the first point
  let liney1 = 0 + letterData["liney1"]; // X-Coordinate of the second point
  let liney2 = 0 + letterData["liney2"]; // Y-Coordinate of the second point
  let numRaysVal = 0 + letterData["numRaysVal"]; // Pushes the rays all together or moves them further apart
  let numRaysVal2 = 0 + letterData["numRaysVal2"]; // Moves rays around, rotates them differently 
  let rotateVal = 0 + letterData["rotateVal"]; // Determines how far apart rays are from one another, rotates them further 
  let rangeVal = 0 + letterData["rangeVal"]; // Determines the range that the rays are rotating; around the rainbow
  let rayAmount = 0 + letterData["rayAmount"]; // Determines the amount of lines drawn that make up the rays
  let strokeVal = 0 + letterData["strokeVal"]; // Determines the stroke of each line that make up the rays 
  let arcStroke = 0 + letterData["arcStroke"]; // Determines the stroke of the arcs that make up the rainbow


// Code for drawing the rainbow
push();
translate(posx, posy);
rotate(7);
  noFill();
  strokeWeight(arcStroke);
  stroke(colorFont5);
  arc(0, 0, 60, 60, 160, PI + QUARTER_PI, TWO_PI); 
  stroke(colorFont4);
  arc(0, 0, 49, 49, 160, PI + QUARTER_PI, TWO_PI);
  stroke(colorFont3);
  arc(0, 0, 38, 38, 160, PI + QUARTER_PI, TWO_PI);
  stroke(colorFont1);
  arc(0, 0, 28, 28, 160, PI + QUARTER_PI, TWO_PI);
  stroke(colorFont2);
  arc(0, 0, 12, 12, 160, PI + QUARTER_PI, TWO_PI);

// Code for drawing the rays
var colorArray = [colorFont1, colorFont2, colorFont3, colorFont4, colorFont5];
push();
let range = rangeVal;
let numRays = numRaysVal;
rotate(-(range/2)); 

// For-loop allows each ray to be drawn precisely and evenly
for (i = 0; i < rayAmount; i ++){ 
// This rotates the lines to be spread in the 'ray' shape
   rotate(rotateVal / numRays - numRaysVal2); 
  strokeWeight(strokeVal);
  stroke(colorArray[i % colorArray.length]); // This allows the code to cycle through the different colours, so each ray is a different colour of the rainbow
 line(linex1, linex2, liney1, liney2) 

}

pop();
pop();
}

function draw () {
  background(colorBack);

  // Compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // Draw the letters A, B, C from saved data
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
