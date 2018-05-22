/* Set to true to make final high-resolution version */
const finalVersion = false;

/* Default versions of variables */
let elementSpacing = 30;
let circleSize = 60;
let squareSize = 50;

/* Override some variables with high-resolution final version */
if (finalVersion) {
  elementSpacing = 20;
  circleSize = 25;
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
  //strokeWeight(1);
  //stroke(255);
  background(234, 211, 220);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
    let x = int(i * elementSpacing);
    let y = int(renderCounter * elementSpacing);
    // let x = floor(random(sourceImg.width));
    // let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = squareSize/2;
    fill(pix);
    if(mask[0] > 128) {
      //rect(x-halfSize, y-halfSize, squareSize, squareSize);
       noStroke();
       ellipse(x, y, circleSize, circleSize);
    }
    else {
      //ellipse(x, y, circleSize, circleSize);
        strokeWeight(1);
        stroke(255);
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
