let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let pointSize = 10;

let gridXNum;
let gridYNum;

 var y = 0;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_2.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  rectMode(CENTER);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  gridXNum = width / pointSize;
  gridYNum = height / pointSize;

    for (var x = 0; x < gridXNum; x++) {

        let xPos = x*pointSize;
        let yPos = y*pointSize;

        let pix = sourceImg.get(xPos, yPos);

        fill(pix);

        ellipse(xPos, yPos, pointSize, pointSize);
    }
    y++;

  renderCounter = renderCounter + 1;
  if(y > gridYNum) {
    console.log("Done!")
    noLoop();
    saveBlocksImages();
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
