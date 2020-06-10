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
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<8000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    if(mask[0] < 200 && renderCounter < 8) {
      pencil (pix, x, y, pix[1]);

    }
    else {
      let pointSize = 15;
      rect(x, y, pointSize, pointSize);
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



function pencil (col, posx, posy, pixel) {
for(let i=0;i<1;i++) {
  push();
    let monoDark = color(0);
    let monoLight = color(220);
    let brightness = map(pixel, 0, 220, 0, 1);
    let monochrome = lerpColor(monoDark, monoLight, brightness);

    fill(monochrome);
    stroke(monochrome);
    strokeWeight(1);
    strokeCap(ROUND);
    translate(posx, posy);

    // rotate(random(0, 10));
    // line(-10, 0, 10, 0)

    rotate(random(-20, 0));
    line(-10, 0, 10, 0)

     pop();

}

}



function paint (col, posx, posy){
  push();
  fill(col, 0.1);
  strokeWeight(0);
  let pointSize = random(4, 8);
  let pointHeight = random(8, 12);
  translate (posx, posy);
  rotate(random(10, 30));
  ellipse(0, 0, pointSize, pointHeight);
  ellipse(0+4, 0+3, pointSize-4, pointHeight-2);
  ellipse(0+6, 0-6, pointSize * 0.7, pointHeight);
  ellipse(0-3, 0-5, pointSize * 0.5, pointHeight * 0.7);
  pop();

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
