let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "output_3.png";

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
  background(235);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<7000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    if(mask[0] < 200 && renderCounter < 3) {
      pencil (pix, x, y, pix[1]);

    }

    else if (mask[0] > 200){
      paint (pix, x, y);

    }

  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
     //saveArtworkImage(outputFile);
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
    let xStart = random (-10, 10);
    let yStart = random (-15, 15);
    let xDrift = random (-10, 10);
    let yDrift = random (-15, 15);
    line(posx - 20 + xStart, posy - 5 + yStart, posx + 20 + xDrift, posy + 5 + yDrift);
    line(posx - 20 + xStart, posy + 5 + yStart, posx + 20 + xDrift, posy - 5 + yDrift);
    pop();

}

}



function paint (col, posx, posy){
  push();
  fill(col);
  strokeWeight(0);
  let pointSize = random(4, 12);
  let pointWidth = random(4, 12);
  translate (posx, posy);
  rotate(random(360));
  ellipse(0, 0, pointSize, pointWidth);
  ellipse(0+4, 0+3, pointSize-2, pointWidth-4);
  ellipse(0+6, 0-6, pointSize * 0.7, pointWidth);
  ellipse(0-3, 0-5, pointSize * 0.5, pointWidth * 0.7);
  pop();

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
