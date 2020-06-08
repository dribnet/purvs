let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "output_3.png";

function preload() { // what happens before we kick off
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () { // do not change canvas! - can edit stroke, back colour etc
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
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
    if(mask[0] > 128) {
      let pointSize = 50;
      let dice = random(1,6);
      if(dice > 3){
        line(x, y, x+pointSize, y);
      }else{
        line(x, y, x, y+pointSize);
      }
      ellipse(x, y, pointSize/10, pointSize/10);

    }
    else {
      let pointSize = 10;
      rect(x, y, pointSize, pointSize);
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
