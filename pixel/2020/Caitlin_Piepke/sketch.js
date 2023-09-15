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

const x_step = 15;
const y_step = 15;


function draw() {
  for (let i = 0; i < 1000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let mask = maskImg.get(x, y);
    let pixMod = sourceImg.get(x, y);
    console.log(mask[0]);

    if (mask[0] > 66 && mask[0] < 74) { //dark grey mask (red circles)
      let pixMod = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      pixMod[0] = pixMod[0] * 2;     //adjusts the saturation of isolated image and colours
      pixMod[1] = pixMod[1] / 2;
      noStroke();
      fill(pixMod);
      ellipse(x, y, tileWidth*4, tileHeight*4);
  }
}

  for (var x2 = 0; x2 < sourceImg.width; x2 = x2 + tileWidth) {     //creates 1st grid
    for (var y2 = 0; y2 < sourceImg.height; y2 = y2 + tileHeight) {
      let pixMod = sourceImg.get(x2, y2);
      let mask = maskImg.get(x2, y2);

      if (mask[0] < 130 && mask[0] > 125) { //light grey mask (orange)
        fill(245, 158, 66);
        noStroke();
        rect(x2, y2, tileWidth*2, tileHeight*2);

      } else if (mask[0] < 2) { //black mask (purple background)
        let pixMod = sourceImg.get(x2, y2);
        pixMod[0] = pixMod[0] / 2;    //adjusts saturation of image
        pixMod[1] = pixMod[1] / 3;
        fill(pixMod);
        stroke(pixMod);
        ellipse(x2, y2, tileWidth, tileHeight + 10);
      }
    }
  }

  for (var x3 = 0; x3 < sourceImg.width; x3 = x3 + x_step) {       //creates 2nd grid
    for (var y3 = 0; y3 < sourceImg.height; y3 = y3 + y_step) {
      let pixMod = sourceImg.get(x3, y3);
      let mask = maskImg.get(x3, y3);
      pixMod[0] = pixMod[2];
      pixMod[1] = pixMod[0];
      pixMod[2] = pixMod[1];
      strokeWeight(5);
      strokeCap(SQUARE);
      fill(pixMod);

      if (mask[0] == 255) { //white mask (model)
        stroke(pixMod);
        rect(x3, y3, tileWidth, tileHeight);
      }
    }
  }



  //runs 10 different times
  renderCounter = renderCounter + 1;
  if (renderCounter > 5) {
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
