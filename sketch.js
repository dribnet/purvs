let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_2.jpg";
let maskFile   = "mask_2.png";
let outputFile = "output_1.png";

angleMode(DEGREES)

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
  for(let i=0;i < 5000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    fill(pix);

    if(mask[0] < 5 && i < 3500 ){ //Black, background
      let pointSize = 10;
      strokeWeight(0)
      stroke(0)
      fill(pix[0], pix[1] , pix[2])
      rect(x, y, pointSize, pointSize,1);
    }
    else if(mask[0] > 100 && mask[0] < 200 && i < 4000) { //light Grey, Sky
      let pointSize = random(6 ,8);
      strokeWeight(0.5);
      stroke(255, 255, 255, 100)
      //fill(pix[0], pix[1], pix[2], 255)

      for(let ii = 0; ii < 10; ii++) {
        fill(211, 233, 242, 255 - (ii * 1000))
        ellipse(x, y, pointSize + (ii / 5), pointSize + (ii / 5))
      }

    }

    else if(mask[0] > 5 && mask[0] < 100) { //Dark Grey, Foreground
      let pointSize = 5;
      strokeWeight(0);
      rect(x, y, pointSize, pointSize,2)
    }

    else if(mask[0] > 200 && i < 2000){ //White, water
      let pointSize = random(2);

      for (let ii = 0; ii < 255; ii++) { //drawing transparent edges
        stroke(pix[0] - 5 , pix[1] - 5, pix[2] - 5, 350 - ii);
        strokeWeight(pointSize + (ii / 20))
      }

        line(x - random(5,20), y, x + random(5,20), y)
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
