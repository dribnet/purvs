let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "output_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  //noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<2500;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    //console.log(mask);

    stroke(pix);
    let pointSize = 40;
    let dice = random(1,6);
    if (dice > 5){
      line(x, y, x+pointSize, y);
    }
    else {
      line(x, y, x, y+pointSize);
    }


    // if(mask[0] > 128) {
    //   let pointSize = 60;
    //   ellipse(x, y, pointSize, pointSize);
    // }
    // else {
    //   let pointSize = 8;
    //   rect(x, y, pointSize, pointSize);
    // }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 40) {
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
