var canvasWidth = 960;
var canvasHeight = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // this means draw will only be called once
  noLoop();
}

// draw five colors and then five glyphs
function draw () {
  var size=200;
  var xdiff = (width - 4 * size) / 4;
  var xstep = size + xdiff;
  var ydiff = (height - 2 * size) / 2;
  var ystep = size + ydiff;

  background(255, 255, 220);
  noStroke();

  // red
  fill(210, 70, 50);
  rect(xdiff/2 + xstep * 0, ydiff/2 + ystep * 0, size, size);

  // yellow
  fill(245, 225, 50);
  rect(xdiff/2 + xstep * 1, ydiff/2 + ystep * 0, size, size);

  // blue
  fill(50, 120, 170);
  rect(xdiff/2 + xstep * 2, ydiff/2 + ystep * 0, size, size);

  // your own color here
  stroke(0);
  noFill();
  rect(xdiff/2 + xstep * 3, ydiff/2 + ystep * 0, size, size);

  // Represent red here
  rect(xdiff/2 + xstep * 0, ydiff/2 + ystep * 1, size, size);

  // Represent yellow here
  rect(xdiff/2 + xstep * 1, ydiff/2 + ystep * 1, size, size);

  // Represent blue here
  rect(xdiff/2 + xstep * 2, ydiff/2 + ystep * 1, size, size);

  // Represent your color here
  rect(xdiff/2 + xstep * 3, ydiff/2 + ystep * 1, size, size);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
