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
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<100;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));

    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 40;
    let halfSize = 10;      
    noStroke();
    fill(pix);
    if(mask[0] > 128) {
      colorMode(HSB, 255);
      ellipse(x, y, pointSize, pointSize);
    }
    else {
      noStroke();      
      stroke(0);
      strokeWeight(5);
      colorMode(RGB, 255);
      rect(x-halfSize, y-halfSize, pointSize, pointSize);
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 50) {
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
