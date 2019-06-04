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
const tile_step_x = 7;
const tile_step_y = 7;

function draw () {
 background(50);
  for(let y=0; y<height; y=y+tile_step_y){
    for(let x=0; x<width; x=x+tile_step_x){
      let pix = sourceImg.get(x,y);
      let mask = maskImg.get(x,y);
      fill(pix);
      if(mask[0]>128){
        let pointSize = 15;
      rect(x,y,pointSize,pointSize);
    }
    else{
      let pointSize = 10;
      ellipse(x,y,pointSize,pointSize);
    }
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
