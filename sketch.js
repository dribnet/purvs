let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
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
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

let tilewidth = 10
let tileheight = 10



function draw() {

    for (var y = 0; y < sourceImg.height; y = y + tileheight) {
  for (var x = 0; x < sourceImg.width; x = x + tilewidth) {

let pix = sourceImg.get(x, y)
strokeWeight(.1)
stroke(pix)
noFill()
      line(x + (960-x)/(pix[1]/10), y + (320-y)/(pix[1]/10), x, y)
      fill(pix)
      noStroke()
      ellipse(x + (960-x)/(pix[1]/10), y + (320-y)/(pix[1]/10), 1, 1)
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
