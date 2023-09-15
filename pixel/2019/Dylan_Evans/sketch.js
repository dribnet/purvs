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
  //noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const step_y = 10;
const step_x = 10;



function draw () {
    for (let y=0; y<height; y= y + step_y) {
    for (let x=0; x<width; x = x + step_x) {
      let pix = sourceImg.get(x,y);
      let mask = maskImg.get(x,y);
      
    let pointSize = 7;
    let outlineSize = 5;
    let halfSize = 5;
    if(mask[0] >= 255) {
      fill(pix,10);
      //noStroke();
      stroke(0,255,0, 60);
      strokeWeight(1);
      rect(x, y, pointSize, pointSize);
    }
    else if(mask[0] > 1) {
      fill(255);
      stroke(0);
      strokeWeight(1);
      rect(x, y, outlineSize, outlineSize);
    }
    else {
      fill(pix);
      noStroke();
      rect(x, y, halfSize, halfSize);
      fill(random(0,255), 150);
      diamond(x, y, halfSize);
    }
  }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    saveArtworkImage(outputFile);
  }
}

function diamond(x,y,size) {
  stroke(255);
  strokeWeight(1);
  quad(x-size/2, y, x, y-size/2, x+size/2, y, x, y+size/2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
