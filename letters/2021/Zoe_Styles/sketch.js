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
  "size": 100,
  "offsetx": 25,
  "offsety": 100,
  "smallXPos": 40,
  "smallYPos" : 130
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -175,
  "smallXPos": 15,
  "smallYPos" : 20,
  "smallX2Pos": 15,
  "smallY2Pos" : -160
}

const letterC = {
  "size": 100,
  "offsetx": 100,
  "offsety": 25,
  "smallXPos": 130,
  "smallYPos" : 40
}

const backgroundColor  = "#102C46";
const strokeColor      = "#233f11";

const darkPink  = "#8C6C7F";
const lightBlue  = "#6C8A8C";
const lighterBlue = "#B5D6F5";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

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
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  let SmallerxPosition =posx + letterData["smallXPos"]
  let SmalleryPosition =posy + letterData["smallYPos"]

  let Smallerx2Position =posx + letterData["smallX2Pos"]
  let Smallery2Position =posy + letterData["smallY2Pos"]
  
  // draw two circles
  noStroke();
  fill(darkPink);
  rect(posx, posy, 150, 150);

  fill(lightBlue);
  rect(pos2x, pos2y, size2, size2);

  fill(backgroundColor);
  rect(SmallerxPosition, SmalleryPosition, size2-30,size2-30);
  rect(Smallerx2Position, Smallery2Position, size2-30,size2-30);

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
