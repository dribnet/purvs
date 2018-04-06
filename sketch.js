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
  "offsety": 35
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0
}

const colorFront  = "#199cff";
const colorBack   = "#e3eded";
const colorStroke = "#000000";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  ellipse(posx, posy, 150, 150);
  ellipse(pos2x, pos2y, size2, size2);
}



function draw () {
  // clear screen
  background(colorBack);
  angleMode(DEGREES);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;
/*
  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, 10, letterA);
  drawLetter(center_x      , center_y, 10, letterB);
  drawLetter(center_x + 250, center_y, 10, letterC);
*/

// A

strokeJoin(MITER);

push();
  translate(-200, 0);

  noFill();
  strokeWeight(10);
  arc(center_x, center_y, 100, 100, 160, 290);

  strokeWeight(4);
  line(center_x, center_y, center_x-50, center_y);

  strokeWeight(1);
  fill(0);
  triangle(center_x, center_y-50, center_x+10, center_y-50, center_x+5, center_y+50);

  translate(+200, 0);
pop();


// B

  noFill();
  strokeWeight(10);
  arc(center_x, center_y, 100, 100, 260, 100);

  strokeWeight(1);
  fill(0);
  triangle(center_x, center_y+5, center_x+50, center_y-5, center_x+50, center_y-15);

  strokeWeight(4);
  line(center_x, center_y+43, center_x, center_y-43);


//C

push();
  translate(+200, 0);

  noFill();
  strokeWeight(10);
  arc(center_x, center_y, 100, 100, 60, 230);

  strokeWeight(1);
  fill(0);
  triangle(center_x-15, center_y-40, center_x-5, center_y-50, center_x+40, center_y-20);

  strokeWeight(4);
  line(center_x, center_y+43, center_x, center_y-30);

  translate(-200, 0);
pop();
}






function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
