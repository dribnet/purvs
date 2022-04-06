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
  "size": 150,
  "offsetx": 10,
  "offsety": 3
}

const letterB = {
  "size": 150,
  "offsetx": 20,
  "offsety": +60//-145
}

const letterC = {
  "size": 150,
  "offsetx": 30
  "offsety": 0


}

const backgroundColor  = "#fddeef";  //hexcolortool.com/fddeef  //#caf0f8
const strokeColor      = "#550632"; //(burgundy) //#03045e

//const darkBlue  = "#0077b6";
const pink  = "#d572b5"; //https://www.hexcolortool.com/#d572b5  //"#90e0ef";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(15); //4

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
  drawLetter(center_x - 200, center_y, letterA); //250
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 200, center_y, letterC); //250
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  //let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  // fill(255, 10, 177); //darkBlue
  // ellipse(posx, posy, 150, 150);
  // fill(lightBlue);
  // ellipse(pos2x, pos2y, size2, size2);


  if ("offsetx": 10) {
    //line(posx, posy-20, posx, posy+26);
    fill(pink);
    rect(pos2x, pos2y,50, 50, 20, 20, 20, 0);
    //triangle(pos2x-45, pos2y, pos2x-20, pos2y-20, pos2x-20, pos2y+20)
  }
  if ("offsetx": 20) {
    line(posx, posy-20, posx, posy+26);
    fill(pink);
    rect(pos2x, pos2y,50, 50, 0, 20, 20, 0);
  }
  if ("offsetx": 30) {
    fill(pink);
    rect(pos2x, pos2y,50, 50, 20, 0, 0, 20);
  }
  else {
    fill(pink);
    rect(pos2x, pos2y,50, 50, 20, 20, 20, 20);
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
