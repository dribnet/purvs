let sourceImg=null;
let maskImg=null;
let renderCounter=0;

const colorBack = "#e3eded";

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(colorBack);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

  let pointSize = 50;
  let halfSize = 25;

function draw () {
  for(let i=0;i<width/pointSize;i++) {
    let x = int(i * pointSize);
    let y = int(renderCounter * pointSize);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    if(mask[0] > 128) {
      ellipse(x, y, pointSize, pointSize);
    }
    else {
      hexagon(x, y, pointSize);    
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > sourceImg.height/pointSize) {
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}

function hexagon(x, y, radius) {
  var angle = TWO_PI / 6;
  beginShape();
  for (var a = -PI/2; a < TWO_PI*3/4; a += angle) {
    var sx = x + cos(a) * radius/2;
    var sy = y + sin(a) * radius/2;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}