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
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<40000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix)

    if(mask[0] > 128) {
      let pointSize = 1;
      drawStars(x,y,4)
    }
    else {
      let pointSize = 5;
      //rect(x, y, pointSize, pointSize);
      rect(x, y, pointSize+10, pointSize-5);

    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function drawStars(x,y,size){
  push()
  translate(x,y)
  for(var i = 0; i < 3; i++){
    line(size, 0, -size, 0)
    rotate(360/i)
  }
  pop()
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
