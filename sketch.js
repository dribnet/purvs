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

  "size": 80,
  "offsetx": 60,
  "offsety": 60,
  "bool": true,
  "rotation": 45


}

const letterB = {
  "size": 200,
  "offsetx": 0,
  "offsety": -145,
  "bool": false,
  "rotation": 88
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0,
  "bool": false,
  "rotation": 170
}

const backgroundColor  = "#e3eded";
const strokeColor      = "#233f11";

const darkBlue  = "#fcba03";
const lightBlue  = "#03cefc";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);
  angleMode(DEGREES);

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

  // arc(50,50, 100, 100, 0, PI + QUARTER_PI, CHORD);


}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  fill(darkBlue);
  ellipse(posx, posy, 150, 150);
  fill(lightBlue);
  ellipse(pos2x, pos2y, size2, size2);
  
  push();
  rectMode(CENTER);
  translate(posx, posy);
  rotate(letterData["rotation"]);
  rect(0,0, 55, 55);
  pop();

  if(letterData["bool"]){
  push();
  strokeWeight(12.0);
  strokeCap(ROUND);
  fill(255,0,0);
  arc(posx, posy, 80, 80, 50, 275, CHORD);
  pop();
  }
  

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
