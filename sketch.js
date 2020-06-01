let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "output_1.png";

angleMode(DEGREES)

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i < 8000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    fill(pix);

    if(mask[0] < 5 && i < 3500 ){ //Black, background
      let pointSize = 8;
      strokeWeight(0)
      stroke(0)
      rect(x, y, pointSize, pointSize,1);
    }
    else if(mask[0] > 100 && mask[0] < 200) { //light Grey, Sky
      let pointSize = 7;
      strokeWeight(0);
      fill(pix[0], pix[1], pix[2], 255)
      ellipse(x, y, pointSize, pointSize)
    }
    else if(mask[0] > 5 && mask[0] < 100) { //Dark Grey, Foreground
      let pointSize = 4;
      strokeWeight(0);
      rect(x, y, pointSize, pointSize,2)
    }
    else if(mask[0] > 200 && i < 1500){ //White, water
      let pointSize = random(4, 10);
      stroke(pix[0], pix[1], pix[2])
      strokeWeight(pointSize)
        line(x - random(5,20), y, x + random(5,20), y)
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
