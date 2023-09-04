const canvasWidth = 960;
const canvasHeight = 500;
const PI = 3.14159;
const HALF_PI = PI/2;
const TWO_PI = PI*2;

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
    "triX1" : 245,
    "triY1" : 185,
    "triX2" : 200,
    "triY2" : 243,
    "triX3" : 290,
    "triY3" : 243,
    "rectX" : 213,
    "rectY" : 237,
    "rectW" : 65,
    "rectH" : 65,
    "arcX" : 0,
    "arcY" : 0,
    "arcS" : 0,
    "arcE" : 0,
    "arcW" : 0,
    "arcH" : 0
}

const letterB = {
    "triX1" : 0,
    "triY1" : 0,
    "triX2" : 0,
    "triY2" : 0,
    "triX3" : 0,
    "triY3" : 0,
    "rectX" : 427,
    "rectY" : 247,
    "rectW" : 55,
    "rectH" : 55,
    "arcX" : 427,
    "arcY" : 235,
    "arcS" : PI+HALF_PI,
    "arcE" : HALF_PI,
    "arcW" : 80,
    "arcH" : 70
}

const letterC = {
    "triX1" : 0,
    "triY1" : 0,
    "triX2" : 0,
    "triY2" : 0,
    "triX3" : 0,
    "triY3" : 0,
    "rectX" : 665,
    "rectY" : 185,
    "rectW" : 25,
    "rectH" : 117,
    "arcX" : 665,
    "arcY" : 245,
    "arcS" : HALF_PI,
    "arcE" : PI+HALF_PI,
    "arcW" : 10,
    "arcH" : 10
}

const colorFront1  = "#8886a1";
const colorFront2  = "#8886a1";
const colorBack    = "#e4e4e4";
const colorStroke  = "#832690";



function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  noStroke();


  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  //let size2 = letterData["size"];
  //let pos2x = posx + letterData["offsetx"];
  //let pos2y = posy + letterData["offsety"];
  let triangleX1 = letterData["triX1"];
  let triangleY1 = letterData["triY1"];
  let triangleX2 = letterData["triX2"];
  let triangleY2 = letterData["triY2"];
  let triangleX3 = letterData["triX3"];
  let triangleY3 = letterData["triY3"];
  let rectangleX = letterData["rectX"];
  let rectangleY = letterData["rectY"];
  let rectangleWidth = letterData["rectW"];
  let rectangleHeight = letterData["rectH"];
  let arcposX = letterData["arcX"];
  let arcposY = letterData["arcY"];
  let arcStart = letterData["arcS"];
  let arcEnd = letterData["arcE"];


  // draw two circles
  //fill(colorFront1);
  //rect(posx, posy, 30, 150);
  //fill(colorFront2);
  //rect(pos2x, posy, 30, 150);



  fill(204,133,151);
  noStroke();
  arc(arcposX,arcposY,100,100,arcStart,arcEnd);
  fill(38,53,84);
  rect(rectangleX,rectangleY,rectangleWidth,rectangleHeight);
  fill(70,103,96);
  triangle(triangleX1,triangleY1,triangleX2,triangleY2,triangleX3,triangleY3);
  


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
