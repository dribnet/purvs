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

const tile_width1 = 14;
const tile_height1 = 14;

function draw () {
  for(let y=0; y<height; y = y + tile_height +2) {
    for(let x=0; x<width; x = x + tile_width +2) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      let shade = pix[0];

      if(mask[0] == 255) {
        fill(shade);
        rect(x, y, tile_width, tile_height);
      }
      if(mask[0] == 0) {
        fill(pix);
        rect(x, y, tile_width, tile_height);
      }
      if(mask[0] == 155) {
        fill(255);
        rect(x, y, tile_width, tile_height);
      }
    }
  }
  for(let y=0; y<height; y = y + tile_height1 +2) {
    for(let x=0; x<width; x = x + tile_width1 +2) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      let shade = pix[0];
      if(mask[0] == 155) {
        fill(shade);
        rect(x, y, tile_width1, tile_height1);
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
