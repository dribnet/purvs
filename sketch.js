let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile = "mask_3.png";
let outputFile = "output_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw() {
  for (let i = 0; i < 3000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    console.log(mask);

    if (mask[0] > 220) {
      let pointSize = 2;
      ellipse(x, y, pointSize, 30);
    } else if (mask[0] < 10) {
      let pointSize = 6;
      ellipse(x, y, pointSize, pointSize);
    } else if (mask[0] < 140) {
      let pointSize = 3;
      ellipse(x, y, 24, pointSize);
    } else if (mask[0] < 210) {
      let pointSize = 5;
      ellipse(x, y, pointSize, 75);
    }
  }
  renderCounter = renderCounter + 1;
  if (renderCounter > 90) {
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
