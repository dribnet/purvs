let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let spacing = 80;
let cellTime = 10;

let t = 0;
let r = 1;


let oldx;
let oldy;
let xN;
let yN;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.bmp");
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

  stroke(255);
  strokeWeight(0);

  for (let x = 0; x < sourceImg.width; x = x + spacing) {
    for (let y = 0; y < sourceImg.height; y = y + spacing) {

      let pix = sourceImg.get(x+spacing/2,y+spacing/2);
    //  fill(pix);
    //  rect(x,y,spacing,spacing);

      for (let i = 0; i < cellTime; i = i + 1) {
        console.log(frameCount);

        t = t + 0.05;
        r = r - 0.05;
        xN = noise(t);
        xN = map(xN,0,1,x,x+spacing);
        yN = noise(r);
        yN = map(yN,0,1,y,y+spacing);

        let circleSize = 120 - i*20;

        let pix = sourceImg.get(xN, yN);



        fill (pix);
        ellipse (xN,yN,circleSize,circleSize);
      }
    }
  }

  for (let i = 0; i < 2400; i = i + 1) {
  t = t + 0.01;
  r = r - 0.005;

  let x = noise(t);
  x = map(x,0,1,0,sourceImg.width);
  let y = noise(r);
  y = map(y,0,1,0,sourceImg.height);

  let mask = maskImg.get(x, y);

    if(i % 40 == 0 && mask[0] > 128) {
        stroke(255);
        strokeWeight(2);
        line (x,y,oldx,oldy);
        oldx = x;
        oldy = y;
    }
}
    noLoop();
    saveBlocksImages();
    console.log("Done!")
/*
  if (circleSize < 40) {
    console.log("Done!")
    noLoop();
    saveBlocksImages();
  }*/

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
