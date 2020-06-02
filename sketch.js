let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile = "mask_1.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

let tilewidth = 10
let tileheight = 10



function draw() {

  for (var x = 0; x < sourceImg.width; x = x + tilewidth+4) {
    for (var y = 0; y < sourceImg.height; y = y + tileheight) {

let pix = sourceImg.get(x, y)
console.log(pix)
strokeWeight(0)
stroke(pix[0])
fill(pix[1])
      rect(x, y,pix[0]/20, tileheight)
    }
  }

  renderCounter = renderCounter + 1;
  if (renderCounter > 15) {
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
