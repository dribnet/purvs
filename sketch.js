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
  //noStroke();
  background(170, 200, 20);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 13;
const tileWidth = 19;

const x_step = 20;
const y_step = 10;

//grid like style
function draw () {

    for (var x = 0; x < sourceImg.width; x = x + x_step) {
      for (var y = 0; y < sourceImg.height; y = y + y_step) {
        let pix = sourceImg.get(x, y);
        let mask = maskImg.get(x, y);

        fill(pix);
        noStroke(pix);
        rect(x, y, tileWidth, tileHeight);

      }
    }



  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
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
