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
  background(30);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}
const tile_width = 5;
const tile_height = 5;

const triangle_width = 6;
const triangle_height = 6;

const tile_step_x = 10;
const tile_step_y = 10;

function draw () {

  for(let y = 0; y<height; y = y+tile_height){
    for (let x = 0; x<width; x = x+tile_width){
      let pix = sourceImg.get(x,y);
      let mask = maskImg.get(x, y);
      fill(pix);
    
      //if white on mask
      if(mask[0] > 128){
      fill(30);
      rect(x,y,tile_width, tile_height);
      fill(pix);   
        triangle(x, y-(tile_height/2), x+(tile_width/2), y+(tile_height/2), x-(tile_width/2), y+(tile_height/2)); 
          }

      //if black on mask
      else{
        fill(0);
        rect(x, y, tile_width, tile_height);
      }
    }
  }

 /*
  for(let i=0;i<2000;i++) {
    //pick x and y
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    //colours of images and mask
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize1 = 5;
    let pointSize2 = 5;
    let halfSize = 50;
    fill(pix);
   

   if(mask[0] > 128) {
     rect(x, y, pointSize1, pointSize1);
      

    }
    else {
      rect(x, y, pointSize2, pointSize2);    
    }
  }
  */

  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
   saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
