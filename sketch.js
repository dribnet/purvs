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

// var x = i * 1.5; // defines the width
// var y = cos(i * radians(2)) * 100; // last defines the height

const letterA = {
  "heightY": 60,
  "widthX": 1.6,
  "length": 70,
  "rotation_angle": 90,
}
const letterB = {
  "heightY": 60,
  "widthX": 0.8,
  "length": 170,
  "rotation_angle": 90,
}

const colorFront1  = "#D8D8D8";
const colorFront2  = "#888080";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

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

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let heightY = letterData["heightY"];
  let widthX = letterData["widthX"];
  let rotation_angle = letterData["rotation_angle"];
  let length = letterData["length"];
  // convert rotation
  var rotation = (rotation_angle/180)*Math.PI
  fill(0,0,0,0);
  stroke(255);
  strokeWeight(10);
  translate((width/2) + 200, height/2);
  beginShape();
  for(var i = -length; i < length; i++) { // defines the length and how many points there are
    var x1 = (i * widthX);
    var y1 = (cos(i * radians(2)) * heightY);
    var x = x1 * cos(rotation) - y1 * sin(rotation);
    var y = y1 * cos(rotation) + x1 * sin(rotation);
    vertex(x, y);
  }
  endShape();
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 500, center_y, letterB);
  // drawLetter(center_x -250    , center_y, letterB);
  // drawLetter(center_x + 250, center_y, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}



