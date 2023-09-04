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
  "x": 0,
  "y": -120,
  "2x": 50,
  "2y": 100,
  "3x": -50,
  "3y": 100,
    
  "4x": 0,
  "4y": -70,
  "5x": 40,
  "5y": 100,
  "6x": -40,
  "6y": 100

}

const letterB = {
  "x": -30,
  "y": -120,
  "2x": 50,
  "2y": -60,
  "3x": -30,
  "3y": 0,
    
  "4x": -30,
  "4y": 0,
  "5x": 50,
  "5y": 60,
  "6x": -30,
  "6y": 100
}

const letterC = {
  "x": 90,
  "y": -120,
  "2x": 50,
  "2y": 0,
  "3x": -50,
  "3y": 0,
    
  "4x": 50,
  "4y": 0,
  "5x": -50,
  "5y": 0,
  "6x": 90,
  "6y": 120
}

const colorFront  = "#6ADEDD";
const colorBack   = "#D4FFE5";
const colorStroke = "#DE5A78";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(5);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
    //parameters for triangle 1
  let pos1x = posx + letterData["x"];
  let pos1y = posy + letterData["y"];
  let pos2x = posx + letterData["2x"];
  let pos2y = posy + letterData["2y"];
  let pos3x = posx + letterData["3x"];
  let pos3y = posy + letterData["3y"];
   //parameters for triangle 2 
  let pos4x = posx + letterData["4x"];
  let pos4y = posy + letterData["4y"];
  let pos5x = posx + letterData["5x"];
  let pos5y = posy + letterData["5y"];
  let pos6x = posx + letterData["6x"];
  let pos6y = posy + letterData["6y"];

    //draw 2 triangles
    triangle(pos1x, pos1y, pos2x, pos2y, pos3x, pos3y);
    triangle(pos4x, pos4y, pos5x, pos5y, pos6x, pos6y);   
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, 10, letterA);
  drawLetter(center_x      , center_y, 10, letterB);
  drawLetter(center_x + 250, center_y, 10, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
