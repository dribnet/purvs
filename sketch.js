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
  noStroke();
  background(247, 249, 250);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

//const tileHeight = 10;
//const tileWidth = 10;

//const x_step = 20;
//const y_step = 5;

function draw () {
  for(let i=0;i<2000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let r = random(10, 60);
    fill(pix);
    stroke(pix);

    if(mask[0] < 120) {
      let pointSize = 2;//black mask - background
      fill(143, 185, 201); //blue/grey
      stroke(143, 185, 201); //blue/grey
        rect(x, y, pointSize+10, pointSize);

    }
    else if(mask[0] >= 120 && mask[0] < 250) {
      let pointSize =15; //grey mask
          ellipse(x, y, pointSize, pointSize);
   }
    else {
      drawStar(x, y, r); //white mask
    }
  }

  renderCounter = renderCounter + 1;
  if (renderCounter > 7) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function drawStar(xPos, yPos, size) { //white mask
  push();
  translate(xPos, yPos);
  strokeWeight(2);
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
