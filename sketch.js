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
  "offsetx": 35,
  "offsety": 70,
}

const letterB = {
  "size": 10,
  "offsetx": 40,
  "offsety": 70
}

const letterC = {
  "size": 100,
  "offsetx": 50,
  "offsety": 25
}

const backgroundColor  = "#e3eded";
const strokeColor      = "#233f11";

const darkBlue  = "#199cff";
//const lightBlue  = "#59ccff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
  angleMode(DEGREES);
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
  

//potential parameters set by true/false statements or if statements. so maybe parametrs could include
// "verticalline"
// "horizontalline"
// "arc1" etc. something like that 

noFill();
stroke(0, 50);
  arc(posx, posy, 100, 100, 0, 45);
  arc(posx, posy, 100, 100, 45, 90);
  arc(posx, posy, 100, 100, 90, 135);
  arc(posx, posy, 100, 100, 135, 180);
  arc(posx, posy, 100, 100, 180, 225);
  arc(posx, posy, 100, 100, 225, 270);
  arc(posx, posy, 100, 100, 270, 315);
  arc(posx, posy, 100, 100, 315, 360);

  line(posx, posy, posx, posy-50)
  line(posx, posy, posx, posy+50)
  line(posx, posy, posx-50, posy)
  line(posx, posy, posx+50, posy)
  line(posx, posy, posx-35, posy-35)
  line(posx, posy, posx+35, posy-35)
  stroke(0);
  line(posx, posy, posx+35, posy+35)
  line(posx, posy, posx-35, posy+35)

}




function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
