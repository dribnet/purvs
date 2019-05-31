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

//TILE CONSTANTS ----------------------------------------------------
const tile_width = 20;
const tile_width2 = 8;

const tile_height = 8;
const tile_height2 = 20;

const tile_step_x = 9;
const tile_step_y = 9;

//DRAW FUNCTION -----------------------------------------------------

function draw () {
  //TILE FUNCTION 
  for (let y=0; y<height; y= y + tile_step_y) {
    for (let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x,y);
      let mask = maskImg.get(x,y);
      fill(pix)

      //WHITE MASK 255 background
      if(mask[0] > 200){       
        rect(x, y, tile_width, tile_height);
     } 

    //GREY MASK billboard
    if(mask[0] > 100 && mask[0] < 255){
      ellipse (x, y, 20, 20);
     }

    //BLACK MASK 0 eye
    if(mask[0] < 10) {
      ellipse(x, y, 6, 6);
     }

    }
  }

//DRAWS IMAGE 10 TIMES
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
       saveArtworkImage(outputFile);
  }
}

function keyTyped () {
  if (key == '!') {
    saveBlocksImages();
  }
}