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
const tile_width = 8;
const tile_height = 8;
const tile_step_x = 8;
const tile_step_y = 8;

function draw_some_lines (x,y){
  for(let i=0; i<10; i=i+1)  {
    let pix = sourceImg.get(x, y);
    let dx1 = random(-10,10)
    let dy1 = random(-10,10)
    let dx2 = random(-10,10)
    let dy2 = random(-10,10)
    let coin_flip = random(0,1)
    if (coin_flip == 0){
      stroke(0);
    }
    else {
      stroke(255);
    }
    stroke(pix);
    line(x+dx1,y+dx1,x+dx2,y+dx2);
  }
}
function draw () {
  for(let i=0;i<8000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = random(10,20);
    let halfSize = 50;
    fill(pix);
    if(mask[0] < 10) {
      draw_some_lines(x,y);
    }
    else if(mask[0]<200){
      noFill();
      stroke(pix/2);
      rect(x, y, pointSize, pointSize);  
    }
    else {
      noStroke();
      ellipse(x, y, pointSize, pointSize);    
    }
  }
  
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
