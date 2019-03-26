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

const colorFront1  = "#ff18a6";
const colorFront2  = "#ff59c4";
const colorBack    = "#e3eded";
const colorStroke  = "#3f1128";

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

function drawLetter(posx, posy, letterData, circle1x, circle1y, circle2x, circle2y, circle3x, circle3y) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  /*
  fill(colorFront1);
  ellipse(posx, posy, 150, 150);
  fill(colorFront2);
  ellipse(pos2x, pos2y, size2, size2);
  */
 
  noStroke();
  push();

  translate(posx, posy);
  for(let x = 0; x < 3; x++){
    for(let y = 0; y < 20; y++){
    fill(227, 237, 237, 255-(255/20) * y);
    ellipse(circle1x, circle1y, (150/20) * y, (150/20) * y);
    ellipse(circle2x, circle2y, (150/20) * y, (150/20) * y);
    ellipse(circle3x, circle3y, (150/20) * y, (150/20) * y);
  }
  }
 
  stroke(0);
  strokeWeight(1);
  noStroke();
   fill(colorFront2);
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      ellipse(-80+(j * 80), -80 + (i*80), 40, 40);
    }
  }
  pop();
}

function draw () {
  // clear screen
  background('#ff59c4');

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA, -60, 70, 60, 70, 0, -60);

  drawLetter(center_x      , center_y, letterB, -60, 0, 0, -70, 0, 70);
  drawLetter(center_x + 250, center_y, letterC, 60, -60, 60, 60, -60, 0);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
