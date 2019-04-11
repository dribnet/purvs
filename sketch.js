const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my three variable per letter are:
 *
   size: diameter of the second rect (in pixels)
   offsetx: x offset (in pixels) of the second rect
            relative to the first one
   offsety: y offset (in pixels) of the second rect
            relative to the first one
 *
 */

const letterA = {
  "size": 90,
  "offsetx": 30,
  "offsety": 80
}

const letterB = {
  "size": 80,
  "offsetx": 0,
  "offsety": -100
}

const letterC = {
  "size": 90,
  "offsetx": 80,
  "offsety": 30
}


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  strokeWeight(4);
  noFill();

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  stroke(71, 145, 121);
  rect(posx, posy, 150, 150);
  stroke(212, 242, 198);
  rect(pos2x, pos2y, size2, size2);
}

function draw () {
  // clear screen
  background(150, 215, 148);


  // compute the center of the canvas
  //the let center_x = canvasWidth/2 isnt working
  let center_x = 400;  
  let center_y = canvasHeight/2;

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
