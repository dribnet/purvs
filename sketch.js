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

let tileHeight = 5;
let tileWidth = 5;

let x_step = 0;
let y_step = 0;

function draw () {
x_step = x_step + 10
y_step = y_step + 5;

  for (var x = 0; x < sourceImg.width; x = x + x_step) {
    for (var y = 0; y < sourceImg.height; y = y + y_step) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);

    if(mask[0] > 128) {
      fill(pix);
      stroke(pix);
      ellipse(x, y, tileWidth + 5, tileHeight + 5);

    }
      else {
        noFill();
        stroke(pix);
        ellipse(x, y, tileWidth + 15, tileHeight + 15);
        }
      }
    }
  }

  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
