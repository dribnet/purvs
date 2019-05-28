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
  background(219, 182, 0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tile_width = 10;
const tile_height = 3;
const tile_step_x = 10;
const tile_step_y = 20;

function draw () {

  //draws ellipses
  for(let i=0;i<10000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 10;
    let halfSize = 7;
    if(mask[0] > 128) {
      fill(0);
      stroke(pix);   
      ellipse(x, y, pointSize, halfSize); 
      ellipse(x, y, pointSize/2, halfSize/2); 
      // fill(pix);
      // stroke(pix);
      // ellipse(x, y, halfSize, pointSize);
      // ellipse(x, y, pointSize, halfSize);
    }
    else {

    }
  }


  // draws tiled lines
  for(let y=0; y<height; y = y + tile_step_y) {
    for(let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      let pointSize = 20;
       let halfSize = 5;
      fill(pix);
      if(mask[0] < 128) {
        noStroke();
        fill(50);
        rect(x-5, y, tile_width, tile_height);
      }
      else {
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
