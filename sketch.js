let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "output_1.png";

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

const tileHeight = 5;
const tileWidth = 5;

const x_step = 5;
const y_step = 5;

function draw () {
  for(let i=0;i<1000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);
    if(mask[0] > 128) {
      let pointSize = 50;
      rect(x, y, pointSize, pointSize);
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
     fill(pix[0],pix[1],pix[2]);
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
