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
  noStroke();
  background('#0C252E');
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<4000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    noFill();

    var maskMap = map(mask[0], 0, 255, 0, 90);
    brushStroke(x, y, pix, maskMap, 3);
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    //saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}

function brushStroke(x, y, c, mask, level){ //Recursive function
  var size = map(mask, 0, 255, 8, 6);
  var length = map(mask, 0, 255, 10, 25);

  stroke(c);
  strokeWeight(size);
  
  push();
    translate(x, y); //move origin to pixel
    rotate(mask);
    line(0, 0, 0, length);
  pop();

  if(level>1 && (random(0, 1)>0.4)){ //adds chance to fail
    level-=1;
    brushStroke(x, y-(length/size), color(c[0], c[1], c[2]+length), mask, level);
    brushStroke(x-(length/size), y, color(c[0], c[1], c[2]-length), mask, level);
  }
}