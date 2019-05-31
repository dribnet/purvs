let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "artwork_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');
  imageMode(CENTER);
  noStroke();
  background(158, 183, 177);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tile_width = 10;
const tile_height = 20;
const tile_step_x = 30;
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
        rect(x, y-10, tile_width, tile_height);
      }
      else {
      }
    }
  }

  for(let i=0;i<6000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 20;
    let halfSize = 3;
    if(mask[0] > 128) {
      // fill(0);
      // stroke(pix);   
      // ellipse(x, y, pointSize, halfSize); 
      // ellipse(x, y, pointSize/2, halfSize/2); 
      // ellipse(x, y, pointSize/4, halfSize/4); 
      fill(pix);
      stroke(pix);
      ellipse(x, y, halfSize, pointSize);
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
     //saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
