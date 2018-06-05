const finalVersion = true;

  let elementSpacing = 30;
  let circleSize = 25;
  let squareSize = 20;
  
  if (finalVersion) {
    elementSpacing = 30;
    circleSize = 25;
    squareSize = 25;
  }

  let sourceImg=null;
  let maskImg=null;
  let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  sourceImg2 = loadImage("input_3.2.jpg");
  maskImg = loadImage("mask_3.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
    main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(40);
  sourceImg.loadPixels();
  sourceImg2.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for( i=0;i<1080/elementSpacing;i++) {
    let x = int(i * elementSpacing);
    let y = int(renderCounter * elementSpacing);
    let pix = sourceImg.get(x, y);
    let pix2 = sourceImg2.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = squareSize/2;
    
    fill(pix);
    stroke(pix2);
    strokeWeight(4);
    if(mask[0] > 128) {
      
      ellipse(x, y, circleSize, circleSize);
      line(x-12, y-12, x+12, y+12);
      line(x+12, y-12, x-12, y+12);
    }
    else {
      noFill();
      rect(x-halfSize, y-halfSize, squareSize, squareSize);    
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/elementSpacing) {
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
