/* Set to true to make final high-resolution version */
const finalVersion = true;

/* Default versions of variables */
let pointSize = 40;

/* Override some variables with high-resolution final version */
if (finalVersion) {
  pointSize = 20;
}

let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(150);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<1080/pointSize;i++) {
    let x = int(i * pointSize);
    let y = int(renderCounter * pointSize);
    // let x = floor(random(sourceImg.width));
    // let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = pointSize/2;
    fill(pix);
    //_____________________MASKED PIXELS__________________________
    if(mask[0] > 128) {
      ellipse(x, y, pointSize*1.5, pointSize*1.5);

    }
    //_____________________NON MASKED PIXELS__________________________

    else {
      blur(1);
      rect(x-halfSize, y-halfSize, pointSize*.8, pointSize*.8,5);    
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/pointSize) {
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