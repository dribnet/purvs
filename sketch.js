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

const pointSize = 40;

function draw () {
  for(let i=0;i<1080/pointSize;i++) {
    let xBack = int(i * pointSize);
    let yBack = int(renderCounter * pointSize);
	let pix = sourceImg.get(xBack, yBack);
    let halfSize = pointSize/2;
    fill(pix);
    rect(xBack-halfSize, yBack-halfSize, pointSize, pointSize);    
  }
  for(let i=0;i<110;i++) {
    let xBack = int(i * pointSize);
    let yBack = int(renderCounter * pointSize);
	let xFront = floor(random(sourceImg.width));
    let yFront = floor(random(sourceImg.height));
    let pix = sourceImg.get(xFront, yFront);
    let mask = maskImg.get(xFront, yFront);
    let halfSize = pointSize/2;
    fill(pix);
    if(mask[0] > 128) {
      ellipse(xFront, yFront, pointSize, pointSize);
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
