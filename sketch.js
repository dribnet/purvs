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
  "size": 170,
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

const backgroundColor  = "#e3eded";
const lightPurple  = "#b29af5";
const lightBlue  = "#59ccff";
const DarkBlue = "345eeb";
const Indigo = "3734eb";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  noStroke();

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

  translate(width/2, height/2);
  beginShape();
  for(let i = 0; i < shapeLoop; i++) {
  const x = random(-100, 100);
  const y = random(-100, 100);
  vertex(x, y);
  }

   //draw two circles
   fill(lightPurple);
   ellipse(posx, posy, 150, 150);
   fill(lightBlue);
   ellipse(pos2x, pos2y, size2, size2);

   //arc
   fill(DarkBlue)
   arc(400, 300, 300, 300, 0, HALF_PI);
   fill(Indigo)
   arc(400, 300, 300, 300, 0, HALF_PI-50);

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
