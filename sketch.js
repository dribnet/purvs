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
  "size": 50,
  "wid": 50,
  "hei": 25,
  "offsetx": 50,
  "offsety": 40,
  "b2offsetx": 180,
  "b2offsety": 300
}

const letterB = {
  "size": 50,
  "offsetx":50,
  "offsety": 50
}

const letterC = {
  "size": 50,
  "offsetx": 50,
  "offsety": 50
}

//big circle
const colorFront1  = "#fffd99";
//small circle
const colorFront2  = "#ff99f3";
//background
const colorBack    = "#99eeff";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}
//This is the function that works out how to draw a letter, which is later executed when 
//function is called.
function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  //This is the x position of the big circle plus the amount x is moved for the little circle. 
  //Works out where little circle should go.
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let wid1 = letterData["wid"];
  let hei1 = letterData["hei"];
  let b2posx =letterData["b2offsetx"];
  let b2posy = letterData["b2offsety"];

//Saying that everytime the function is drawn two circles will be drawn.
  // draw two circles
  fill(colorFront1);
  rect(posx, posy, 150, 150);
  fill(colorFront2);
  rect(pos2x, pos2y, size2, size2);
  rect(b2posx,b2posy,wid1,hei1);
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 350, center_y-75, letterA);
  drawLetter(center_x -50     , center_y-75, letterB);
  drawLetter(center_x + 250, center_y-75, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
