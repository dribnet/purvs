let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
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
let squareSize = 12.5
let circleSize = 10

function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
    // for(let i=0;i<1;i++) {
    // let x = floor(random(sourceImg.width));
    // let y = floor(random(sourceImg.height));
    let x = i * elementSpacing;
    let y = renderCounter * elementSpacing;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let trix1 = floor(random(sourceImg.width));
    let triy1 = floor(random(sourceImg.height));
    let trix2 = floor(random(sourceImg.width));
    let triy2 = floor(random(sourceImg.height));
    let trix3 = floor(random(sourceImg.width));
    let triy3 = floor(random(sourceImg.height));
   
    let halfSize = squareSize/2;
    fill(pix);
    push();
    if(mask[0] < 85) {
      // stroke(0)
      push();
      rect(x, y, squareSize, squareSize);
      // fill(255);
      // ellipse(x, y, circleSize, circleSize);
      // triangle(x, y+10, x-triSize2, y-triSize2, x+triSize2, y-triSize2);
      pop();
      // triangle(trix1, triy1, trix2, triy2, trix3, triy3)
      // fill(255, 100, 0);
      pop();
      // triangle(x, y, x-halfSize, y-pointSize, x+halfSize, y-pointSize);

    }
    if(mask[0] > 85 && mask[0] < 170) {
      // rect(x, y, squareSize, squareSize); 
      triangle(x, y+10, x-triSize, y-triSize, x+triSize, y-triSize);
      // fill(100);   
      // triangle(x, y+10, x-triSize/2, y-triSize/2, x+triSize/2, y-triSize/2);   

    }
    if(mask[0] > 170){

      ellipse(x, y, circleSize, circleSize);

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
