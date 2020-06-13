let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

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
  noStroke();
  background(60, 0, 128);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i = 0; i < 5000; i++) {

    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    fill(pix);
    stroke(pix);


    if(mask[0] >= 0 && mask[0] < 150) {            // black mask
      let pointSize = 12;
      push();
      strokeWeight(5);
      line(x, y, x + pointSize - 30, y + 10);
      pop();
    }
    else if(mask[0] >= 201 && mask[0] < 250) {      // grey mask
      let pointSize = 50;
      push();
      strokeWeight(3);
      line(x, y, x + pointSize, y + 20);
      pop();
    }
    else {                                          // white mask
      let pointSize = 10;
      ellipse(x, y, pointSize, pointSize);
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

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
