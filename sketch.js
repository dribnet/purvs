let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "output_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  //noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 50;
const tileWidth = 50;

const x_step = 50;
const y_step = 50;

function draw () {
  for(let i=0;i<2000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);
    if(mask[0] > 128) {
      let pointSize = 100;
      rect(x, y, pointSize*1.5, pointSize);
    }
    else {
      let pointSize = 100;
      strokeWeight(5);
      line(x, y, x+pointSize, y);
    }
  }

  for (var x2 = 0; x2 < sourceImg.width; x2 = x2 + x_step) {
  for (var y2 = 0; y2 < sourceImg.height; y2 = y2 + y_step) {
    let pix = sourceImg.get(x2, y2);
    let mask = maskImg.get(x2, y2);
     fill(pix[0],pix[1],pix[2], 180);
     noStroke();
      if (mask[0] > 128) {
    rect(x2, y2, tileWidth, tileHeight);
    }
  }
}

  renderCounter = renderCounter + 1;
  if(renderCounter > 5) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
