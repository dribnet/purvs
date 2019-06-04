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
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tile_width = 10;
const tile_height = 5;
const tile_step_x = 5;
const tile_step_y = 10;

function draw_some_lines(x, y) {
  for(let i=0; i < 10; i=i+1) {
    let dx = random (-10, 10);
    let dy = random (-10, 10);
    let coin_flip = random([0, 1]);
    if (coin_flip == 0) {
      stroke(0);
    }
    else {
      stroke(0);
    }
    draw_some_line(x, y, x+dx, y+dy);
  }
}

function draw () {
 for(let y=0; y<height; y = y + tile_step_y) {
 	for(let x=0; x<width; x = x + tile_step_x){
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    

    fill(pix);
    stroke(pix);
    if(mask[0] > 100) {
      draw_some_lines(x, y, tile_width, tile_height);    
    }
    else {
      draw_some_line(x, y, tile_width, tile_height);  
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
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}