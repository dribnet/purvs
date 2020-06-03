let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_2.jpg";
let maskFile = "mask_2.png";
let outputFile = "output_2.png";

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
const tileWidth = 10;

const x_step = 10;
const y_step = 10;

function draw() {

  for (let i = 0; i < 4000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let r = random(10, 60);
    fill(pix);
    stroke(pix);

    let dice = random(1, 6);
    if (mask[0] < 120) { //  if mask is black
      drawStar(x, y, r);
    } else if (mask[0] > 120 && mask[0] < 190) { //   if mask is grey

      if (pix[2] < pix[0]) {
        let pixMod = sourceImg.get(x, y);
        strokeWeight(6);
        pixMod[2] = 50;
        stroke(pixMod);
      } else {
        strokeWeight(5);
        stroke(pix);
      }
      
      strokeWeight(6);
      if (dice > 3.5) {
        line(x, y, x, y + 12); // horizonal
      } else {
        line(x, y, x + 12, y); // vertical
      }
    }

  }
  for (var x2 = 0; x2 < sourceImg.width; x2 = x2 + x_step) {
    for (var y2 = 0; y2 < sourceImg.height; y2 = y2 + y_step) {
      let pix = sourceImg.get(x2, y2);
      let mask = maskImg.get(x2, y2);
      fill(pix[0], pix[1], pix[2]);
      noStroke();
      if (mask[0] > 190) { //mask is white
        ellipse(x2, y2, tileWidth + 10, tileHeight + 5);
      }
    }
  }

  renderCounter = renderCounter + 1;
  if (renderCounter > 7) {
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
