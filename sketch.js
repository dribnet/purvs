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
  "start":30,
  "stop": 90,

//Rec
  "arch1":80,
  "arcw1": 185,
  "offsetx1":30,
  "offsety1":0,
  "angel": 60,

  //ellpise

  "arch2":215,
  "arcw2":340,
  "s2":40,

}
  
  
const letterB = {
  "arch":270,
  "arcw":90,
  "s1": 180,
  "start":10,
  "stop": 100,

//Rec
  "arch1":80,
  "arcw1":190,
  "offsetx1":-70,
  "offsety1":-1,
  "angel": 60,
  "angel1":60,

 "arch2":530,
 "arcw2": 350,
 "s2":40,
 
}

const letterC = {
  
  "arch":90,
  "arcw":270,
  "s1": 180,
  "start":20,
  "stop": 90,

 "arch2":710,
 "arcw2":340,
 "s2":40,
 
}

const colorFront1  = "#480099";  //purple
const colorFront2  = "#e8c70c";  //yellow
const colorFront3  = "#ba6900";  //
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
  let angel2 = letterData["angel1"]

  let size3x = letterData["arch2"];
  let size3y = letterData["arcw2"];
  let arcSize2 = letterData["s2"];
  
  
  
  fill(colorFront2);
  arc(pos1x,pos1y,arcSize1,arcSize1,size1x,size1y);
  
  fill(colorFront1)
  rect(pos2x, pos2y, size2x, size2y,0,angel2,0,angel1);
 
 fill(colorFront3);
 ellipse(size3x,size3y,arcSize2,arcSize2);
  
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
