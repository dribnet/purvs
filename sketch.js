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

//let pointSize = 50;
let elementSpacing = 30;
//let elementSpacingH = 20;
let squareSize = 20;


function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
    let nx = floor(random(elementSpacing*2));
    let ny = floor(random(elementSpacing*2));
    let x = i * elementSpacing;
    let y = curRow * elementSpacing;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let circleSize = (random(30, 120));

    let halfSize = squareSize/2;
    fill(pix);
    if(mask[0] >140 && mask[0] <160){
      rect(x-halfSize, y-halfSize, squareSize*2, squareSize*2);   

    }
    if(mask[0] > 160) {
      rect(x-halfSize, y-halfSize, squareSize, squareSize*2);   
    }
    if (mask[0] < 140){
      x = x + nx;
      y = y + ny;
      ellipse(x, y, cir0!cleSize, circleSize);
      x = x + nx*2;
      y = y + ny*2;
      ellipse(x, y, circleSize/2, circleSize/2);
    }
  }
  curRow = curRow + 1;
  if(curRow*elementSpacing > 1920) {
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
