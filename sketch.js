let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// angle is the rotation in y
let angle = 0;
// w is the width of each drawing element
let w = 14;
let ma;

function preload() {
  sourceImg = loadImage("input_2.jpg");
  maskImg = loadImage("mask_2.png");
  
}

function setup () {
  let main_canvas = createCanvas(1080, 1080, WEBGL);
  main_canvas.parent('canvasContainer');
  ma = 0.6 * atan(1 /sqrt(2));
  // ma = 0.1*atan(1 /sqrt(2));
  maxD = dist(0,0,200,200);
  // let main_canvas = createCanvas(1080, 1920);
  // main_canvas.parent('canvasContainer');
  // noStroke();
  // background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}



function draw() {

  background(255);
  
  perspective(52/100*PI, 1, 0.1, 100);
  // ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 500);
  translate(0, -300, -40);
  // rotateX(HALF_PI+3/10*PI);
  rotateX(-HALF_PI);
  // rotateY(ma);
  rotateY(3*PI/10);
  rotateZ(3*PI/10);
  // rotateY(PI);
  // translate(width / 2, height / 2);
  rectMode(CENTER);
  // rotateX(angle * 0.25);

  // let offset = 0;
  // draw each row
  for (let z = 0; z < height; z += w ) {
  // for (let z = height/3; z < height/2; z += w ) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width/2, height/2);
      let offset = map(d, 0, maxD, -2, 2);
      let pix = sourceImg.get(x, z);
      let mask = maskImg.get(x, z);
      fill(pix);
      let a = angle + offset;
      let h = floor(map(cos(a), -1, 1, 100, 200));
      let i; 
      

      translate(x - width/2, 0, z - height/2);
      // normalMaterial();

      // if(mask[0] > 200) {
      //   // white
      // else if(mask[0] > 100) {
      //   // gray
      // }
      // else {
      //   // black
      // }


      // draw ellipse inside the mask
      if(mask[0] > 128) {
        h = map(tan(h),-1,1,50,100);
        // ellipsoid(w-2,h,w-2);
        cylinder(w-2,h);
      }else{ h = map(cos(h)-1,1,-50,30)}

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
