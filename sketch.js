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
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<2000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 8;
    let halfSize = 180;
    fill(pix);
    if(mask[0] > 180) {
      rect(x, y, pointSize, pointSize);
    }
    else {
      stroke(10);

      triangle(x, y, x+pointSize, y+pointSize,x+pointSize+10, y+pointSize+10);    
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 30) {
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
