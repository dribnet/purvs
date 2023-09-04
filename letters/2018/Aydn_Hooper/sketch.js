
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


//left
"x3": -20,
 "y3": -45,
 "x4": -20,
 "y4": 45,
 
 //right
 "x": 30,
 "y": -45,
 "x2": 30,
 "y2": 45,

 //mid
 "x5": -15,
 "y5": 0,
 "x6": 25,
 "y6": 0,

 //top
 "x7": -15,
 "y7": -50,
 "x8": 25,
 "y8": -50,
}

const letterB = {

//left
  "x": 0,
 "y": -45,
 "x2": 0,
 "y2": 45,

//top
"x3": 5,
 "y3": -50,
 "x4": 45,
 "y4": -50,

//mid
 "x5": 5,
 "y5": 0,
 "x6": 45,
 "y6": 0,

//right
"x7": 50,
"y7": -45,
"x8": 50,
"y8": 45,

//bot
"x9": 5,
"y9": 50,
"x10": 45,
"y10": 50,

}

const letterC = {

//left
 "x": 0,
 "y": -45,
 "x2": 0,
 "y2": 45,

 //top
 "x3": 5,
 "y3": -50,
 "x4": 40,
 "y4": -50,

 //bot
 "x5": 5,
 "y5": 50,
 "x6": 40,
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
  fill(255);
  stroke(255);
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

  let pos7x = x + letterData["x7"];
  let pos7y = y + letterData["y7"];

  let pos8x = x + letterData["x8"];
  let pos8y = y + letterData["y8"];

 let pos9x = x + letterData["x9"];
 let pos9y = y + letterData["y9"];

 let pos10x = x + letterData["x10"];
 let pos10y = y + letterData["y10"];

push();
stroke(255,105,180);
strokeWeight(6);
smooth();
noFill();
  line(posx,posy,pos2x,pos2y);
  line(pos3x,pos3y,pos4x,pos4y);
  line(pos5x,pos5y,pos6x,pos6y);
  line(pos7x,pos7y,pos8x,pos8y);
  line(pos9x,pos9y,pos10x,pos10y);
pop();
filter(BLUR,6);

push();
stroke(255);
strokeWeight(3);
smooth();
noFill();
  line(posx,posy,pos2x,pos2y);
  line(pos3x,pos3y,pos4x,pos4y);
  line(pos5x,pos5y,pos6x,pos6y);
  line(pos7x,pos7y,pos8x,pos8y);
  line(pos9x,pos9y,pos10x,pos10y);

pop();




}

function draw () {
  // clear screen
  background(0);

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