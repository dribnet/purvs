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
  noStroke();
  background(104, 115, 114);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const squareHeight=20;
const squareWidth=20;

function draw () {
  for(let i=0;i<2000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);


//if the mask is white
    if(mask[0]) {
      fill(pix[0], pix[1], pix[2]);
      rect(x,y, squareWidth,squareHeight);
      //Earth();
    }
    //if the mask isn't black
    else {
      fill(pix[0], pix[1], pix[2], 80);
      ellipse(x, y, squareWidth*2,squareHeight);
      //Sea();
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
//  saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
