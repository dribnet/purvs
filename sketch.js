let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_2.jpg";
let maskFile   = "mask_2.png";
let outputFile = "output_2.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(138, 35, 235);                       // dark purple
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 2;
const tileWidth = 3;

function draw () {

  // -------- LAYER 1: GRID BACKGROUND -------- //

  for(var x = 0; x < sourceImg.width; x = x + tileWidth){
    for(var y = 0; y < sourceImg.height; y = y + tileHeight){
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      noStroke();
    rect(x, y, tileHeight, tileWidth);
  }
}

  // -------- LAYER 2: DRAWING MAIN IMAGE  -------- //

  for(let i = 0; i < 6000; i++) {

    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    fill(pix);
    stroke(pix);

    if(mask[0] >= 0 && mask[0] < 150) {            // black mask
      let pointSize = 20;
      push();
      strokeWeight(5);
      line(x, y, x + pointSize - 30, y + 10);
      pop();
    }
    else if(mask[0] >= 201 && mask[0] < 250) {      // grey mask
      let pointSize = 15;
      push();
      fill(pix[0],pix[1],pix[2]);
      strokeWeight(3);
      line(x, y, x + pointSize, y + 5);
      pop();
    }
    else {                                          // white mask
      let pointSize = 9;
      ellipse(x, y, pointSize, pointSize);
    }
  }



  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
   // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
