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

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<1;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 25;
    let halfSize = 12.5;
    fill(pix);
    if(mask[0] > 128) {
      ellipse(x, y, pointSize, pointSize);  

    }
    else {
      rect(x-halfSize, y-halfSize, pointSize, pointSize);    

    }

  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10000) {
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }    
  console.log(1*renderCounter);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
