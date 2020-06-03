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
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 6;
const tileWidth = 6;

const x_step = 6;
const y_step = 6;

function draw () {
  pgrid();
  for(let i=0;i<8000;i++) {
    let x = random(sourceImg.width);
    let y = random(sourceImg.height);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 50;
    let len = 255-mask
    fill(pix);
    stroke(pix);
    if(mask[0] > 50) {
      strokeWeight(7.5);
      strokeCap(ROUND);
      let pointSize = mask[0]/25;
      line(x,y,x,y+pointSize)
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

function pgrid (){
  for (var x = 0; x < sourceImg.width; x = x + x_step) {
    for (var y = 0; y < sourceImg.height; y = y + y_step) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix[0],pix[1],pix[2],50);
      noStroke();
      if(mask[0] < 50){
        circle(x, y, tileWidth);
      }
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
