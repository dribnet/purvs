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
//line 1 
  "pt1x": 100,
  "pt1y": 100,
  "pt2x": 150,
  "pt2y": 150

//line 2
//   "pt3x": 0,1
//   "pt3y": -20
//   "pt4x":
//   "pt4y":

// //line 3
//   "pt5x":
//   "pt5y":
//   "pt6x":
//   "pt6y":
  
// //line 4
//   "pt7x":
//   "pt7y":
//   "pt8x":
//   "pt8y":
}

const letterB = {
//line 1
  "pt1x": 100,
  "pt1y": 15,
  "pt2x": 150,
  "pt2y": 150,

//line 2
//   "pt3x": 0,1
//   "pt3y": -20
//   "pt4x":
//   "pt4y":

// //line 3
//   "pt5x":
//   "pt5y":
//   "pt6x":
//   "pt6y":

// //line 4
//   "pt7x":
//   "pt7y":
//   "pt8x":
//   "pt8y":
}

const letterC = {
//line 1
  "pt1x": 150,
  "pt1y": 150,
  "pt2x": 150,
  "pt2y": 155,

//line 2
//   "pt3x": 0,1
//   "pt3y": -20
//   "pt4x":
//   "pt4y":

// //line 3
//   "pt5x":
//   "pt5y":
//   "pt6x":
//   "pt6y":
  
// //line 4
//   "pt7x":
//   "pt7y":
//   "pt8x":
//   "pt8y":
}

const colorFront  = "#ffbc14";
const colorBack   = "#ffbc14";
const colorStroke = "255";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(3);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(pt1x, pt1y, letterData) {
  // determine parameters for second circle

  
  let posx = pt1x + letterData["pt1x"];
  let posy = pt1y + letterData["pt1y"];

  let pos2x = pt1x + letterData["pt2x"];
  let pos2y = pt1y + letterData["pt2y"];

  // let pos3x = ptx + letterData["pt3x"];
  // let pos3y = pty + letterData["pt3y"];

  // draw circles
  //ellipse(100, 100, 150, 150);
  
  line(posx, posy, pos2x, pos2y);

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
