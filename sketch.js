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
  "size": 80,
  "offsetx": 0,
  "offsety": 0

}

const letterB = {
  "size": 75,
  "offsetx": 0,
  "offsety": 500
}

const letterC = {
  "size": 100,
  "offsetx": 20,
  "offsety": 530
}

const backgroundColor  = "#caf0f8";
const strokeColor      = "#03045e";

const darkPink  = "#c800A1";
const lightPink  = "#ff5aac";

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
  // let pos3x = letterB["offsetx"];//letter b
  // let pos3y = letterB["offsety"];//letter B
  // let rectwidth =  letterB["rectwidth"];
  // let rectheight = letterB["rectheight"];

  // let trix1 = letterA["coordX1"];//triangle x coord 1
  // let trix2 = letterA["coordX2"];//triangle x coord 2
  // let trix3 = letterA["coordX3"];//triangle x coord 3
  //
  // let triy1 = letterA["offsety"];//triangle y coord 1
  // let triy2 = letterA["offsety"];//triangle y coord 2
  // let triy3 = letterA["offsety"];//triangle y coord 3
  //
  // let rectx1 = letterA["rectX1"];
  // let recty1 = letterA["rectY1"];

  // draw two circles
  fill(lightPink);
  stroke(darkPink);
  triangle(pos2x-30, pos2y, pos2x-5, pos2y-50, pos2x+20, pos2y);//top of the house

  rect(pos2x-31,pos2y,10,30);//left side of the A
  rect(pos2x+10.4, pos2y+.5, 10, 30);//right side of the A

  rect(pos2x, pos2y-500, 30, 30, 5, 5, 5, 5);//This should end up being apart of the "b"...

  rect(posx, pos2y-520,10,50);
  rect(pos2x+5, pos2y-520,50,10);
  // triangle(posx-30, posy, posx-5, posy-15, posx+20, posy);

  // noFill();
  // stroke(darkPink);
  // ellipse(posx-2.5, posy, 150, 150);
  // stroke(lightPink);
  // ellipse(pos2x, pos2y, size2, size2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
