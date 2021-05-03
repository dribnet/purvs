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
  "size": 70,
  "offsetx": 20,
  "offsety": 30,
  "start": 700,
  "End": 100,

}

const letterB = {
  "size": 70,
  "offsetx": 20,
  "offsety": 30,
  "start": 700,
  "End": 340,
}

const letterC = {
  "size": 70,
  "offsetx": -35,
  "offsety": 0,
  "start": 100,
  "End": 250,
}

const backgroundColor  = "#6495ED";
const DarkTurquoise   = "#00CED1";
const Salmon = "#FA8072";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke('#F8F8FF');
  strokeWeight(4);
  noLoop();
  angleMode(DEGREES);

  // with no animation, redrawing the screen is not necessary
  
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

  let StartArc = letterData["start"];
  let EndArc = letterData["End"];

  // draw two circles
  // fill(darkBlue);
  // ellipse(posx, posy, 150, 150);
  // fill(lightBlue);
  // rect(pos2x, pos2y, size2, size2,startAngle,stopAngle);
  fill(DarkTurquoise);
  ellipse(posx, posy, 150, 150);
  fill(Salmon);
  arc(pos2x, pos2y, size2, size2, StartArc, EndArc);
  

 
  

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
