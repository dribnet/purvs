let sourceImg=null;
let maskImg=null;
let renderCounter=0;
let pointSize = 50;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
  //sourceImg = loadImage("input_1.jpg");
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

  //colorMode(HSB,255);
  for(let i=0;i<1080/pointSize;i++) {
    let x = int(i * pointSize);
    let y = int(renderCounter * pointSize);
    //let x = floor(random(sourceImg.width));
    //let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    //let pointSize = 100;
    let halfSize =pointSize/2;
    fill(pix);
    if(mask[0] > 128) {
      ellipse(x, y, pointSize/5, pointSize/5);
    }
    else {
      rect(x-halfSize, y-halfSize, pointSize+50, pointSize+50);    
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter >  1920/pointSize) {
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
