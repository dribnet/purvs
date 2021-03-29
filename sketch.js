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
  
  "offsetx": 50,
  "offsety": 90,
  "Rwidth": 30,
  "Rheight": 50,
  "size": 30,
  "CircleX": 65,
  "CircleY": 140,
}

const letterB = {
"offsetx": 200,
  "offsety": 90,
  "Rwidth": 30,
  "Rheight": 50,
  "size": 30,
  "CircleX": 240,
  "CircleY": 140,

}

const letterC = {
"offsetx": 350,
  "offsety": 90,
  "Rwidth": 30,
  "Rheight": 50,
  "size": 50,
  "CircleX": 345,
  "CircleY": 140,

}

const backgroundColor  = "#e3eded";
const strokeColor      = "#233f11";

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
angleMode(DEGREES);
  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(0, 0, letterA);
  drawLetter(0, 0, letterB);
  drawLetter(0, 0, letterC);
}

function drawLetter(posx, posy, letterData) {
   noStroke();
  // // determine parameters for second circle
  let RecX = letterData["Rwidth"];
  let Recy = letterData["Rheight"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let CircleX =letterData["CircleX"];
  let CircleY = letterData["CircleY"];
  let CircleS = letterData["size"];
  
  // // draw two circles
   fill("#9c4887");
  // ellipse(posx, posy, 150, 150);
   
  // arc(pos2x, pos2y, size2, size2, angleS, angleE);


  ellipse(CircleX, CircleY-50, CircleS);
  ellipse(CircleX, CircleY, CircleS);
  fill("#ba7599");
  beginShape();
  vertex(65, 95);
  vertex(35, 130);
  vertex(95, 130);
  endShape();
  rect(pos2x, pos2y, RecX, Recy);
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
