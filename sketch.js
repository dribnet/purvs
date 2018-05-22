let finalVersion = false;

let sourceImg=null;
let maskImg=null;
let curRow=0;

function preload() {
  sourceImg = loadImage("input_2.jpg");
  maskImg = loadImage("mask_2.png");
}

function setup () {
  let main_canvas = createCanvas(1620, 1080);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

let pointSize = 50;

if (finalVersion  == true) {
  pointSize = 20;
}



function draw () {
  for(let i=0;i<1620/pointSize;i++) {
    // let x = floor(random(sourceImg.width));
    // let y = floor(random(sourceImg.height));
    let x = i * pointSize;
    let y = curRow * pointSize;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    
    let halfSize = 0.5*pointSize;
    fill(pix);
    if(mask[0] > 128) {
      ellipse(x, y, pointSize, pointSize);
    }
    else {
      rect(x-halfSize, y-halfSize, pointSize, pointSize);    
    }
  }
  curRow = curRow + 1;
  if(curRow*pointSize > 1080) {
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
