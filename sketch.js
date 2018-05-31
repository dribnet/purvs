let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let angle = 0;
let w = 20;
let ma;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1080, WEBGL);
  main_canvas.parent('canvasContainer');
  ma = 0.1*atan(1 /sqrt(2));
  maxD = dist(0,0,200,200);
  // let main_canvas = createCanvas(1080, 1920);
  // main_canvas.parent('canvasContainer');
  // noStroke();
  // background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

// const pointSize = 20;

function draw() {

  background(255);
  perspective(42/100*PI, 2, 0.2, 100);
  // ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 500);
  translate(0, 0, -40);
  rotateX(HALF_PI+3/10*PI);
  // rotateX(PI-90/100*QUARTER_PI);
  rotateZ(ma);
  // translate(width / 2, height / 2);
  rectMode(CENTER);
  // rotateX(angle * 0.25);

  // let offset = 0;
  for (let z = 0; z < height; z += w ) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width/2, height/2);
      let offset = map(d, 0, maxD, -2, 2);
      let pix = sourceImg.get(x, z);
      let mask = maskImg.get(x, z);
      fill(pix);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, -100, 200)); 
      

      translate(x - width/2, 80, z - height/2);
      // normalMaterial();

      if(mask[0] > 128) {
        h = h + 300;
      }

      box(w-2, h, w-2);
      offset += 0.1

      pop();
    }
  }
  angle += 0.1

  console.log("Done!")
  noLoop();

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
