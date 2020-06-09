let sourceImg = null;
let maskImg = null;
let renderCounter = 0;
// change these three lines as appropiate
let sourceFile = "input_2.jpg";
let maskFile = "mask_2.png";
let outputFile = "output_2.png";
//before code is up n running, process of showing the image
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

function setup() {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');
  imageMode(CENTER);
  noStroke();
  background(188, 201, 212);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}
//size for pixels
const size = 25;
const tileHeight = 8;
const tileWidth = 8;
const x_step = 8;
const y_step = 8;

function draw() {
  for (var x2 = 0; x2 < sourceImg.width; x2 = x2 + x_step) {
    for (var y2 = 0; y2 < sourceImg.height; y2 = y2 + y_step) {
      let pix = sourceImg.get(x2, y2);
      let mask = maskImg.get(x2, y2);
      fill(pix[0], pix[1], pix[2]);
      noStroke();
      if (mask[0] == 255) {
        rect(x2, y2, tileWidth, tileHeight);
      }
      else{
        if(mask[0]>0 && mask[0] < 255);
        fill(pix[0], pix[1], pix[2], 30);
        rect(x2,y2,tileWidth,tileHeight);
      }
    }
  }

  for (let i = 0; i < 3000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);


    //this is the the people
    if (mask[0] == 255) {
      fill(pix[0], pix[1], pix[2]);
      ellipse(x, y, size - 15, size - 15);
    }
    //background
    else if (mask[0] == 0) {
      fill(pix[0], pix[1], pix[2], 30);
      rect(x, y, size, size);
    }

    //the faces
    else if (mask[0] == 20) {
      fill(pix[0], pix[1], pix[2]);
      ellipse(x, y, size-20, size-20);
    }

    //the heart
    else if (mask[0] == 40) {
      fill(pix[0] + 90, pix[1] + 30, pix[2] + 30);
      ellipse(x, y, size - 15, size - 15);
    }
    //the pictures
    else if (mask[0] == 219) {
      fill(pix[0], pix[1], pix[2]);
      rect(x, y, size/4, size/2);
    }
    //the dragonfly
    else if (mask[0] == 140) {
      fill(pix[0] + 40, pix[1] + 40, pix[2] + 50, 100);
      rect(x, y, size / 4, size);
    }
    //this is the hill
    else if (mask[0] == 70) {
      fill(pix[0] + 10, pix[1] + 10, pix[2] + 10, 60);
      rect(x, y, size, size);
    }

}

  renderCounter = renderCounter + 1;
  if (renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    saveArtworkImage(outputFile);
  }
}
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
