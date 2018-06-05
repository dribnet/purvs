let sourceImg=null;
let maskImg=null;
let renderCounter=0;
let t = 0;
let r = 1;
let xN;
let yN;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.bmp");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');
  imageMode(CENTER);
  background(0);
  noStroke();
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
//  background(0,1);

  t = t + 0.01;
  r = r - 0.005;

  let circleSize = 40/t*100;

  let x = noise(t);
  x = map(x,0,1,0,sourceImg.width);
  let y = noise(r);
  y = map(y,0,1,0,sourceImg.height);

  let pix = sourceImg.get(x, y);
  let mask = maskImg.get(x, y);

    if(frameCount % 60 == 0 && mask[0] > 128) {
        stroke(255);
        strokeWeight(3 + r*100);
        line (x,y,xN,yN);
        xN = x;
        yN = y;
    }
    else {
        noStroke();
        fill (pix);
        ellipse (x,y,circleSize,circleSize);
    }
  if (circleSize < 40) {
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
