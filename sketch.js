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
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tile_width = 6;
const tile_height = 6;

function draw () {
  // version 1: just draw all the tiles
  for(let y=0; y<height; y = y + tile_height +2) {
    for(let x=0; x<width; x = x + tile_width +2) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      console.log(pix[1]);
      fill(pix);
      //rect(x, y, tile_width, tile_height);
      if(mask[0] > 128) {
        fill(pix);
        rect(x, y, tile_width, tile_height);
      }
      else {
        let shade = pix[1];
        fill(shade);
        rect(x, y, tile_width, tile_height);
      }
    }
  }


  
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
