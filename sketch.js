let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// CHANGE FOR APPROPIATE IMAGE
let sourceFile = "input_3.jpg";
let maskFile = "mask_3.png";
let outputFile = "output_3.png";

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

const tileHeight = 10;
const tileWidth = 10;

const x_step = 12;
const y_step = 12;
// DARWING PATTERN AND DESIGN
function draw() {

  for (var x = 0; x < sourceImg.width; x = x + x_step) {
    for (var y = 0; y < sourceImg.height; y = y + y_step) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);

      if (mask[0] > 128) {
        fill(pix[0], pix[1], pix[2], 80);
        noStroke();
        rect(x, y, tileWidth + 5, tileHeight + 5);
      } else {
        drawStar(x, y, 2, pix);
        strokeWeight(3)
        rect(x, y, tileWidth, tileHeight);
      }

    }
  }

  //PAINT LOOK
  // for (let i = 0; i < 3000; i++) {
  //   let x = floor(random(sourceImg.width));
  //   let y = floor(random(sourceImg.height));
  //   let pix = sourceImg.get(x, y);
  //   let mask = maskImg.get(x, y);
  //   fill(pix);
  //   if (mask[0] > 128) {
  //     let pointSize = 3;
  //     fill(pix);
  //     noStroke();
  //     rect (x, y, pointSize*2, pointSize*5);
  //
  //   } else {
  //     let pointSize = 10;
  //     stroke(pix);
  //     //strokeWeight(3)
  //     drawStar(x,y,10);
  //     //line(x, y, x + pointSize, y);
  //     //line(x, y, x, y + pointSize);
  //
  //   }
  // }

  renderCounter = renderCounter + 1;
  if (renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // UNCOMMENT TO SAVE
    saveArtworkImage(outputFile);
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


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
