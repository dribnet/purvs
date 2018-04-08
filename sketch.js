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


//line1
 "x": 0,
 "y": -50,
 "x2": 25,
 "y2": 50,

 //line2
 "x3": 0,
 "y3": -50,
 "x4": -25,
 "y4": 50,

 //line3
 "x5": -20,
 "y5": 30,
 "x6": 20,
 "y6": 30,
}

const letterB = {

//line1
  "x": 0,
 "y": -50,
 "x2": 0,
 "y2": 50,


//line2
 "x3": 0,
 "y3": 50,
 "x4": 30,
 "y4": 30,


//line3
 "x5": 30,
 "y5": 30,
 "x6": 0,
 "y6": 30,


}

const letterC = {

//line1
 "x": 0,
 "y": -20,
 "x2": 0,
 "y2": 20,

 //line2
 "x3": 0,
 "y3": -20,
 "x4": 25,
 "y4": -50,

 //line3
 "x5": 0,
 "y5": 20,
 "x6": 25,
 "y6": 50,
}

const colorFront  = "#199cff";
const colorBack   = "#a097c4";
const colorStroke = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(x, y, letterData) {

   let posx = x + letterData["x"];
  let posy = y + letterData["y"];

  let pos2x = x + letterData["x2"];
  let pos2y = y + letterData["y2"];

  let pos3x = x + letterData["x3"];
  let pos3y = y + letterData["y3"];

  let pos4x = x + letterData["x4"];
  let pos4y = y + letterData["y4"];

  let pos5x = x + letterData["x5"];
  let pos5y = y + letterData["y5"];

  let pos6x = x + letterData["x6"];
  let pos6y = y + letterData["y6"];


  line(posx,posy,pos2x,pos2y)
  line(pos3x,pos3y,pos4x,pos4y)
  line(pos5x,pos5y,pos6x,pos6y)





}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x  -200, center_y, letterA);
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
