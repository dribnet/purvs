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
  "size": 10,
  "offsetx": 0,
  "offsety": 35
}

const letterB = {
  "size": 30,
  "offsetx": 0,
  "offsety": -45
}

const letterC = {
  "size": 11,
  "offsetx": 0,
  "offsety": 10
}

const colorFront1  = "#33E489";
const colorFront2  = "#008695";
const colorBack    = "#f8b62d";
const colorStroke  = "#33E489";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  strokeWeight(20);
  strokeCap(SQUARE);
  translate((width/2) - 200, height/2);
  beginShape();
  for(var i = 0; i < 200; i++) {

    var x = i * 2;

    var y = cos(i * radians(2)) * 100;
    vertex(x, y);
  }
  endShape();

}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  //BACKCRICL
 push();
 noStroke();
 fill(colorFront2);
   circle(pos2x,pos2y, size2);
pop();

//LINE
push();
 noStroke();
 fill(colorFront1);
  rect( pos2x, 70, size2, pos2y);
  rect( pos2x, 80,size2, pos2y);
  rect( pos2x, 90, size2, pos2y);
  rect( pos2x, 100, size2, pos2y);
  rect( pos2x, 110, size2, pos2y);

pop();

push();
noStroke();
fill(colorFront2);
  circle(150, 100, 40);
pop();

//LINE
push();
noStroke();
fill(colorFront1);
 rect( 100, 70, 100, 1);
 rect( 100, 80,100, 1);
 rect( 100, 90, 100, 1);
 rect( 100, 100, 100, 1);
 rect( 100, 110, 100, 1);

pop();

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
