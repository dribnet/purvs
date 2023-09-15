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
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<25000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    //stroke(pix);
    let pointSize = 20;
    let dice = random(1,6);
    let dark = color(20);
    let light = color(255,255,255);
    let bright = map(pix[1], 0, 200, 0, 1);
    let cd = lerpColor(dark, light, bright);

    if (mask[0] == 0) {
    fill(cd);
    stroke(cd);
    strokeWeight(1);
    rect(x, y, pointSize, pointSize);
    // image 23
    //  fill(pix);
    //  stroke(pix);
    //  strokeWeight(1);
    //  rect(x, y, pointSize, pointSize);

   }

   if (mask[0] == 255) {
     fill(cd);
     stroke(cd);
     line(x, y, x+pointSize, y);
     strokeWeight(1);
  }
  if (mask[0] == 129){
    fill(pix);
    stroke(pix);
    line(x, y, x+pointSize, y);
    strokeWeight(1);
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
