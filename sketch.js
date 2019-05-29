// // /* Set to true to make final high-resolution version */
// const finalVersion = true;
// //
// // /* Default versions of variables */
// let pointSize = 40;
// //
// // /* Override some variables with high-resolution final version */
// if (finalVersion) {
//   pointSize = 40;
//  }

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

  //NEW CODE FOR AFTER COMMIT OF OLDER CODE//
  stroke(0);
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tile_width = 18;
const tile_height = 20;
const tile_step_x = 12;
const tile_step_y = 10;

function draw () {
    for(let y=0; y<height; y = y + tile_step_y) {
    for(let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);

      //let pointSize = 30;
      //let halfSize = pointSize/4;

      fill(pix);

      if(mask[0] > 128) {
        //stroke(255, 98, 0, 220);
        stroke(255); 
        strokeWeight(0.5);
        // triangle(x+(tile_width/2), y, x + tile_width, y + tile_height, x, y + tile_height);
        triangle(x+(tile_width/2), y, x + tile_width, y + tile_height, x + (tile_width*1.5), y);
        //rect(x, y, pointSize*1.5, pointSize*1.5);

      }

      else {
        stroke(0);
        strokeWeight(0.2);
        //fill(255, 0, 0, 10);
        //rect(x, y, pointSize, pointSize);
        triangle(x+(tile_width/2), y, x + tile_width, y + tile_height, x, y + tile_height);
        //stroke(0);
        //triangle(x+(tile_width/2), y, x + tile_width, y + tile_height, x + (tile_width*1.5), y);

      }
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
