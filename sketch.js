let sourceImg = null;
let maskImg = null;
let yl = 0;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let xl = 0; xl <= 216; xl++) {
    let x = xl*5;
    let y = yl*5;
    let pointSize = 5;
    let halfSize = 2.5;

    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);

    if(mask[0] > 128) {
      ellipse(x + halfSize, y + halfSize, pointSize, pointSize);
    }
    else {
      rect(x, y, pointSize, pointSize);    
    }
  }

  yl = yl + 1;
  if(yl >= 384) {
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
