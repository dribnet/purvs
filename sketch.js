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
  "size": 30,
  "offsetx": 0,
  "offsety": -75,
  "ColourPlanet": 0,
  "ColourSun": 0
}

const letterB = {
  "size": 30,
  "offsetx": 50,
  "offsety": -50,
  "ColourPlanet": 1,
  "ColourSun": 1
}

const letterC = {
  "size": 30,
  "offsetx": 75,
  "offsety": 0,
  "ColourPlanet": 2,
  "ColourSun": 2
}

const backgroundColor  = "#e3eded";
const strokeColor      = "#233f11";

const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";

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
  
  let col1 = letterData["ColourPlanet"];
  let col2 = letterData["ColourSun"]

  // draw two circles                                                                            
  fill(darkBlue);
  ellipse(posx, posy, 150, 150);
  if(col2 == 0){
 fill(250,180,0);
  }
  else if (col2 == 1) {
    fill(255,255,0);
  }
  else if (col2 == 2) {
    fill(255,255,255);
  }
  ellipse(posx, posy, 50, 50);

  if(col1 == 0){
    fill(lightBlue);
  }
  else if (col1 == 1) {
    fill(100,0,0);
  }
  else if (col1 == 2) {
    fill(0,100,0);
  }
  else if (col1 == 3) {
    fill(100,100,0);
  }
  else if (col1 == 4) {
    fill(0,0,0);
  }

  ellipse(pos2x, pos2y, size2, size2);
}





function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
