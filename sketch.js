let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "output_1.png";

//before code is up n running, process of showing the image
function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  //noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}


function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(199, 207, 212);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}
//size for pixels
const size = 25;


function draw () {
  for(let i=0;i<2000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);


//this is the the people
    if(mask[0] == 255) {
      fill(pix[0], pix[1], pix[2]);
      ellipse(x, y, size-5, size-5);

    }
    else if(mask[0] == 0) {
      fill(pix[0], pix[1], pix[2], 30);
      rect(x, y, size, size);

    }
    //this is the background
    else if(mask[0] == 70 ) {
      fill(pix[0] + 10, pix[1] +10, pix[2] + 10, 60);
      rect(x, y, size, size);

    }


  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 40) {
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
