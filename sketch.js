
const finalVersion = false;
let elementSpacing = 20;
let elementSpacing2 = 5;
let circleSize = 30;
let circleSize2 = 10;
let squareSize = 40;

if (finalVersion) {
  elementSpacing = 20;
  elementSpacing2 = 5;
  circleSize = 30;
  circleSize2 = 10;
  squareSize = 40;
}

let sourceImg=null;
let maskImg=null;
let maskImg2=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
  maskImg2 = loadImage("mask_1_2.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background('gray');
  sourceImg.loadPixels();
  maskImg.loadPixels();
  maskImg2.loadPixels();
}

function convertRgbToHsluv(c) {
  return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}

function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
    let x = int(i * elementSpacing);
    let y = int(renderCounter * elementSpacing);
    //let x2 = int(i * elementSpacing2);
    //let y2 = int(renderCounter * elementSpacing2);
    let dx = floor(random(elementSpacing/2));
    let dy = floor(random(elementSpacing/2));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let mask2 = maskImg2.get(x, y);
    let halfSize = squareSize/2;
    if(mask[0] > 128) {
      fill(pix);
      ellipse(x, y, circleSize, circleSize);
    }
    else if(mask2[0] > 128) {
      fill(pix);
      ellipse(x, y, circleSize2, circleSize2);
    }
    else {
      x = x + dx;
      y = y + dy;
      let hsluvColor = convertRgbToHsluv(pix);
      fillHsluv(0, 0, hsluvColor[2]);
      rect(x-halfSize, y-halfSize, squareSize, squareSize);    
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/elementSpacing) {
    console.log("Done!")
    noLoop();
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
