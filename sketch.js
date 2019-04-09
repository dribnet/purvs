
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
    // line 1
  "x1":50,
  "y1":200,

   // line 2
  "x3":0,
  "y3":180,

   // line 4
  "x5":0,
  "y5":180,
  "x6":50,
  "y6":180,

    // line 3
  "x7":50,
  "y7":200,
  "x8":75,
  "y8":200
}

const letterB = {
    // line 1
  "x1":50,
  "y1":200,

    // line 2
  "x3":50,
  "y3":0,

   // line3
  "x5":50,
  "y5":100,
  "x6":100,
  "y6":150,

   // line4
  "x7":100,
  "y7":150,
  "x8":50,
  "y8":200
}

const letterC = {
  "x1":50,
  "y1":200,

    // line 2
  "x3":100,
  "y3":100,

   // line3
  "x5":50,
  "y5":200,
  "x6":100,
  "y6":200,

   // line4
  "x7":50,
  "y7":100,
  "x8":50,
  "y8":200
}

const colorFront1  = "#ffb266";
const colorFront2  = "#ffe5cc";
const colorBack    = "#CCCCFF";
const colorStroke  = "#FFFFFF";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}


function drawLetter(posx, posy, letterData) {
  // determine parameters for lines
  
   posx = letterData["x1"];
   posy = letterData["y1"];
   pos2x = letterData["x2"];
   pos2y = letterData["y2"];


   pos3x = letterData["x3"];
   pos3y = letterData["y3"];
   pos4x = letterData["x4"];
   pos4y = letterData["y4"];


   pos5x = letterData["x5"];
   pos5y = letterData["y5"];
   pos6x = letterData["x6"];
   pos6y = letterData["y6"];

   pos7x = letterData["x7"];
   pos7y = letterData["y7"];
   pos8x = letterData["x8"];
   pos8y = letterData["y8"];


  // draw lines
  fill(colorFront1);
  line(posx, posy, 50, 100);
  fill(colorFront2);
  line(pos3x, pos3y, 50, 100);
  fill(colorFront1);
  line(pos5x, pos5y, pos6x, pos6y);
  fill(colorFront2);
  line(pos7x, pos7y, pos8x, pos8y);
}

function draw () {
  // clear screen
  background(colorBack);
   var startpoint= 0;
   var endpoint = PI;

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
