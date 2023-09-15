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
  background(40);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tile_width = 3;
const tile_height = 3;
const tile_step_x = 3;
const tile_step_y = 3;

function draw () {


  for(let y=0; y<height; y = y + tile_step_y) {
    for(let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
     // console.log(pix[1]);
      fill(pix);
      //rect(x, y, tile_width, tile_height);
      if(mask[0] > 128) {
        let shade = pix[1];
        fill(shade);
        ellipse(x, y, tile_width, tile_height);
      }
     
    }
  }


// make the mask pixeled
for(let y=0; y<height; y = y + tile_step_y+4) {
    for(let x=0; x<width; x = x + tile_step_x+4) {
 let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
        if(mask[0] <= 128){
        let tile_width = 6;
        let tile_height = 6;
        const tile_step_x = 3;
        const tile_step_y = 3;
        fill(pix);
        rectMode(CENTER);
        ellipse(x, y, 6, 6);
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
