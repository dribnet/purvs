let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "artwork_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tile_width = 6;
const tile_height = 6;
const tile_step_x = 8;
const tile_step_y = 8;

function draw () {
for(let y=0; y<height; y = y + tile_step_y) {
  for(let x=0; x<width; x = x + tile_step_x) {
  let pix = sourceImg.get(x, y); 
  let mask = maskImg.get(x, y); 
  fill(pix);
  if(mask[0] > 127) {
    rect(x, y, tile_step_x/1.1, tile_step_y/1.1);
  }
  else {
    rect(x, y, tile_step_x /1.3, tile_step_y /1.3);
  }
}
}

  /*
  for(let i=0;i<2000;i++) {

   //figure out x + y
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    //colour of picture (RGB), colour of mask (B & W)
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 10;
    let halfSize = 5;
    fill(pix);
    if(mask[0] > 128) {
      ellipse(x, y, pointSize, pointSize);
    }
    else {
      rect(x, y, pointSize/2, pointSize/2);    
    }
  }
  */
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
