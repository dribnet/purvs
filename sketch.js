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
  // noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileWidth = 5;
const tileHeight = 5;


function draw() {

  for (let i = 0; i < 1000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let mask = maskImg.get(x, y);
    let pixMod = sourceImg.get(x, y);
    console.log(mask[0]);

    if (mask[0] > 72 && mask[0] < 76) { //dark grey mask (red)
      let pixMod = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      pixMod[0] = pixMod[0] * 2;
      pixMod[1] = pixMod[1] / 2;
      pixMod[2] = pixMod[2];
      noStroke();
      fill(pixMod);
      ellipse(x, y, 20, 20);
    }
  }


  for (var x2 = 0; x2 < sourceImg.width; x2 = x2 + tileWidth) {
    for (var y2 = 0; y2 < sourceImg.height; y2 = y2 + tileHeight) {
      let pixMod = sourceImg.get(x2, y2);
      let mask = maskImg.get(x2, y2);
      pixMod[0] = pixMod[2];
      pixMod[1] = pixMod[0];
      pixMod[2] = pixMod[1];
      noStroke();
      fill(pixMod);

      if (mask[0] > 220) {   //white mask (model)
        stroke(pixMod);
        line(x2, y2, x2, y2 + 200);


      } else if (mask[0] < 146 && mask[0] > 120) { //light grey mask (orange)
        fill(245, 158, 66);
        strokeWeight(5);
        strokeCap(ROUND);
        stroke(245, 158, 66);
        rect(x2, y2, tileWidth, tileHeight);

      } else if (mask[0] < 20) {  //black mask (purple background)
        let pixMod = sourceImg.get(x2, y2);
        pixMod[0] = pixMod[0] / 2;
        pixMod[1] = pixMod[1] / 3;
        pixMod[2] = pixMod[2];
        fill(pixMod);
        stroke(pixMod);
        ellipse(x2, y2, tileWidth, tileHeight + 10);
      }
    }
  }

  //runs 10 different times
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
