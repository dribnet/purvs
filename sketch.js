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



const tile_width = 20;
const tile_height = 20;
const tile_step_x = 2;
const tile_step_y = 20;

//image1 const tile_width = 8;
//const tile_height = 8;


function draw () {
//  for(let i=0;i<5000;i++) {
  //  let x = floor(random(sourceImg.width));
//    let y = floor(random(sourceImg.height));
//    let pix = sourceImg.get(x, y);
//    let mask = maskImg.get(x, y);
//    fill(pix);
//    stroke(pix);

for(let y=0; y<height; y = y + tile_step_y) {
    for(let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      if(mask[0] > 128) {
        rect(x, y, tile_step_x, tile_step_y);
      }
      else {
        ellipse(x, y, tile_width, tile_height);
      }
    }

    }
//image 1
    //if(mask[0] > 128) {
    //  let pointSize = 2;
    //  let x2 = floor(random(sourceImg.width));
    //  let y2 = floor(random(sourceImg.height));
    //  line(x, y, 128, 1038);

  //  }
    //else {

    //  let pointSize = 20;
    //  ellipse(x, y, pointSize, pointSize);
  //  }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
  //saveArtworkImage(outputFile);
  }


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
