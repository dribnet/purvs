let sourceImg=null;
let maskImg=null;
let renderCounter=0;
let elementSpacing=20;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
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

function convertRgbToHsluv(c) {
  return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}

function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
    // let x = floor(random(sourceImg.width));
    // let y = floor(random(sourceImg.height));
    let x = int(i*elementSpacing);
    let y = int(renderCounter*elementSpacing);
    let dx = floor(random(elementSpacing/2));
    let dy = floor(random(elementSpacing/2));
    // x = x + dx;
    // y = y + dy;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 20;
    let halfSize = elementSpacing/2;
    fill(pix);
    if(mask[0] > 200) {
      let hsluvColor = convertRgbToHsluv(pix);
      // ellipse(x, y, pointSize*2, pointSize*2);
      fillHsluv(0, 0, hsluvColor[2]);
      ellipse(x, y, pointSize*2, pointSize*2);
      ellipse(x, y, pointSize, pointSize);
    }
    else {
      // x = x + dx;
      // y = y + dy;
      // let hsluvColor = convertRgbToHsluv(pix);
      // // ellipse(x, y, pointSize*2, pointSize*2);
      // fillHsluv(0, 0, hsluvColor[2]);
      rect(x-halfSize, y-halfSize, pointSize, pointSize);
      ellipse(x-halfSize, y-halfSize, pointSize/2, pointSize/2);
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
