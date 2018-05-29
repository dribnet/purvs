let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_4.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  //define sizes and spacing
    let circleSize = 10;
    let elementSpacing = 10;
    let elementSpacing2 = 20;
    let squareSize = 20;
  // set variables inside for loop
  for(let i=0;i<1080/elementSpacing;i++) {
    let x = int (i * elementSpacing);
    let y = int (renderCounter * elementSpacing);
    let x2 = int (i * elementSpacing2);
    let y2 = int (renderCounter * elementSpacing2);
    //define random offsets
    let dx = floor (random(elementSpacing/2));
    let dy = floor (random(elementSpacing/2))
    //fit source image
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    //set random offsets
    x = x + dx;
    y = y + dy;
    fill(pix);
    //draw ellipses within mask
    if(mask[0] > 128) {
      ellipse(x, y, circleSize, circleSize);
    }
    //draw rectangles for background
    else {
      rect(x2, y2, squareSize, squareSize);     
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
function shapeA (posx, posy, widthA, heightA) {
  ellipse(x-halfSize, y-halfSize, widthA, heightA);   
}
