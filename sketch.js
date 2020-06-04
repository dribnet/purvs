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
  //noStroke();
  smooth();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 5;
const tileWidth = 5;

const x_step = 5;
const y_step = 5;

function draw() {
  for (let i = 0; i < 4000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);
    strokeWeight(5);


    if (mask[0] == 255) { //white
      let pointSize = 5;
      smooth();
      rect(x, y, pointSize, pointSize);
      //ellipse(x, y, pointSize, pointSize);
    } else if (mask[0] > 50 && mask[0] < 200) { //grey
      stroke(pix);
      drawHatch(x, y, 2);
    } else { //black
      if (pix[1] > pix[2]) { //if the green value is greater than the blue
        drawBlue(x, y);
      } else {
        stroke(pix); //use the regular image rgb
      }
      drawHatch(x, y, 5);
    }

  }



  for (var x2 = 0; x2 < sourceImg.width; x2 = x2 + x_step) {
    for (var y2 = 0; y2 < sourceImg.height; y2 = y2 + y_step) {
      let pix = sourceImg.get(x2, y2);
      let mask = maskImg.get(x2, y2);
      let pointSize = 5;
      fill(pix[0], pix[1], pix[2]);
      noStroke();
      //if (mask[0] < 128){
        stroke(pix[0], pix[1], pix[2], 30);
      //   rect(x2, y2, tileWidth, tileHeight);
      //   fill();
      //   line(x2, y2, x2, y2 + pointSize);
      // } else {
      //   fill(pix[0], pix[1], pix[2], 50);
        line(x2, y2, x2, y2 + pointSize);
      //}

    }
  }

  renderCounter = renderCounter + 1;
  if (renderCounter > 10 ) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

//draw diagonal crosshatch effect
function drawHatch(x, y, size) {
  let pointSize = 15;
  let dice = random(1, 6);
  if (dice > 10) {
    line(x, y, x + pointSize, y);
  } else {
    line(x + (pointSize / 2), y, x, y + pointSize);
  }
}

//draw blue accents using the stroke
function drawBlue(x, y) {
  let pixMod = sourceImg.get(x, y);
  pixMod[0] = pixMod[0];
  pixMod[1] = pixMod[1];
  pixMod[2] = pixMod[2] * 3;
  stroke(pixMod);
  strokeWeight(5);

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
