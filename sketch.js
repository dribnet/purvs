let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// CHANGE FOR APPROPIATE IMAGE
let sourceFile = "input_2.jpg";
let maskFile = "mask_2.png";
let outputFile = "output_2.png";

// PROCESS SHOWING IMAGE
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

// DARWING PATTERN AND DESIGN
function draw() {
  for (let i = 0; i < 5000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    if (mask[0] > 128) {
      let pointSize = 5;
      fill(pix);
      strokeWeight(2)
      line (x+pointSize, y, x -pointSize, y);
      line (x, y+pointSize, x, y-pointSize);

    } else {
      let pointSize = 10;
      stroke(pix);
      //strokeWeight(3)
      drawStar(x,y,10);
      //line(x, y, x + pointSize, y);
      //line(x, y, x, y + pointSize);

    }
  }
  renderCounter = renderCounter + 1;
  if (renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // UNCOMMENT TO SAVE
    //saveArtworkImage(outputFile);
  }
}

function drawStar(x, y, size) {
  push();
  strokeWeight(0.5);
  translate(x, y)
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
