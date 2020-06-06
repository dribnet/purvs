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
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
  background(190);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<8000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    if(mask[0] < 128 &&renderCounter < 7) {
      push();
      stroke(pix);
      fill(pix);
      strokeWeight(8);
      strokeJoin(ROUND);
      let pointSize = random(12);
      translate (x, y);
      rotate(random(360));
      rect(0, 0, pointSize, pointSize);
      pop();
    }
    else if (mask[0] > 128){
      push();
      stroke(pix);
      strokeCap(SQUARE);
      fill(pix);
      strokeWeight(random(6));
      let pointSize = random(-10, 10);
      let pointDrift = random(-60, 60);
      line(x, y + pointDrift, x, y + 40 + pointSize);
      pop();
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
