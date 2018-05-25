let sourceImg=null;
let maskImg=null;
let renderCounter=0;
let curRow = 0;

function preload() {
  sourceImg = loadImage("input_2.jpg");
  maskImg = loadImage("mask_2.png");
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

let pointSize = 20;
let pointSize1 = 40;

function draw () {
  for(let i=0;i<1080;i++) {
    let x = i * pointSize;
    let y = curRow * pointSize;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    //let cx = floor(random(sourceImg.width));
    //let cy = floor(random(sourceImg.height));
    let halfsize = pointSize/2;
    //editing the numbers below slows render but increases detail
    //let halfSize = 5;
    fill(pix);
    if(mask[0] > 128) {
      ellipse(x+halfsize, y+halfsize, pointSize1, pointSize1);
    }
    else {
      rect(x-halfsize, y-halfsize, pointSize, pointSize);    
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
