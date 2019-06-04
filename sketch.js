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

const tile_width = 10;
const tile_height = 10;
const tile_step_x = 5;
const tile_step_y = 5;



function draw () {
  // for(let i=0;i<2000;i++) {
    // let x = floor(random(sourceImg.width));
    // let y = floor(random(sourceImg.height));

for(let y=0; y<height; y = y + tile_step_y) {
    for(let x=0; x<width; x = x + tile_step_x) {
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    

    if(mask[0] < 250) {
      let pointSize = 1;
      let x2 = floor(random(sourceImg.width));
      let y2 = floor(random(30));
      stroke(pix);
      strokeWeight(1);
      noFill()
      line(x, y+y2, x2, y+y2); 
    }
  }
// }
}

    for(let y=0; y<height; y = y + tile_step_y) {
    for(let x=0; x<width; x = x + tile_step_x) {
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
   

    if(mask[0] > 250) {
      stroke(pix);
      strokeWeight(1)
      squareBase = map(y, 0, 700, 25, 8);
      squareSize = squareBase + floor(random(13, 8));
      noFill();
      rect(x, y, squareBase, squareSize);
    }
  }
// }
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