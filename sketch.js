let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_2.jpg";
let maskFile   = "mask_2.png";
let outputFile = "artwork_2.png";

let variation = 15;
let ellipsesize = 30;
let rectsize= 50;
let size = 10;

function preload() {
  sourceImg = loadImage("input_2.jpg");
  maskImg = loadImage("mask_2.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  background('white');
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<200;i++) {
    let x = floor(random(renderCounter * variation/2));
    let y = floor(random(renderCounter * variation/2));
    let x2 = size *i * variation;
    let y2 = size *renderCounter * variation;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfsize = rectsize/2;
    fill(pix);
    if(mask[0] > 128) {
push ();

    stroke(pix);
    strokeWeight(5);
    noFill();
      ellipse(x2, y2, ellipsesize/2, ellipsesize/2);
    stroke(pix);
    strokeWeight(5);
    noFill();
      ellipse(x, y, ellipsesize, ellipsesize);
    }

    else {

      push();
      x2 = x + x2;
      y2 = y + y2;
      noStroke();

      rect(x2 -halfsize, y-halfsize, rectsize, rectsize);    
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    //saveBlocksImages();
  }
}
