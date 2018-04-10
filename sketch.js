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
  "size":150,
  "size3": 135,
  "x1": -10,
  "y1": 0,
  "x2":90,
  "y2":0,
}

const letterB = {
  "size": 150,
  "size3": 165,
  "x1": 20,
  "y1": 0,
  "x2":0,
  "y2": -55,
}

const letterC = {
  "size": 150,
  "size3": 185,
  "x1": 30,
  "y1": 0,
  "x2":30,
  "y2": 0,
}



const color1  = 'rgba(250,210,0, 0.75)';
const color2 = 'rgba(237,33,44, 0.75)';
const color3 = 'rgba(31,36,102, 0.75)';
const colorBack   = "#e3eded";
const colorStroke = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  angleMode(DEGREES);
  
  // color/stroke setup

  // stroke(colorStroke);
  // strokeWeight(2);
  noStroke();

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let size3 = letterData["size3"];
  let size4 = letterData["size4"];

  let posx1 = posx + letterData["x1"];
  let posy1 = posy + letterData["y1"];
  let posx2 = posx + letterData["x2"];
  let posy2 = posy + letterData["y2"];

  // draw two circles

  fill(color2);
  arc(posx1, posy1, size2, size2,180,360);
  
  fill(color3);
  arc(posx1, posy1, size2, size2, 0, 180);
  
  fill(color1);
  arc(posx2, posy2, size3, size3, 90, 270);


  // ellipse(posx, posy, 150, 150);
  // ellipse(pos2x, pos2y, size2, size2);
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
