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
  background(50);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<200;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let x2 = (random(x-200,x+200));
    let y2 = (random(y-200,y+200));
    let pix = sourceImg.get(x, y);
    let pix2 = sourceImg.get(x2, y2);
    let mask = maskImg.get(x, y);
    let pointSize = 50;
    let halfSize = 10;
    fill(pix);
    stroke(pix);
    if(mask[0] > 128) {
      strokeWeight(7)
      line(x, y, x2, y2);
    }
    else {
      
      rect(x-halfSize, y-halfSize, pointSize, pointSize);    
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 20) {
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
