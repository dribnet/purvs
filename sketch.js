let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  // noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {

  //2000 elements
  for(let i=0;i<3000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);
    console.log(mask);
    let pointSize=20;
    line(x,y, x, y+pointSize);





    // if(mask[0] > 128) {
    //   let pointSize = 70;
    //   ellipse(x, y, pointSize, pointSize);
    // }
    // else {
    //   let pointSize = 20;
    //   rect(x, y, pointSize, pointSize);
    // }
  }

  //runs 10 different times
  renderCounter = renderCounter + 1;
  if(renderCounter >10) {
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
