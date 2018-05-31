let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let angle = 0;
let w = 24;
let ma;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1080, WEBGL);
  main_canvas.parent('canvasContainer');
  ma = atan(1 /sqrt(2));
  // let main_canvas = createCanvas(1080, 1920);
  // main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  // noStroke();
  // background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const pointSize = 20;

function draw() {
  background(100);
  // ortho();
  ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 500);
  translate(0, 50, -50);
  // rotateX(PI /4);
  rotateX(-QUARTER_PI);
  rotateY(ma);
  // translate(width / 2, height / 2);
  rectMode(CENTER);
  // rotateX(angle * 0.25);

  let offset = 0;
  for (let z = 0; z < height; z += w ) {
    for (let x = 0; x < width; x += w) {
      let pix = sourceImg.get(x, z);
      let mask = maskImg.get(x, z);
      fill(pix);
      push();
      let a = angle + offset;
      let h = map(sin(a), -1, 1, 0, 100); 
      // w; 
      // map(sin(a), -1, 1, 0, 100);      

      translate(x - width/2, 0, z - height/2);
      // normalMaterial();

      if(mask[0] > 128) {
        h = h + 100;
      }

      box(w-2, h, w - 2);
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
