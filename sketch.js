const finalVersion = true;

var xoff = 0;
var yoff = 0;

pointSize = 2;
scl = 5;
bend = 15;
var pos = [];

var xSZ = 216;
var ySZ = 384;

sourceImg = null;
maskImg = null;
renderCounter = 0;

function preload() {
  sourceImg = loadImage("3.jpg");
  maskImg = loadImage("3.png");
}

function setup() {
  main_canvas = createCanvas(xSZ * scl, ySZ * scl);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);

  background(20);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  noFill();


  for (i = 0; i < ySZ; i++) {
    pos[i] = [];
    for (j = 0; j < xSZ; j++) {
      pos[i][j] = [];
print("done");
      pos[i][j][0] = map(noise(i * i * i), 0, 1, j * scl, (j + 1) * scl);
      pos[i][j][1] = map(noise(j * j * j), 0, 1, i * scl, (i + 1) * scl);

    }

  } 
}

function draw() {

  for (i = 0; i < ySZ; i++) {
    for (j = 0; j < xSZ; j++) {

      pix = sourceImg.get(pos[i][j][0], pos[i][j][1]);
      mask = maskImg.get(pos[i][j][0], pos[i][j][1]);
  
      strokeWeight(0);
      fill(pix[0], pix[1], pix[2], 60);
  
      if (j - 1 >= 0) { // to the left
        curve(pos[i][j][0] * scl - 20 * bend, pos[i][j][1] * scl, pos[i][j][0] * scl, pos[i][j][1] * scl, pos[i][j - 1][0] * scl, pos[i][j - 1][1] * scl, pos[i][j - 1][0] * scl - 20 * bend, pos[i][j - 1][1] * scl);
      }
      if (i - 1 >= 0) { // upper connection
        curve(pos[i][j][0] * scl, pos[i][j][1] * scl - 20 * bend, pos[i][j][0] * scl, pos[i][j][1] * scl, pos[i - 1][j][0] * scl, pos[i - 1][j][1] * scl, pos[i - 1][j][0] * scl - 20 * bend, pos[i - 1][j][1] * scl - 20 * bend);
      }

    } 
  }
  noLoop();
  console.log(" " + frameRate());
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}