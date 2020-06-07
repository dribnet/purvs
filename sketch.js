//Code for my mask layers referenced from Hansol Gal's work
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
  noStroke();
  background(196, 60, 230); //purple
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<4000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);


    if(mask[0] >= 0 && mask[0] < 150) { //Black mask - background
      let pointSize = 10;
      push();
      strokeWeight(6);
      line(x, y, x + pointSize-30, y+10);
      pop();
    }
    else if(mask[0] >= 201 && mask[0] < 250) { //Grey - outline of leaves
      let pointSize = 18;
      noFill();
      stroke(pix);
      strokeWeight(3);
      arc(x, y, pointSize, pointSize, HALF_PI, PI);
      arc(x, y, pointSize, pointSize, PI + QUARTER_PI, TWO_PI);
    }
    else { //white - details inside leaves
      let pointSize = 15;
      noFill();
      stroke(pix);
      strokeWeight(5);
      arc(x, y, pointSize, pointSize, HALF_PI, PI);
      line(x, y, x + pointSize-10, y+10);
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
