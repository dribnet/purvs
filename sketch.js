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
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 10;
const tileWidth = 18;

const x_step = 12;
const y_step = 12;

function draw() {

  for (let i = 0; i < 4000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let r = random(10, 60);
    fill(pix);
    stroke(pix);

    let dice = random(1, 6);
    if (mask[0] < 100) { //if mask is black
      drawStar(x, y, r);
    } else if (mask[0] > 100 && mask[0] < 190) { // if mask is grey

      if(pix[2] < pix[0]){
        let pixMod = sourceImg.get(x, y);
          strokeWeight(6);
          pixMod[2] = 50;

          stroke(pixMod);
          //stroke(pix);
      }else{
          strokeWeight(5);
          stroke(pix);
      }
      //strokeWeight(5);
      if (dice > 4) {
        line(x, y, x, y + y_step); // horizonal "windy"
      } else {
        line(x, y, x + x_step, y); // horizonal "windy"
      }
    } else { //mask is white
      strokeWeight(4);
      ellipse(x, y, tileWidth, tileHeight);
    }
  }

  renderCounter = renderCounter + 1;
  if (renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function drawStar(xPos, yPos, size) {
  push();
  translate(xPos, yPos);
  strokeWeight(3);
  let half = size / 2.5;
  let diagHalf = half * 0.75;

  line(-half, 0, half, 0); //horizontal
  line(0, half, 0, -half); //vertical
  line(-diagHalf, -diagHalf, diagHalf, diagHalf); //left diagonal
  line(-diagHalf, diagHalf, diagHalf, -diagHalf); //right diagonal
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
