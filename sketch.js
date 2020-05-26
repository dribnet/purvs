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
  for(let i=0;i < 15000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    fill(pix);

    if(mask[0] < 5 && i < 3000 ){ //black
      let pointSize = 8;
      strokeWeight(0)
      rect(x, y, pointSize, pointSize,1);
    }

    else if(mask[0] > 5 && mask[0] < 200) { //grey
      let pointSize = 4;
      strokeWeight(0);
      rect(x, y, pointSize, pointSize,2)
    }

    else if(mask[0] > 200 && i < 1500){ //white
      let pointSize = 6;
      stroke(pix)
      strokeWeight(pointSize)
        line(x - 15, y, x + 15, y)
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
