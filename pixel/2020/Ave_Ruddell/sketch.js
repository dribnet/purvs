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
  background(34, 41, 64);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const size=20;


function draw () {
  for(let i=0;i<2000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);


//this is the sea
    if(mask[0] == 0) {
      fill(pix[0], pix[1], pix[2]);
      ellipse(x,y, size*3,size/3);

    }
    //this is the earth
    else if(mask[0] ==255 ) {
      fill(pix[0], pix[1], pix[2], 90);
      rect(x, y, size*4,size);

    }
    //this is the sky
    else if(mask[0] ==97){
      fill(pix[0], pix[1], pix[2], 65);
      ellipse(x,y, size*2.5, size-5);
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 35) {
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
