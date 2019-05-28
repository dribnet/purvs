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
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<5000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 30;
    let rectSize = 2;
    let halfSize = 6;
    let halfrectSize = 10;
    if(mask[0] > 128) {
      fill(pix);
      stroke(pix);
      rect(x, y, rectSize, halfrectSize);   
      ellipse(x, y, pointSize, halfSize); 
    }
    else {
      fill(9, 135, 198);
      stroke(9, 135, 198);
      ellipse(x, y, halfSize, pointSize);
      fill(28, 140, 226);
      stroke(28, 140, 226);
      ellipse(x, y, pointSize, halfSize); 
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
