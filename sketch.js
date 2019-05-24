let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

let sourceFile = "input_1.jpg";
let maskFile = "mask_1.png";
let outputFile = "artwork_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw() {
  const numberOfPoints = 2000;
  for (let i = 0; i < numberOfPoints; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y); //gets the colour at the x & y of the images
    let mask = maskImg.get(x, y); // corresponding x&y in the mask
    let pointSize = 20;
    let halfSize = 50;
    fill(pix);

    //if the mask is more white that black -> draw ellipse o.w rectangle
    //TODO: change this logic bellow to our custom logic.
    if (mask[0] > 128) {
      for (let xd = x; xd < x + pointSize; xd++) {
        for (let yd = y; yd < y + pointSize; yd++) {
          fill(sourceImg.get(xd, yd));
          let randomOffSetX = random(0, pointSize);
          let randomOffSetY = random(0, pointSize);
          rect(xd - randomOffSetX, yd - randomOffSetY, 3, 3);
        }
      }
    } else {
      for (let xd = x; xd < x + pointSize; xd++) {
        for (let yd = y; yd < y + pointSize; yd++) {
          fill(sourceImg.get(xd, yd));
          rect(xd, yd, 3, 3);
        }
      }
    }
    // if(mask[0] > 128) {
    //   ellipse(x, y, pointSize, pointSize);
    // }
    // else {
    //   rect(x, y, pointSize, pointSize);    
    // }
  }

  renderCounter = renderCounter + 1;
  if (renderCounter > 10) {
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
