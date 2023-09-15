let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile = "mask_1.png";
let outputFile = "output_1.png";
let wasteTextFile = "wasteText.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
  wasteTextImg = loadImage(wasteTextFile);
}

function setup() {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');
  imageMode(CENTER);
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}


function draw() {
  for (let i = 0; i < 25000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);
    fill(pix);
    if (mask[0] < 128) {
      line(x, y, x + 30, y);
        } else
          gajuarText(x, y);
    }

  renderCounter = renderCounter + 1;
  if (renderCounter > 20) {
    console.log("Done!")
    noLoop();
    //uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function gajuarText(x, y) {
  if (x > 590) {
    line(x, y, x + 10, y)
  } else {
    noStroke();
    image(wasteTextImg, 250, 500, 650, 300);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
