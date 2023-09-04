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
  "size": 160,
  "offsetx": 0,
  "offsety": 45,
  "start": -18,
  "stop":200

}

const letterB = {
  "size": 160,
  "offsetx": 10,
  "offsety": -15,
  "start": 270,
  "stop":110
}

const letterC = {
  "size": 150,
  "offsetx": 15,
  "offsety": 0,
  "start": 90,
  "stop":300
}

const colorFront1  = "#ff0000";
const colorFront2  = "#0023a1";
const colorBack    = "#000000";
const colorStroke  = "#233f11";


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(1);

  angleMode(DEGREES);
  // with no animation, redrawing the screen is not necessary
  noLoop();
}



function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  let startA = letterData["start"];
  let endA = letterData["stop"];


  // draw two circles
  fill(colorFront1);
  ellipse(posx, posy, 120, 120);

  fill(colorFront2);
  arc(pos2x, pos2y, size2, size2, startA,endA);


}


function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y  = canvasHeight / 2;

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