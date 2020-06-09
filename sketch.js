let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_4.jpg";
let maskFile = "mask_4.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  //noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw() {

  for (let i = 0; i < 2000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);

    let pointSize = 10;
    let dice = random(1, 6);
    if (mask[0] > 128) {
      drawEllipse(x,y,15);
    } else {
      if (dice > 5) {
        line(x, y, x + pointSize, y);
      } else {
        line(x, y, x, y + pointSize); 

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

function drawEllipse(x,y,size){
  push();
  //strokeWeight(1);
  translate(x,y);
  for(var i = 0; i < 20; i++){
    line(size,0,-size,0);
      rotate(360/ i);
    }
  pop();
}



function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
