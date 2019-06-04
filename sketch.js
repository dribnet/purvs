let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_2.jpg";
let maskFile   = "mask_2.png";
let outputFile = "artwork_2.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  //noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const step_y = 10;
const step_x = 10;

function outertangle(x,y,size) {
  push();
  stroke(0, 255, 255);
  strokeWeight(1);
  rect(5+x,5+y,size/10, size/20,20);
  pop();
  
  stroke(178,34,34);
  strokeWeight(1);
  rect(x,y,size/x, size/y,20);
  rect(5+x,5+y,size/5, size/10,20);
  
}

function innertangle(x,y,size) {
  rect(5+x,5+y,size/10, size/20,20);
  
  push();
  rect(x,y,size/x, size/y,20);
  rect(5+x,5+y,size/5, size/10,20);
  rect(5+x,5+y,size/2, size/5,20);
  pop();
  
}



function draw () {
    for (let y=0; y<height; y= y + step_y) {
    for (let x=0; x<width; x = x + step_x) {
      let pix = sourceImg.get(x,y);
      let mask = maskImg.get(x,y);
      
    let pointSize = 20;
    let halfSize = 20;
    if(mask[0] > 128) {
      fill(pix,63,20);
      //noStroke();
      stroke(0, 128, 128, 60);
      //strokeWeight(1);
      innertangle(x, y, pointSize, pointSize);
    }
    else {
      fill(pix);
      noStroke();
      rect(x, y, halfSize, halfSize);
      fill(random(0,255), 150);
      outertangle(x, y, halfSize);
    }
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





