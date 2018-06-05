let finalVersion = false;

let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_input_3.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(230);
  sourceImg.loadPixels();
  maskImg.loadPixels();
} 
let pointSize = 50;
let elementSpacing = 50;
let squareSize = 30;
let circleSize = 30;
let dots = 50;
let repeats = 500; 


if (finalVersion  == true) {
  pointSize = 20;
}



function draw () {
  for(let i=0;i<dots;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    //let x = int(i * elementSpacing);
    //let y = int(curRow * elementSpacing);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    
    let halfSize = 0.5*elementSpacing;
    print(renderCounter);
    
    if(mask[0] > 128) {
      fill(pix);
      noStroke();
      circleSize = floor(random(5, 30));
      ellipse(x, y, circleSize, circleSize);
    }
    if (renderCounter < 30 && mask[0] <= 128) {
      
      noFill();
      stroke(pix);
      strokeWeight(3);
      squareBase = map(y, 0, 1080, 35, 2);
      squareSize = squareBase + floor(random(3, 15));
      rect(x-halfSize, y-halfSize, squareSize, squareSize);    
    }
  }

  renderCounter = renderCounter + 1;
  if(renderCounter > repeats) {
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
