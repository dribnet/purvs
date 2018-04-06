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
  "y": -100,
    "x2": 50,
    "y2": 0,
      "x3": -50,
      "y3": 0,
        "x4": 0,
        "y4": -50,
}

const letterB = {
  "x": -25,
  "y": -100,
    "x2": -25,
    "y2": 0,
      "x3": 15,
      "y3": -10,
        "x4": 15,
        "y4": -30,
}

const letterC = {
  "x": -35,
  "y": -75,
    "x2": -35,
    "y2": -25,
      "x3": 25,
      "y3": -100,
        "x4": 25,
        "y4": 0,
}

const colorFront  = "#ffffff";
const colorBack   = "#232323";
const colorStroke = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(255)
  strokeWeight(2);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(x, y, letterData) {
  // determine parameters for second circle
  let posx = x + letterData["x"];
  let posy = y + letterData["y"];

  let pos2x = x + letterData["x2"];
  let pos2y = y + letterData["y2"];

  let pos3x = x + letterData["x3"];
  let pos3y = y + letterData["y3"];

  let pos4x = x + letterData["x4"];
  let pos4y = y + letterData["y4"];

  // draw four circles
  ellipse(posx, posy, 13, 13);
  ellipse(pos2x, pos2y, 13, 13);
  ellipse(pos3x, pos3y, 13, 13);
  ellipse(pos4x, pos4y, 13, 13);

  line(posx,posy,pos2x,pos2y)
  line(posx,posy,pos3x,pos3y)
  line(posx,posy,pos4x,pos4y)

  line(pos2x,pos2y,posx,posy)
  line(pos2x,pos2y,pos3x,pos3y)
  line(pos2x,pos2y,pos4x,pos4y)

  line(pos3x,pos3y,posx,posy)
  line(pos3x,pos3y,pos2x,pos2y)
  line(pos3x,pos3y,pos4x,pos4y)

  line(pos4x,pos4y,posx,posy)
  line(pos4x,pos4y,pos3x,pos3y)
  line(pos4x,pos4y,pos2x,pos2y)

}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x-200, center_y, letterA);
    drawLetter(center_x, center_y, letterB);
        drawLetter(center_x+200, center_y, letterC);
  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
