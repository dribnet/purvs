let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "output_1.png";

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
  background(0);
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
      blur (pix, x, y);
    }
    else if (mask[0] > 200){
      push();
      fill(pix);
      strokeWeight(0);
      let pointSize = 6;
      translate (x, y);
      ellipse(0, 0, pointSize, pointSize);
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

function blur (col, posx, posy) {
  for(let i=0;i<3;i++) {
  push();
  stroke(col);
  fill(col);
  strokeWeight(7);
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
