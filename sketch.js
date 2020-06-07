//Code for my mask layers referenced from Hansol Gal's work
let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
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
  background(232, 189, 242); //purple
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<6000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);



    if(mask[0] >= 0 && mask[0] < 150) { //Black mask - background
      let pointSize = 15;
      push();
      strokeWeight(12);
      stroke(pix[0] +50, pix[1] + 25,pix[2] + 20, 50);
      line(x, y, x + pointSize-10, y+10);
      pop();
    }
    else if(mask[0] >= 201 && mask[0] < 250) { //Grey - outline of leaves
      let pointSize = 10;
      push();
      noFill();
      stroke(pix[0] + 70, pix[1] + 70,pix[2] + 70);
      strokeWeight(3);
      arc(x, y, pointSize, pointSize, HALF_PI, PI);
      line(x, y, x + pointSize-10, y+10);
      pop();
    }
    else { //white - details inside leaves
      let pointSize = 8;
      push();
      noFill();
      stroke(pix[0]+90, pix[1] + 30, pix[2] + 60);
      strokeWeight(5);
      arc(x, y, pointSize, pointSize, HALF_PI, PI);
      pop();
      push();
      //arc(x, y, pointSize, pointSize, PI + QUARTER_PI, TWO_PI);
      line(x, y, x + pointSize-10, y+10);
      pop();
      }
  }



  renderCounter = renderCounter + 1;
  if(renderCounter > 30) {
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
