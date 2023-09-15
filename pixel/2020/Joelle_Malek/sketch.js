let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile = "mask_3.png";
let outputFile = "output_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');
  imageMode(CENTER);
  noStroke();
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
    //console.log(mask[0]);
    if (mask[0] > 128) { //white mask

      if (pix[1] > pix[0]) { //green areas
        strokeWeight(1);

      } else {
        strokeWeight(0.5);
      }
      stroke(pix);
      drawStar1(x, y, 30);

    } else if (mask[0] == (128)) { //grey mask
      stroke(pix, 10);
      strokeWeight(2);
      drawLine(x, y, 35);

    } else { //black mask
      strokeWeight(1);
      stroke(pix);
      drawStar2(x, y, 25);
    }
  }



  renderCounter = renderCounter + 1;
  if (renderCounter > 10) {
    console.log("Done!")
    noLoop();
    //  uncomment this to save the result
    saveArtworkImage(outputFile);
  }
}



//this draws stars for white mask

function drawStar1(x, y, size) {
  push();
  translate(x, y);
  for (var i = 0; i < 4; i++) {
    line(size, 0, -size, 0);
    rotate(360 / i);
  }
  pop();
}


//This draws the horizontal lines for grey mask

function drawLine(x, y, size) {
  push();
  translate(x, y);
  for (var i = 0; i < 2; i++) {
    line(size, 0, -size, 0);
    rotate(360 / i);
  }
  pop();
}

//this draws stars for black mask

function drawStar2(x, y, size) {
  push();
  translate(x, y);
  for (var i = 0; i < 8; i++) {
    line(size, 0, -size, 0);
    rotate(360 / i);
  }
  pop();
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
