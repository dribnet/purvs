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
  "arch":90,
  "arcw": 270,
  "s1": 180,
  "start":20,
  "stop": 90,

//Rec
  "arch1":80,
  "arcw1": 185,
  "offsetx1":25,
  "offsety1":0,
  "angel": 60,
}




const letterB = {
  "arch":270,
  "arcw":90,
  "s1": 180,
  "start":20,
  "stop": 100,

//Rec
  "arch1":80,
  "arcw1":250,
  "offsetx1":-70,
  "offsety1":-60,
  "angel": 60,
 
}

const letterC = {
  
 "arch":90,
  "arcw": 270,
  "s1": 180,
  "start":20,
  "stop": 90,
 
}

const colorFront1  = "#3e2080";  //purple
const colorFront2  = "#ffda0a";  //yellow
const colorFront3  = "#ffef42";
const colorFront4  = "#ffd336";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  // stroke(colorStroke);
  // strokeWeight(1);
 noStroke();
 angleMode(DEGREES);
  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy,letterData) {
  // determine parameters for second circle
  let size1x = letterData["arch"];
  let size1y = letterData["arcw"];
  let arcSize1 = letterData["s1"]
  let pos1x = posx + letterData["start"];
  let pos1y = posy + letterData["stop"];

  let size2x = letterData["arch1"];
  let size2y = letterData["arcw1"];
  let pos2x = posx + letterData["offsetx1"];
  let pos2y = posy + letterData["offsety1"];
  let angel1 = letterData["angel"]
  
  
  fill(colorFront1);
  arc(pos1x,pos1y,arcSize1,arcSize1,size1x,size1y);
  
  fill(colorFront2);
  rect(pos2x, pos2y, size2x, size2y,0,0,0,angel1);

  
  
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
  // drawLetter(center_x       , center_y LetterD);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
