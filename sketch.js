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

const pointSize = 10;

function draw () {
  for(let i=0;i<1080;i++) {
    //let x = floor(random(sourceImg.width));
    //let y = floor(random(sourceImg.height));
    let x = int(i * pointSize);
    let y = int(renderCounter * pointSize);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = pointSize/2;
    fill(pix);
    stroke(255);
    if(mask[0] > 128) {
      beginShape();
      vertex(x, y);
      vertex(pointSize, pointSize);
      vertex(x, y);
      endShape();
      stroke(0);
      rect(x-halfSize, y-halfSize, pointSize, pointSize);
    }
    else {
      stroke(0);
      rect(x-halfSize, y-halfSize, pointSize, pointSize);    
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920) {
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
