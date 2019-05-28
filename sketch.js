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

const tile_width = 3;
const tile_height = 10;
const tile_step_x = 6;
const tile_step_y = 10;

function draw () {
  //   background(0, 102, 51);

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
      if(mask[0] > 128) {
        fill(pix);
        stroke(pix);
        ellipse(x, y, pointSize, halfSize);
        ellipse(x, y, halfSize, pointSize);  
      }
      else {
        noStroke();
        fill(0, 153, 76);
        rect(x, y, tile_width, tile_height);
      }
    }
  }

  // for(let i=0;i<4000;i++) {
  //   let x = floor(random(sourceImg.width));
  //   let y = floor(random(sourceImg.height));
  //   let pix = sourceImg.get(x, y);
  //   let mask = maskImg.get(x, y);
  //   let pointSize = 20;
  //   let rectSize = 2;
  //   let halfSize = 6;
  //   let halfrectSize = 6;
  //   if(mask[0] > 128) {
  //     // fill(0);
  //     // stroke(pix);   
  //     // ellipse(x, y, pointSize, halfSize); 
  //     // ellipse(x, y, pointSize/2, halfSize/2); 
  //     // ellipse(x, y, pointSize/4, halfSize/4); 
  //     fill(pix);
  //     stroke(pix);
  //     ellipse(x, y, halfSize, pointSize);
  //     ellipse(x, y, pointSize, halfSize);
  //   }
  //   else {
  //     fill(0);
  //     fill(0);
  //     rect(x, y, rectSize, halfrectSize);
  //   }
  // }

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
