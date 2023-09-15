let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "output_3.png";

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
  for(let i=0;i < 3500;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    if(mask[0] < 5 && i < 3500 ){ //Black mask, background
      let pointSize = 12;
      strokeWeight(0)
      stroke(0)

      let satMod = 0.5; //saturation modifier
      let satval = 0.3 * pix[0] + 0.6 * pix[1] + 0.1 * pix[2];

      let newR = pix[0] + satMod * (satval - pix[0]) //setting new RGB values
      let newG = pix[1] + satMod * (satval - pix[1])
      let newB = pix[2] + satMod * (satval - pix[2])

      fill(newR, newG, newB)
      rect(x, y, pointSize, pointSize,2);
    }

    else if(mask[0] > 120 && mask[0] < 130 && i < 4000) { //light Grey mask, Sky
      let pointSize = random(7 ,9);
      strokeWeight(0);
      fill(pix)
      ellipse(x, y, pointSize, pointSize)
    }

    else if(mask[0] > 5 && mask[0] < 100) { //Dark Grey mask, Foreground
      let pointSize = 10;
      fill (pix)
      strokeWeight(0);
      ellipse(x,y, pointSize, pointSize);
    }

    else if(mask[0] > 200 && i < 3000){ //White mask, water
      let pointSize = random(3,10);

      for (let ii = 0; ii < 20; ii++) { //soft edges
        stroke(pix[0] - 5 , pix[1] - 5, pix[2] - 5, 20 - ii);
        strokeWeight(pointSize + (ii / 20))
        line(x - random(5,20), y, x + random(5,20), y)
      }


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
