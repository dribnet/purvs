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
  //noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 30;
const tileWidth = 30;

const x_step = 30;
const y_step = 30;

function draw() {

  for (var x = 0; x < sourceImg.width; x = x + x_step) {
    for (var y = 0; y < sourceImg.height; y = y + y_step) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);

      fill(pix[0],pix[1],pix[2],50);
      noStroke();
      rect(x, y, tileWidth, tileHeight);
      drawStar(x,y,10,pix);
    }
  }



  renderCounter = renderCounter + 1;
  if (renderCounter > 2) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function drawStar(x, y, size,c) {
  stroke(c);
  push();
  //strokeWeight(4);
  translate(x+15, y+15);
  for (var i = 0; i < 10; i++) {
    line(size, 0, -size, 0);
    rotate(360 / i);
  }
  pop();
}



function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
