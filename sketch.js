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
  noStroke();
  background(50);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileWidth = 20;
const tileHeight = 2;

const x_step = 23;
const y_step =5;

function draw () {
  for(var x1 = 0; x1 < sourceImg.width; x1 = x1+ x_step){
    for(var y1 = 0; y1 < sourceImg.height; y1 = y1+ y_step){
        let pix = sourceImg.get(x1, y1);
        let mask = maskImg.get(x1, y1);
        fill(pix);
        stroke(pix);
    if(mask[0] < 128) {
      ellipse(x1, y1, tileWidth,tileHeight);
  }
  }
  }

  for(let i=0;i<800;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    if(mask[0] > 128) {
      drawcoin(x,y,20)
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

function drawcoin(x,y,size){
  let pix = sourceImg.get(x, y);
  let mask = maskImg.get(x, y);
  fill(pix);
  noStroke();
  stroke(255);
  strokeWeight(1.5);
  beginShape();
vertex(x, y);
bezierVertex(x+size,y, x+size,y+size*1.5, x, y+size*1.5);
bezierVertex(x+size,y, x+size,y+size*1.5, x, y);
endShape();

  beginShape();
vertex(x, y);
bezierVertex(x-size,y, x-size,y+size*1.5, x, y+size*1.5);
bezierVertex(x-size,y, x-size,y+size*1.5, x, y);
endShape();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
