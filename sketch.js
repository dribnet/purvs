/* Default versions of variables */
let elementSpacing = 10;
let circleSize = 0;
let squareSize = 5;

let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("pupumba.jpg");
  maskImg = loadImage("mask_pupumba.png");
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
  // for(let i=0;i<100;i++) {
  //   let x = floor(random(sourceImg.width));
  //   let y = floor(random(sourceImg.height));
  for(let i=0;i<1080/elementSpacing;i++) {
    let x = int(i * elementSpacing);
    let y = int(renderCounter * elementSpacing);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 22; //let element spacing = 40  
    let halfSize = 11;
    fill(pix);
    if(mask[0] > 128) {
      ellipse(x, y, pointSize+circleSize, pointSize+circleSize);
    }
    else {
      rect(x-halfSize, y-halfSize, pointSize, pointSize);    
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