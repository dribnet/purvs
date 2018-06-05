//Made by Ben Spearman
//MDDN 242 Creative Coding II, 2018
let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("Test.jpg");
  maskImg = loadImage("mask_Test.png");
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
  for(let i=0;i<200;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 50;
    let halfSize = pointSize/2;
    fill(pix);


    if(mask[0] < 128) {
      ellipse(x, y, pointSize, pointSize);
    }
    else {
      rect(x-halfSize, y-halfSize, pointSize/2, pointSize/2);    
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 100) {
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