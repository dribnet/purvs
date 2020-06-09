let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "output_3.png";

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

const tileWidth = 1;
const tileHeight = 1;

function draw () {
  colorMode(HSB,250);
  for(let y = 0; y < height; y = y + tileHeight){
      for(let x = 0; x < width; x = x + tileHeight){
        let pix = sourceImg.get(x, y);
        let mask = maskImg.get(x, y);

        // black and white filter
        let darkest = color(30);
        let lightest = color(40,0,100);

        let brightness = map(pix[1], 0, 200, 0, 1);

        let b_w = lerpColor(darkest, lightest, brightness);

        fill(b_w);
        if(mask[0] > 128) {
         rect(x, y, tileHeight, tileWidth);
        }
        else if(mask[0] < 60 && mask[0] > 0){     // white scratches for that vintage filter
          fill(250);
          rect(x,y, tileHeight,tileHeight);
        }
        else{
          fill(28, 82, 90);
          rect(x,y, tileHeight,tileHeight);
        }

      }
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
