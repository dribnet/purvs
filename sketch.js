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
  noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 10;
const tileWidth = 10;

function draw () {

  for (var x = 0; x < sourceImg.width; x = x + tileWidth) {
    for (var y = 0; y < sourceImg.height; y = y + tileHeight) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      stroke(pix);
      rect(x, y, tileWidth, tileHeight);
    }
  }
  //for(let i=0;i<2000;i++) {
    //let x = floor(random(sourceImg.width));
    //let y = floor(random(sourceImg.height));
    //let pix = sourceImg.get(x, y);
    //let mask = maskImg.get(x, y);

    //if(mask[0] > 128) {
      //let pointSize1 = 2.5;
      //stroke(pix);
      //strokeWeight(pointSize1)
      //line(x, y, x + 70, y);
    //}
    //else {
      //let pointSize = 12;
      //noStroke();
      //fill(pix);
      //ellipse(x, y, pointSize, pointSize);
    //}
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
