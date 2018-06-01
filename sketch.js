let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_2.jpg");
  maskImg = loadImage("mask_2_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

// let pointSize = 12.5;
let triSize = 10;
let triSize2 = 7;
let elementSpacing = 12.5;
let squareSize = 25
let circleSize = 2

function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
    // for(let i=0;i<1;i++) {
    let x2 = floor(random(sourceImg.width));
    let y2 = floor(random(sourceImg.height));
    let x = i * elementSpacing;
    let y = renderCounter * elementSpacing;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let mask2 = maskImg.get(x2, y2);
    let trix1 = floor(random(sourceImg.width));
    let triy1 = floor(random(sourceImg.height));
    let trix2 = floor(random(sourceImg.width));
    let triy2 = floor(random(sourceImg.height));
    let trix3 = floor(random(sourceImg.width));
    let triy3 = floor(random(sourceImg.height));

   
    let halfSize = squareSize/2;
    fill(pix);
    push();
    if(mask2[0] < 85) {
      // stroke(0)
      push();
      rect(x2, y2, squareSize, squareSize);

      pop();

      pop();


    }
    if(mask[0] > 85 && mask[0] < 170) {

      triangle(x, y+10, x-triSize, y-triSize, x+triSize, y-triSize);

      if(triSize > 2){

        triSize = triSize - 0.01;
}
          else(triSize = 2);

    }
    if(mask[0] > 170){

      ellipse(x, y, circleSize);

      if(circleSize < 15){

      circleSize = circleSize + 0.008;
}
        else(circleSize = 15);
        



    }

  }
  renderCounter = renderCounter + 1;
  if(renderCounter*elementSpacing > 1920) {
    // if(renderCounter > 10000) {
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }    
  console.log(1*renderCounter);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
