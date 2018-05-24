let sourceImg=null;
let maskImg=null;
let renderCounter=0;


let pointSize = 30;
let elementSpacing = 20;
let squareSize = 5;
let circleSize = 20;


function preload() {
  sourceImg = loadImage("input_2.jpg");
  maskImg = loadImage("mask_2.png");
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
  for(let i=0;i<1080/elementSpacing;i++) {
    //let x = floor(random(sourceImg.width));
   // let y = floor(random(sourceImg.height));
    let x = i * elementSpacing;
    let y = renderCounter * elementSpacing;
    let dx = floor(random(elementSpacing/5));
    let dy = floor(random(elementSpacing/5));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = squareSize/2;
    fill(pix);
    if(mask[0] > 128) {
      ellipse(x, y, circleSize, circleSize);
    }
    else {
      x = x + dx;
      y = y + dy;
      rect(x-halfSize, y-halfSize, squareSize, squareSize);    
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter*elementSpacing > 1920) {
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
