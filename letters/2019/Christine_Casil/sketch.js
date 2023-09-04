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
  "rectx": 100,
  "recty": 230,

  "offsetx": 110,
  "offsety": 255,
  "offsetw": 80,
  "offseth": 70,

  "offset2x": 110,
  "offset2y": 270,
  "offset2w": 80,
  "offset2h": 30,
}

const letterB = {
  "rectx": 420,
  "recty": 230,
  
  "offsetx": 470,
  "offsety": 245,
  "offsetw": 50,
  "offseth": 30,

  "offset2x": 470,
  "offset2y": 285,
  "offset2w": 50,
  "offset2h": 30,
}

const letterC = {
  "rectx": 700,
  "recty": 230,
  
  "offset2x": 725,
  "offset2y": 245,
  "offset2w": 75,
  "offset2h": 75,
}

const colorBack    = "#ffe5c4";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters
  let offsetx = letterData["offsetx"];
  let offsety = letterData["offsety"];
  let offsetw = letterData["offsetw"];
  let offseth = letterData["offseth"];

  let offset2x = letterData["offset2x"];
  let offset2y = letterData["offset2y"];
  let offset2w = letterData["offset2w"];
  let offset2h = letterData["offset2h"];

  let rectx = letterData["rectx"];
  let recty = letterData["recty"];
  let w = 100;
  let h = 100;

  //rectangle
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(rectx, recty, w, h, 20);

  //small rect1
  noFill();
  stroke(255);  
  rect(offsetx, offsety, offsetw, offseth, 15);
 
  //small rect2
  noFill();
  stroke(255);
  rect(offset2x, offset2y, offset2w, offset2h, 15);
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
