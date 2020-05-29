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
  // strokeWeight(0.2);
  // stroke(0);
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 8;
const tileWidth = 18;

const x_step = 12;
const y_step = 12;

function draw() {

  for (let i = 0; i < 4000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);
    strokeWeight(5);

    let dice = random(1, 6);
    if (mask[0] < 128) { //if mask is black
      if (dice > 4) {

        line(x, y, x, y + y_step); // horizonal "windy"
      } else {
        line(x, y, x + x_step, y); // horizonal "windy"
      }

    } else {
      ellipse(x, y, tileWidth, tileHeight);
      // rect(x, y, tileWidth, tileHeight);
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

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
