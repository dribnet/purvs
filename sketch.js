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
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 10;
const tileWidth = 18;

const x_step = 12;
const y_step = 12;

function draw() {

  for (let i = 0; i < 4000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let r = random(10, 60);
    fill(pix);
    stroke(pix);
    strokeWeight(4);

    let dice = random(1, 6);
    if (mask[0] < 128) { //if mask is black
      drawStar(x,y,r);
    } else {
      ellipse(x, y, tileWidth, tileHeight);
    }
  }

  renderCounter = renderCounter + 1;
  if (renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function drawStar(xPos, yPos, size) {
  push();
  translate(xPos, yPos);
  strokeWeight(3);
  let half = size / 2.5;
  let diagHalf = half * 0.75;

  line(-half, 0, half, 0); //horizontal
  line(0, half, 0, -half); //vertical
  line(-diagHalf, -diagHalf, diagHalf, diagHalf); //left diagonal
  line(-diagHalf, diagHalf, diagHalf, -diagHalf); //right diagonal
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
