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

const tileHeight = 10;
const tileWidth = 250;

const tileHeight2 = 20;
const tileWidth2 = 20;

const x_step = 20;
const y_step = 20;

function draw () {
  for(var x = 0; x < sourceImg.width; x = x+ tileWidth){
    for(var y = 0; y < sourceImg.height; y = y+ tileHeight){
        let pix = sourceImg.get(x, y);
        let mask = maskImg.get(x, y);
        fill(pix);
        stroke(pix);
        rect(x,y,tileWidth,tileHeight);
  }
}

  for (var x2 = 0; x2 < sourceImg.width; x2 = x2 + x_step) {
  for (var y2 = 0; y2 < sourceImg.height; y2 = y2 + y_step) {
    let pix = sourceImg.get(x2, y2);
    let mask = maskImg.get(x2, y2);
     fill(pix[0],pix[1],pix[2], 190);
     noStroke();
      if (mask[0] > 128) {
    rect(x2, y2, tileWidth2, tileHeight2);
    }
  }
}

for(let i=0;i<200;i++) {
  let x = floor(random(sourceImg.width));
  let y = floor(random(sourceImg.height));
  let pix = sourceImg.get(x, y);
  let mask = maskImg.get(x, y);
  fill(pix);
  stroke(pix);
  if(mask[0] > 128) {
    let pointSize = 5;
    noStroke();
    rect(x, y, pointSize*1.5, pointSize);
  }
  else {
    let pointSize = 10;
    strokeWeight(1);
    line(x, y, x+pointSize, y);
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
