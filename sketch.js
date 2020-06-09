let elementSpacing = 40;
let squareSize = 40;
let colorSquareSize = 40;

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
  // noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileWidth = 5;
const tileHeight = 5;

const x_step = 7;
const y_step = 7;


function draw() {

  for(let i=0; i<2000; i++){
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    // let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    // fill(pix);

    let pointSize = 15;
    let pixMod = sourceImg.get(x, y);
    console.log(mask[0]);

    if(mask[0] > 72 && mask[0] < 76){     // dark grey mask (orange)
      pixMod[0] = pixMod[0]*2;
      pixMod[1] = pixMod[1]/3;
      pixMod[2] = pixMod[2]*3;
      noStroke();
      fill(230, 214, 78);
      rect(x, y, pointSize/2, pointSize/2);

    }else if(mask[0]< 130 && mask[0] > 125){     //light grey mask (blue)
      fill(15, 171, 214);
      stroke(15, 171, 214);
      rect(x, y, tileWidth, tileHeight);
    }
  }



for(var x2 = 0; x2 < sourceImg.width; x2 = x2 + tileWidth){        //white
  for(var y2 = 0; y2 < sourceImg.height; y2 = y2 + tileHeight){
    let pixMod = sourceImg.get(x2, y2);
    let mask = maskImg.get(x2, y2);
    pixMod[0] = pixMod[0]*2;
    pixMod[1] = pixMod[1]/2;
    pixMod[2] = pixMod[2];
    noStroke();
    fill(pixMod);

    if(mask[0] > 200){
      rect(x2, y2, tileWidth, tileHeight);
    }
    else if (mask[0] < 10){
      fill(230, 78, 149);
      stroke(230, 78, 149);
      rect(x2, y2, tileWidth, tileHeight);
      fill(88, 153, 135);
      stroke(88, 153, 135);
      rectMode(CENTER);
      rect(x2, y2, tileWidth, tileHeight/3);
    }
  }
}







  //runs 10 different times
  renderCounter = renderCounter + 1;
  if (renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    saveArtworkImage(outputFile);
  }
}


function drawStar(x, y, size) {
  push();
  strokeWeight(3);
  translate(x, y);
  for (var i = 0; i < 10; i++) {
    line(size, 0, -size, 0);
    rotate(360 / 5);
  }
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
