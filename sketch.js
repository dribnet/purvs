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
  "offsetx": 0,
  "offsety": 35,
  "b1": 0,
  "b2": 1,
  "b3": 0

}


const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145
}

const letterC = {
  "size": 100,
  "offsetx": 25,
  "offsety": 0
}

const colorFront  = "#ba75ff";
const colorBack   = "#9be8d1";
const colorStroke = "#84ceab";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(2);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  // ellipse(posx, posy, 150, 150);
  // ellipse(pos2x, pos2y, size2, size2);

  
  // fill("blue");
  // rect(100, 100, 30, 30);
  // fill("green");
  // rect(135, 100, 30, 30);
  // fill("red");
  // rect(170, 100, 30, 30);
  // fill("yellow");
  // rect(100, 135, 30, 30);
  // fill("purple");
  // rect(135, 135, 30, 30);
  // fill("orange");
  // rect(170, 135, 30, 30);
  // fill("black");
  // rect(100, 170, 30, 30);
  // fill("white");
  // rect(135, 170, 30, 30);
  // fill("pink");
  // rect(170, 170, 30, 30);

fill("pink");
//A
rect(170, 170, 30, 30);
rect(205, 170, 30, 30);
rect(240, 170, 30, 30);

rect(170, 205, 30, 30);
rect(240, 205, 30, 30);

rect(170, 240, 30, 30);
rect(205, 240, 30, 30);
rect(240, 240, 30, 30);

rect(170, 275, 30, 30);
rect(240, 275, 30, 30);


//B
rect(435, 170, 30, 30);
rect(470, 170, 30, 30);

rect(435, 205, 30, 30);
rect(470, 205, 30, 30);

rect(435, 240, 30, 30);
rect(470, 240, 30, 30);

rect(435, 275, 30, 30);
rect(470, 275, 30, 30);


//C
rect(695, 170, 30, 30);
rect(730, 170, 30, 30);
rect(765, 170, 30, 30);

rect(695, 205, 30, 30);
rect(695, 240, 30, 30);
rect(695, 275, 30, 30);

rect(730, 275, 30, 30);
rect(765, 275, 30, 30);


  

}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, 10, letterA);
  drawLetter(center_x      , center_y, 10, letterB);
  drawLetter(center_x + 250, center_y, 10, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
