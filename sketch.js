let sourceImg=null;
let maskImg=null;
//let renderCounter=0;
let curRow = 0;

function preload() {
  sourceImg = loadImage("input_1.png");
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
let elementSpacing = 15; //10;
let elementSpacing2 = 50;
//let elementSpacingH = 20;
let squareSize = 15;


function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
    let nx = floor(random(elementSpacing2*2));
    let ny = floor(random(elementSpacing2*2));
    let x = i * elementSpacing;
    let y = curRow * elementSpacing;
    let x2 = i * elementSpacing2;
    let y2 = curRow * elementSpacing2;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let circleSize = (random(30, 70));

    let halfSize = squareSize/2;
    fill(pix);

    if(mask[0] > 160) {
      rect(x-halfSize, y-halfSize, squareSize*2, squareSize*2);   
      //rect(x-halfSize, y-halfSize, squareSize, squareSize);
    }
    if (mask[0] < 140){
      rect(x-halfSize, y-halfSize, squareSize/2, squareSize*2);  
      //rect(x-halfSize, y-halfSize, squareSize/5, squareSize/5); 
    }

	if(mask[0] >141 && mask[0] <159){
      x2 = x2 + nx;
      y2 = y2 + ny;
      fill(249, 235, 235, 150);
      ellipse(x, y, circleSize, circleSize);
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
