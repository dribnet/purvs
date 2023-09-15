let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile = "mask_1.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  strokeWeight(5);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw() {

  for (let i = 0; i < 9000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let blur = random(10,80)
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix[0],pix[1],pix[2],blur);
    let pointSize = 60;
    let dice = random(1, 6);
    if (mask[0] < 150) {
      drawPaintBlob(x,y,20);
    } else {
      if (dice > 5) {
        line(x, y, x, y + pointSize);
      } else {
        line(x, y, x + pointSize, y);

      }
    }
  }



  renderCounter = renderCounter + 1;
  if (renderCounter > 10) {
    console.log("Done!")
    noLoop();

    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function drawPaintBlob(x,y,size){
  push();
  strokeWeight(9);
  translate(x,y);
  for(var i = 0; i < 50; i++){
    rect(size,0,-size,0);
    rotate(360);
    }
  pop();
}



function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
