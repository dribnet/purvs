let sourceImg=null;
let maskImg=null;
let renderCounter=0;

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
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
  background(180);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<14000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    if(mask[0] < 200 && renderCounter < 3) {
      blur (pix, x, y, pix[1]);
    }
    else if (mask[0] > 200){
      push();
      fill(pix);
      strokeWeight(0);
      let pointSize = random(14);
      let pointWidth = random(14);
      translate (x, y);
      rotate(random(360));
      ellipse(0, 0, pointSize, pointWidth);
      pop();
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

function blur (col, posx, posy, pixel) {
  for(let i=0;i<3;i++) {
  push();
  let monoDark = color(0);
  let monoLight = color(255);
  let brightness = map(pixel, 0, 200, 0, 1);
  let monochrome = lerpColor(monoDark, monoLight, brightness);

  fill(monochrome);
  stroke(monochrome);
  strokeWeight(9);
  strokeJoin(ROUND);
  let pointSize = random(10);
  let pointLength = random(10);
  translate (posx + random(20), posy + random(20));
  rotate(random(360));
  rect(0, 0, pointSize, pointLength);
  pop();
}
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
