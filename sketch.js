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
  "sizex": 50,
  "sizey":50,
  "offsetx": 50,
  "offsety": 30,
  "size3x": 50,
  "size3y": 50
}

const letterB = {
  "sizex": 50,
  "sizey": 50,
  "offsetx":50,
  "offsety": 15
  
}

const letterC = {
  "sizex": 50,
  "sizey": 50,
  "offsetx": 100,
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
  let size2x = letterData["sizex"];
  let size2y = letterData["sizey"];
  let size4x = letterData["size3x"];
  let size4y = letterData["size3y"]; 


  //This is the x position of the big circle plus the amount x is moved for the little circle. 
  //Works out where little circle should go.
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

//Saying that everytime the function is drawn two circles will be drawn.
  // draw two circles
  fill(colorFront1);
  rect(posx, posy, 150, 150);
  fill(colorFront2);
  rect(pos2x, pos2y, size2x, size2y);
  rect(pos2x,pos2y+70, size4x, size4y);
  rect(pos2x,pos2y+70, size2x, size2y);


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
