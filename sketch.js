let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_2.jpg";
let maskFile   = "mask_2.png";
let outputFile = "artwork_2.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');
  imageMode(CENTER);
  noStroke();
  background(28, 140, 226);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tile_width = 10;
const tile_height = 13;
const tile_step_x = 10;
const tile_step_y = 20;

function draw () {

  // // version 1: just draw all the tiles
  for(let y=0; y<height; y = y + tile_step_y) {
    for(let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      let pointSize = 20;
       let rectSize = 40;
       let halfSize = 5;
       let halfrectSize = 50;
      fill(pix);
      if(mask[0] < 128) {
        noStroke();
        fill(pix);
        rect(x, y, tile_width, tile_height);
      }
      else {
      }
    }
  }

  for(let i=0;i<5000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 20;
    let rectSize = 2;
    let halfSize = 6;
    let halfrectSize = 6;
    if(mask[0] > 128) {
      fill(pix);
      stroke(pix);
      rect(x, y, rectSize, halfrectSize);   
      ellipse(x, y, pointSize, halfSize); 
    }
    else {

    }
  }

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
