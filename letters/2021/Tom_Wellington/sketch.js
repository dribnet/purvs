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
  "line1R": 90,
  "line2R": 270,
  "line3R": 90,
  "line4R": 90,
  "arc1Start":225,
  "arc1End":135,
  "arc2Start":0,
  "arc2End":0,
  "lineOn":1,
}

const letterB = {
 "line1R":120,
  "line2R":65,
  "line3R":65,
  "line4R":65,
  "arc1Start":120,
  "arc1End":65,
  "arc2Start":0,
  "arc2End":0,
  "lineOn":1,
}

const letterC = {
 "line1R":0,
  "line2R":0,
  "line3R":0,
  "line4R":0,
  "arc1Start":135,
  "arc1End":45,
  "arc2Start":0,
  "arc2End":0,
  "lineOn":0,
  
}

const backgroundColor  = "#393d3d";
const strokeColor      = "#cbd6d6";



function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(8);

  // with no animation, redrawing the screen is not necessary
  noLoop();
  angleMode(DEGREES)
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
  

//inner line rotation from the centre
  let line1R = letterData["line1R"];
  let line2R = letterData["line2R"];
  let line3R = letterData["line3R"];
  let line4R = letterData["line4R"];
//start and end of outer arcs
  let arc1Start = letterData["arc1Start"];
  let arc1End = letterData["arc1End"];
  let arc2Start = letterData["arc2Start"];
  let arc2End = letterData["arc2End"];

  let lineOn = letterData["lineOn"];

  let lineLength = letterData["lineLength"];

  //if (lineOn<1) { lineLength = 0
  //}

 
  noFill()
 
 
  arc(posx, posy, 150, 150, arc1Start-90, arc1End-90)
  arc(posx, posy, 150, 150, arc2Start-90, arc2End-90)
  

  push();
  translate(posx, posy)
  rotate(line1R+180);
  line(0, 0, 0, lineLength);
  pop();

  push();
  translate(posx, posy)
  rotate(line2R+180);
  line(0, 0, 0, lineLength);
  pop();
   

   push();
  translate(posx, posy)
  rotate(line3R+180);
  line(0, 0, 0, lineLength);
  pop();
   

   push();
  translate(posx, posy)
  rotate(line4R+180);
  line(0, 0, 0, lineLength);
  pop();
   
   
  

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
