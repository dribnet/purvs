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
  tile1: 1, tile2: 1, tile3: 1,
  tile4: 1, tile5: 0, tile6: 1,
  tile7: 0, tile8: 1, tile9: 1,
            tile10: 0,
}

const letterB = {
  tile1: 1, tile2: 0, tile3: 0,
  tile4: 1, tile5: 1, tile6: 1,
  tile7: 1, tile8: 0, tile9: 1,
            tile10: 1,
}

const letterC = {
  tile1: 0, tile2: 0, tile3: 0,
  tile4: 1, tile5: 1, tile6: 0,
  tile7: 1, tile8: 0, tile9: 1,
            tile10: 1,
}

const backgroundColor  = "#caf0f8";
const strokeColor      = "#03045e";

const darkYellow  = "#deaa28";
const strokeYellow  = "#dec028";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  noStroke()

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

  push();
  translate(posx, posy);

  // color/stroke setup
  stroke(strokeYellow);
  strokeWeight(0.2);
  fill(darkYellow);

  let visible = [
    letterData.tile1, letterData.tile2, letterData.tile3,
    letterData.tile4, letterData.tile5, letterData.tile6,
    letterData.tile7, letterData.tile8, letterData.tile9,
    letterData.tile10];
    
  if (letterData['visible'] != null) { visible = letterData['visible']; }

  // draw two circles
  drawHexagonagon(50, 100, 60, visible);

  pop();
}

function drawHexagonagon(x, y, size, visible) {
  translate(x, y);
  
  // Center
  visible[4] && drawHexagon(0, 0, (size/3) * visible[4]);
  
  // Center top
  visible[7] && drawHexagon(0, size/2/hexagonHeightRatio, (size/3) * visible[7]);
  
  // Center Bottom
  visible[1] && drawHexagon(0, -size/2/hexagonHeightRatio, (size/3) * visible[1]);
  
  // Top right
  visible[2] && drawHexagon(size/2, -size/4/hexagonHeightRatio, (size/3) * visible[2]);

  // Top left
  visible[0] && drawHexagon(-size/2, -size/4/hexagonHeightRatio, (size/3) * visible[0]);

  // Center right
  visible[5] && drawHexagon(size/2, size/4/hexagonHeightRatio, (size/3) * visible[5]);

  // Center left
  visible[3] && drawHexagon(-size/2, size/4/hexagonHeightRatio, (size/3) * visible[3]);
  
  // Bottom right
  visible[8] && drawHexagon(size/2, size*hexagonHeightRatio, (size/3) * visible[8]);

  // Bottom left
  visible[6] && drawHexagon(-size/2, size*hexagonHeightRatio, (size/3) * visible[6]);

  // Bottom bottom
  visible[9] && drawHexagon(0, size/hexagonHeightRatio, (size/3) * visible[9]);

  translate(-x, -y);
}

const hexagonHeightRatio = 0.8660;

function drawHexagon(x, y, size) {
  push();
  translate(x, y);
  scale(size*1);

  beginShape();
  vertex(-1, 0);
  vertex(-0.5, -hexagonHeightRatio);
  vertex(0.5, -hexagonHeightRatio);
  vertex(1, 0);
  vertex(0.5, hexagonHeightRatio);
  vertex(-0.5, hexagonHeightRatio);
  endShape(CLOSE);

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
