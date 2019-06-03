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

const tile_step_y = 10;
const tile_step_x = 10;

function draw () {
    
    for (let y = 0; y < height; y = y + tile_step_y) {
    for (let x = 0; x < width; x = x + tile_step_x) {
      
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);

    if(mask[0] > 128) {

      fill(pix);
      noStroke();
      rect (x, y, 10, 10);
    }
    else {
      fill(pix);
      stroke(0);
      strokeWeight(1);
      rect(x, y, 9, 9);
    }
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
