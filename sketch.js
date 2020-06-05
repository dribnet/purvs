let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// CHANGE FOR APPROPIATE IMAGE
let sourceFile = "input_1.jpg";
let maskFile = "mask_1.png";
let outputFile = "output_1.png";

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

const tileHeight = 5;
const tileWidth = 5;
const x_step = 5;
const y_step = 5;

// DARWING PATTERN AND DESIGN
function draw() {

  for (var x = 0; x < sourceImg.width; x = x + x_step) {
    for (var y = 0; y < sourceImg.height; y = y + y_step) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      // BLACK MASK (BACKGROUND)
      if (mask[0] == 0) {
        //fill(pix) //(pix[0], pix[1], pix[2], 80);
        noFill()
        strokeWeight(2)
        stroke(pix[0], pix[1], pix[2], 80)
        triangle(x, y, x + tileWidth * 4, y + tileHeight * 4, x - tileWidth * 5, y + tileHeight * 3);
        //rect(x, y, tileWidth, tileHeight); // THIS COVERS UP ANY WHITE LINES FROM MASK
      // WHITE MASK (GIRL) ACTS AS BACKGROUND COLOUR
    } else {
        noStroke()
        fill(pix[0], pix[1], pix[2], 50);
        rect(x, y, tileWidth, tileHeight);
      }
    }
  }

// GREY AND WHITE MASK
  for (let i = 0; i < 9000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    // WHITE MASK (DOTS)
    if (mask[0] > 200) {
      let pointSize = 4;
      fill(pix);
      noStroke();
      ellipse(x, y, pointSize, pointSize);
      // GREY MAKS (HAIR WAVES)
    } else if (mask[0] >= 180 && mask[0] < 200) {
      let pointSize2 = 20;
      drawWaves(x, y, 20, 20, pix);
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

function drawStar(x, y, size, c) {
  stroke(c);
  push();
  //strokeWeight(4);
  translate(x + 5, y + 5);
  for (var i = 0; i < 10; i++) {
    line(size, 0, -size, 0);
    rotate(360 / i);
  }
  pop();
}

function drawWaves(x, y, sizeW, sizeH, c) {
  push();
  angleMode(DEGREES);
  stroke(c)
  strokeWeight(3)
  noFill()
  arc(x, y, sizeW, sizeH, 0, 90);
  arc(x + 30, y - 20, sizeW, sizeH, 0, 90);
  arc(x + 30, y - 15, sizeW, sizeH, 180, 270);
  arc(x - 10, y - 10, sizeW, sizeH, 330, 70);

  pop();
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
