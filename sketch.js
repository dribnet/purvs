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
  "offsetx": 0,
  "offsety": 0,
  "boxColour": "#199cff"
}

const letterB = {
  "offsetx": 0,
  "offsety": -145,
  "boxColour": "#59ccff"
}

const letterC = {
  "offsetx": 30,
  "offsety": 0,
  "boxColour": "#53d2dc"
}

const backgroundColor  = "#e3eded";



function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  
  noStroke();
  rectMode(CENTER);

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

  let colour = letterData["boxColour"];
  let triPosX = letterData["offsetx"];
  let triPosY = letterData["offsety"];

  // big square
  fill(colour);
  rect(posx, posy, 150, 150);

  // //little square
  // fill(260);
  // rect(pos2x, pos2y, size2, size2);

  //triangle
  fill(260);
  triangle(posx+triPosX, posy+triPosY, posx+75+triPosX, posy+75+triPosY, posx-75+triPosX, posy+75+triPosY);
}




function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
