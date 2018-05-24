/* Set to true to make final high-resolution version */
const finalVersion = false;

/* Default versions of variables */
let elementSpacing = 40;
let circleSize = 50;
let squareSize = 20;

/* Override some variables with high-resolution final version */
if (finalVersion) {
  elementSpacing = 20;
  circleSize = 50;
  squareSize = 10;
}

let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  var c = color(65)
  background(c);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function owl(x, y, c, s) {
  push();
  translate(x, y);
  triangle(10, 50, 20, 200, 100, 180);
// arc(50, 50,50, 50, 0, PI + QUARTER_PI, PIE);
  pop();
}

function lll(x, y, c, s) {
  push();
  translate(x, y);
arc(50, 50,200, 200, 0, PI + QUARTER_PI, PIE);
// triangle(150, 50, 150, 200, 50, 180);
  pop();
}


function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
    let x = int(i * elementSpacing);
    let y = int(renderCounter * elementSpacing);
    let dx = floor(random(elementSpacing/2));
    let dy = floor(random(elementSpacing/2));
    x = x + dx;
    y = y + dy;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = squareSize/2;
    fill(pix);
    if(mask[0] > 128) {
      fill(pix);
      // ellipse(x, y, circleSize, circleSize);
      lll(x, y, pix, 0.8);
    }
    else {
      owl(x, y, pix, 0.3);
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/elementSpacing) {
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}