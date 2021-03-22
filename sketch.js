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
  "offsetx": 0,
  "offsety": 55,
  "opacity1": 145,
  "size3": 30,
  "offsetx3": 0,
  "offsety3": -30,
  "opacity2": 145,
  //"circleNumber":
  //"colour": 
}

const letterB = {
  "size": 50,
  "offsetx": 20,
  "offsety": -30,
  "opacity1": 145,
  "size3": 50,
  "offsetx3": 20,
  "offsety3": 30,
  "opacity2": 145,
  //"circleNumber":
  //"colour": 
}

const letterC = {
  "size": 100,
  "offsetx": 50,
  "offsety": 0,
  "opacity1": 145,
  "size3": 80,
  "offsetx3": 0,
  "offsety3": 35,
  "opacity2": 0,
  //"circleNumber":
  //"colour": 
}

const backgroundColor  = (227, 237, 237);
const strokeColor      = (255);

//const darkBlue  = "#199cff";
//const lightBlue  = "#e3eded";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(0);

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
  let size3 = letterData["size3"];
  let pos3x = posx + letterData["offsetx3"];
  let pos3y = posy + letterData["offsety3"];

  let cutoutOpacity1 = letterData["opacity1"]
  let cutoutOpacity2 = letterData["opacity2"]
  


  // draw two circles
  fill(191, 227, 183);
  ellipse(posx, posy, 150, 150);
  fill(255, 255, 255, cutoutOpacity1);
  ellipse(pos2x, pos2y, size2, size2);
  fill(255, 255, 255, cutoutOpacity2);
  ellipse(pos3x, pos3y, size3, size3);


}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
