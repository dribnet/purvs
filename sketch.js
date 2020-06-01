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
  //noStroke();
  background(0);
  strokeWeight(1);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 30;
const tileWidth = 30;

const x_step = 30;
const y_step = 30;

function draw() {

  for (let i = 0; i < 3000; i++) {
      let x = floor(random(sourceImg.width));
      let y = floor(random(sourceImg.height));
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      stroke(pix);

      let pointSize = 20;
      let dice = random(1, 6);

      if (mask[0] > 128) {
        line(x, y, x + pointSize, y); // horizonal "windy
      } else {
        if(pix[1] > pix[0]){
          strokeWeight(3);
          let pixMod = sourceImg.get(x, y);
          pixMod[0] = pixMod[0]*2;
          pixMod[1] = pixMod[1];
          pixMod[2] = pixMod[2]*2;

          stroke(pixMod);
          //stroke(pix);

        }else{
          stroke(pix);
          strokeWeight(1);
        }
        if (dice > 5) {
          line(x, y, x + pointSize, y); // horizonal "windy"
        } else {
          line(x, y, x, y + pointSize); // vertical "rainy"

        }
      }
    }

  renderCounter = renderCounter + 1;
  if (renderCounter > 6) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function drawStar(x, y, size,c) {
  stroke(c);
  push();
  //strokeWeight(4);
  translate(x+15, y+15);
  for (var i = 0; i < 10; i++) {
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
