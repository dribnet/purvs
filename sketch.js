let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_2.jpg";
let maskFile   = "mask_2.png";
let outputFile = "output_2.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  //noStroke();
  smooth();
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

    fill(pix);
    stroke(pix);
    strokeWeight(5);
    if(mask[0] > 128) {
      let pointSize = 10;
      rect(x, y, pointSize, pointSize);
      //ellipse(x, y, pointSize, pointSize);
    }
    else {
      drawHatch(x, y, 5)
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

function drawHatch(x, y, size){
  let pointSize = 15;
  let dice = random(1, 6);
  if (dice > 4) {
    line(x, y, x + pointSize, y);
  } else {
    line(x, y, x, y + pointSize);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
