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
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}
const rect_width = 22;
const rect_height = 3;
const x1 = 4;
const y1 = 6;
function draw () {
for(let y = 0; y<height; y =y + y1) {
  for(let x = 0; x<width; x = x + x1) {
    let pix = sourceImg.get(x,y);
    let mask = maskImg.get(x, y);
  fill(pix);
    if(mask[0] > 128) {

noStroke();
      ellipse(x, y, x1, y1);


    }
    else {
  strokeWeight(1);
            stroke(49,149,211);
      rect(x,y,rect_width,rect_height);
    }
}
}

  // for(let i=0;i<2000;i++) {
  //   let x = floor(random(sourceImg.width));
  //   let y = floor(random(sourceImg.height));
  //   let pix = sourceImg.get(x, y);
  //   let mask = maskImg.get(x, y);
  //   let pointSize = 20;
  //   let halfSize = 50;
  //   fill(pix);
  //   if(mask[0] > 128) {
  //     ellipse(x, y, pointSize/1.1, pointSize/1.1);
  //   }
  //   else {
  //     rect(x, y, pointSize, pointSize);
  //   }
  // }
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
