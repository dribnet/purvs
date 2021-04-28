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
  "x1" : 100,
  "y1" : 110,  
  "x2" : 50,
  "y2" : 0,
  "x3" : 0,
  "y3" : 190,
    
  "circlex" : 55,
  "circley" : 60,
  "circled" : 40
}

const letterB = {
     "x1" : 100,
      "y1" : 64,  
      "x2" : 7.01,
      "y2" : 2,
      "x3" : 12,
      "y3" : 100,
      
      "a1" : 100,
      "b1" : 156,
      "a2" : 12,
      "b2" : 42,
      "a3" : 0,
      "b3" : 178,

      "circlex" : 55,
     "circley" : 60,
      "circled" : 40
}

const letterC = {
  "x1" : 0,
  "y1" : 0,  
  "x2" : 100,
  "y2" : 0,
  "x3" : 50,
  "y3" : 100
}

const backgroundColor  = "#e3eded";
const strokeColor      = "#FCDEBE";

const darkBlue  = "#221D23";
const lightBlue  = "#DB162F";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let bottomleftx = posx+letterData["x1"];
  let bottomlefty = posy+letterData["y1"];
  let bottomrightx = posx+letterData["x2"];
  let bottomrighty = posy+letterData["y2"];
  let topx = posx+letterData["x3"];
  let topy = posy+letterData["y3"];

  // draw two circles
  fill(darkBlue);
  triangle(bottomleftx,bottomlefty,bottomrightx,bottomrighty,topx,topy);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
