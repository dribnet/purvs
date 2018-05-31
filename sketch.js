/* Set to true to make final high-resolution version */
const finalVersion = false;

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

  angleMode(DEGREES);
  imageMode(CENTER);
  background(229, 237, 249, 100);
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
      stroke(145, 156, 173);
      strokeWeight(0.5);
       ellipse(x, y, pointSize, pointSize);
       stroke(255);
       strokeWeight(1);
      fill(pix);
       ellipse(x, y, pointSize/1.5, pointSize/1.5);
       ellipse(x, y, pointSize/2, pointSize/2);
      ellipse(x, y, pointSize/3, pointSize/3);
      ellipse(x, y, pointSize/4, pointSize/4);


    }
    else {
      //stroke(pix);
      //strokeWeight(2);
      //noFill();
      // noStroke();
      //rotate(25);
      fill(255);
      rect(x-halfSize, y-halfSize, pointSize, pointSize);
      fill(pix);
      rect(x-halfSize, y-halfSize, pointSize, pointSize/2);
    
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