let sourceImg=null;
let maskImg=null;
//let renderCounter=0;
let curRow = 0;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

let pointSize = 100;

function draw () {
  for(let i=0;i<1080/pointSize;i++) {
   // let x = floor(random(sourceImg.width));
   // let y = floor(random(sourceImg.height));
    let x = i * pointSize;
    let y = curRow * pointSize;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    let halfSize = pointSize/2;
    fill(pix);
    if(mask[0] > 128) {
      ellipse(x, y, pointSize, pointSize);
    }
    else {
      rect(x-halfSize, y-halfSize, pointSize, pointSize);   
    }
  }
  curRow = curRow + 1;
  if(curRow*pointSize > 1920) {
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
