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
  strokeWeight(2);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 5;
const tileWidth = 5;

const x_step = 5;
const y_step = 5;

function draw() {

  for (let i = 0; i < 1000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);

    let pointSize = 90;
    let dice = random(1, 6);
    //console.log(mask[0]);
    if (mask[0] > 200) {
      fill(pix);
      //drawMover(x,y);
      //if (dice < 5) {
        drawMover(x, y);
    //  }
    } else if (mask[0] == 119) {

    }
  }

  renderCounter = renderCounter + 1;
  if (renderCounter > 1) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function drawMover(x, y) {
  let curX = x;
  let curY = y;

  stroke(0);
  strokeWeight(0.5);

  for (var i = 0; i < 40; i++) {

    ellipse(curX, curY, 9, 9);

    curX = curX + random(-10, 10);
    curY = curY + random(-10, 10);
    fill(sourceImg.get(curX, curY));
  }
}





function drawStar(x, y, size, c) {
  stroke(c);
  push();
  //strokeWeight(4);
  translate(x + 15, y + 15);
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
