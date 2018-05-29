/* Set to true to make final high-resolution version */
const finalVersion = true;

/* Default versions of variables */
let pointSize = 60;

/* Override some variables with high-resolution final version */
if (finalVersion) {
  pointSize = 20;
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

  angleMode(DEGREES);
  imageMode(CENTER);
  background(255);
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
    if(mask[0] > 128) {
      // stroke(255);
      // strokeWeight(2);
      noStroke();
      rect(x-halfSize, y-halfSize, pointSize, pointSize); 
      // ellipse(x, y, pointSize, pointSize);
    }
    else {
      stroke(255);
      strokeWeight(2);
      // noStroke();
      //rotate(25);
      rect(x-halfSize, y-halfSize, pointSize, pointSize);    
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