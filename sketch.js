let finalVersion = false;

let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_2.jpg");
  maskImg = loadImage("mask_2.png");
}

function setup () {
  let main_canvas = createCanvas(1620, 1080);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
} 
let pointSize = 50;
let elementSpacing = 50;
let squareSize = 30;
let circleSize = 30;
let dots = 50;
let repeats = 100; 


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
    
    if(mask[0] > 128) {
      fill(pix);
      noStroke();
      circleSize = floor(random(15, 30));
      ellipse(x, y, circleSize, circleSize);
    }
    else {
      
      noFill();

      stroke(pix);
      strokeWeight(3);
      squareSize = floor(random(15, 30));
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
