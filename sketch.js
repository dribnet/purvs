/* Set to true to make final high-resolution version */
const finalVersion = false;

/* Default versions of variables */
let elementSpacing = 5;
let circleSize = 30;
let squareSize = 10;

/* Override some variables with high-resolution final version */
if (finalVersion) {
  elementSpacing = 30;
  circleSize = 5;
  squareSize = 25;
}

let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_2.jpg");
  maskImg = loadImage("mask_2.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background('gray');
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
    let x = int(i * elementSpacing);
    let y = int(renderCounter * elementSpacing);
    let dx = floor((elementSpacing/2));
    let dy = floor((elementSpacing/2));
     x = x + dx;
     y = y + dy;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = squareSize/2;
    fill(pix);
    if(mask[0] > 128) {
      ellipse(x, y, circleSize, circleSize);
    }
    else {
      rect(x-halfSize, y-halfSize, squareSize, squareSize);    
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