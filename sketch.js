let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "artwork_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  stroke(0);
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

//--- TILES ---//
const tile_width = 8;
const tile_height = 10;
const tile_step_x = 6;
const tile_step_y = 8;

//--- DRAW TILES AND PIXELS ---//
function draw () {
    for(let y=0; y<height; y = y + tile_step_y) {
    for(let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      if(mask[0] > 128) {
        stroke(200);
        rect(x, y, tile_step_x, tile_step_y);

      }
      else {
        stroke(0);
        triangle(x+(tile_width/2), y, x + tile_width, y + tile_height, x, y + tile_height);
        //fill(232, 114, 39, 100);
        fill(54, 181, 27, 71);
        triangle(x+(tile_width/2), y, x + tile_width, y + tile_height, x + (tile_width*1.5),y);

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

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
}
