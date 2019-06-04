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
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tile_width = 3;
const tile_height = 3;
//white
const tile_step_x1 = 3;
const tile_step_y1 = 3;
//light grey
const tile_step_x2 = 2;
const tile_step_y2 = 2;
//dark grey
const tile_step_x3 = 1;
const tile_step_y3 = 1;
//black
const tile_step_x4 = 3.5;
const tile_step_y4 = 3.5;


function draw () {
  background(0);

//white mask layer
  for(let y=0; y<height; y = y + tile_step_y1) {
    for(let x=0; x<width; x = x + tile_step_x1) {
      let pix = sourceImg.get(x, y); 
      let mask = maskImg.get(x, y); 
      fill(pix);
      if(mask[0] > 250) {
        ellipse(x, y, tile_step_x1, tile_step_y1);
      }
    }
  }
//black mask layer
  for(let y=0; y<height; y = y + tile_step_y4) {
    for(let x=0; x<width; x = x + tile_step_x4) {
      let pix = sourceImg.get(x, y); 
      let mask = maskImg.get(x, y); 
      fill(pix);
      if(mask[0] <= 0) {
        ellipse(x, y, tile_step_x4, tile_step_y4);
      }
    }
  }
//light grey mask layer
  for(let y=0; y<height; y = y + tile_step_y2) {
    for(let x=0; x<width; x = x + tile_step_x2) {
      let pix = sourceImg.get(x, y); 
      let mask = maskImg.get(x, y); 
      fill(pix);
      if(mask[0] <= 250 && mask[0] > 150) {
        ellipse(x, y, tile_step_x2, tile_step_y2);
      }
    }
  }
//dark grey mask layer
  for(let y=0; y<height; y = y + tile_step_y3) {
    for(let x=0; x<width; x = x + tile_step_x3) {
      let pix = sourceImg.get(x, y); 
      let mask = maskImg.get(x, y); 
      fill(pix);
      if(mask[0] <= 130 && mask[0] > 10) {
        ellipse(x, y, tile_step_x3, tile_step_y3);
      }
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
