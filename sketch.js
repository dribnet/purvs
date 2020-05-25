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
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i < 3000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    fill(pix);

    if(mask[0] < 128) {
      let pointSize = 10;
      for(let ii = 0; ii < 10; ii++) {
        strokeWeight(0)
        rect(x, y, pointSize, pointSize,0);
      }
    }
    else {
      let pointSize = 6;
      for(let a = 0; a < 50; a++) {
        stroke(pix)
        strokeWeight(pointSize)
        line(x, y, x + 50, y)

      //ellipse(x, y, pointSize, pointSize);
      //ellipse(x + (a + 5), y, pointSize, pointSize);
    }
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
