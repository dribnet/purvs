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
  background(153);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tile_width = 2; //this does not have to be the same as the tile height 
const tile_height = 5; //this does not have to be the same as the tile width
const tile_step_x = 9; // tile = how far apart to fill in the space 
const tile_step_y = 15; // the more increase = the more blocky it gets

function draw () {
  background(0,0,0);

  // version 1: just draw all the tiles
  for(let y=0; y<height; y = y + tile_step_y) {
    for(let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      if(mask[0] > 100) {
         ellipse(x, y, tile_width, tile_height);
        rect(x, y, tile_width, tile_height);

      }
      else {
        rect(x, y, tile_step_x, tile_step_y);
        
      }
    }
  }

  renderCounter = renderCounter + 1;
  if(renderCounter > 30) {
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
