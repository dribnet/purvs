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

  "archw": 100,
  "archh": 80,
  "ell": 80,
     "point1": -30,
   "point2": 50,
   "point3": 30,
   "point4": 50,
   "bx": 0,
  "by": 5,
     "bx1": 0,
  "by1": - 20
}

const letterB = {
  "archw": 150,
  "archh": 80,
  "ell": 80,
     "point1": 50,
   "point2": -30,
   "point3": 50,
   "point4": 30,
   "bx": 10,
  "by": 23,
     "bx1": 10,
  "by1": -23
}

const letterC = {
  "archw": 100,
  "archh": 100,
  "ell": 80,
   "point1": 50,
   "point2": -30,
   "point3": 50,
   "point4": 30,
  "bx": 15,
  "by": 12,
   "bx1": 15,
  "by1": -12

  
}



const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";
const colorball  = "#FF9270";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);
  angleMode(DEGREES);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle

  let size1 = letterData["archh"];
  let size2 = letterData["archw"];
  let size3 = letterData["ell"];
  let c1 = letterData["point1"];
  let c2 = letterData["point2"];
  let c3 = letterData["point3"];
  let c4 = letterData["point4"];
  let posbx = posx + letterData["bx"];
  let posby = posy + letterData["by"];
   let posb1x = posx + letterData["bx1"];
  let posb1y = posy + letterData["by1"];


  // draw two circles
  noStroke();
  fill(colorFront1);
  ellipse(posx, posy, size3);

  fill(colorball)
 ;
  ellipse(posbx, posby, 20);
  ellipse(posb1x, posb1y, 20);


  //arc(posx, posy, size2, 100, 100, 0);
  fill(colorball);
  //ellipse(pos2x, pos2y, size2, size2);
  //arc(posx, posy, size2, size1, 180, 0);
  triangle(posx, posy, posx + c1, posy + c2, posx + c3, posy + c4);

}

function draw () {
  // clear screen
  background(colorball);

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