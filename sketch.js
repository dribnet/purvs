// /* Set to true to make final high-resolution version */
const finalVersion = true;
//
// /* Default versions of variables */
let pointSize = 40;
//
// /* Override some variables with high-resolution final version */
if (finalVersion) {
  pointSize = 10;
 }

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

  //NEW CODE FOR AFTER COMMIT OF OLDER CODE//
  stroke(0);
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tile_width = 6;
const tile_height = 8;
const tile_step_x = 6;
const tile_step_y = 10;

function draw () {
    for(let y=0; y<height; y = y + tile_step_y) {
    for(let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      if(mask[0] > 128) {
        rect(x, y, tile_step_x, tile_step_y);

      }
      else {
        //blur(2);
        triangle(x+(tile_width/2), y, x + tile_width, y + tile_height, x, y + tile_height);
        //fill(233, 45, 89, 200);
        triangle(x+(tile_width/2), y, x + tile_width, y + tile_height, x + (tile_width*1.5),y);
        //rect(x, y, tile_width, tile_height);
        //rect(x, y, pointSize*.8, pointSize*.8,8);

      }
    }
  }
  renderCounter = renderCounter + 1;

  //NEW CODE FOR AFTER COMMIT OF OLDER CODE//
   if(renderCounter > 1920/pointSize) {

   //if(renderCounter > 10) {
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
