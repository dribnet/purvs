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
  "size": 80, //80
  "offsetx": 0,
  "offsety": 35
}

const letterB = {
  "size": 150, //150
  "offsetx": 0,
  "offsety": -145
}

const letterC = {
  "size": 100, //100
  "offsetx": 30,
  "offsety": 0
}

const colorFont1  = "#9BEDFF"; 
const colorFont2  = "#DD9BFF"; 
const colorFont3   = "#BDFF9B";
const colorFont4   = "#FFE19B";
const colorFont5   = "#F7347D";
const colorBack    = "#e3eded";
let y;

//const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  //stroke(colorStroke);
 // strokeWeight(7);
angleMode(DEGREES);
  // with no animation, redrawing the screen is not necessary
  noLoop();
}



function drawLetter(posx, posy, letterData) { //where the action happens
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

translate(posx, posy);

//draw rainbow
  noFill();
  strokeWeight(8);
  stroke(colorFont5);
  arc(0, 0,98, 98, 170, PI + QUARTER_PI, TWO_PI); //posx posy
  stroke(colorFont4);
  arc(0, 0,87, 87, 170, PI + QUARTER_PI, TWO_PI);
  stroke(colorFont3);
  arc(0, 0,76, 76, 170, PI + QUARTER_PI, TWO_PI);
  stroke(colorFont1);
  arc(0, 0,65, 65, 170, PI + QUARTER_PI, TWO_PI);
  stroke(colorFont2);
  arc(0, 0,50, 50, 170, PI + QUARTER_PI, TWO_PI);

//find centre point for translate, stead of posx & posy draw at 0,0, always mojello 1 over the length

//drawrays 
var colorArray = [colorFont1, colorFont2, colorFont3,colorFont4,colorFont5];
push();
let range = 140;
let numRays = 10;
rotate(-(range/2));

for (i = 0; i < 10; i ++){
  strokeWeight(5);
  stroke(colorArray[i % colorArray.length]);
 line(0, -100, 0, -200) 
 rotate(140 / numRays - 1);
}

pop();
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
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
