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
  background(22,69,27);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

let pointSize = 40;
let elementSpacing = 20;
let squareSize = 20;
let circleSize = 30

function draw () {
  for(let i=0;i<1180/elementSpacing;i++) {
    let dx = floor(random(elementSpacing/2));
    let dy = floor(random(elementSpacing/2));
    let x = i * elementSpacing;
    let y = renderCounter * elementSpacing;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = 50;
    fill(pix);
    if(mask[0] == 0) {
      x = x + dx;
      y = y + dy;
      ellipse(x-50, y-50, circleSize, circleSize);
    }
    else if(mask[0] == 255){
      ellipse(x-halfSize, y-halfSize, squareSize, squareSize);
    }
    else {
      fill(pix);
      rect(x-halfSize, y-halfSize, squareSize, squareSize); 
      fill(120);
      rect(x-halfSize + squareSize/3, y-halfSize + squareSize/3, squareSize/4, squareSize/4);   
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter * elementSpacing > 2020) {
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
