let sourceImg=null;
let maskImg=null;
let renderCounter=0;
let curRow = 0;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920); //1080 x 1920
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

let pointSize = 20;


function draw () {
  for(let i=0;i<1080;i++) {
    let x = i * pointSize;
    let y = curRow * pointSize;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    //let cx = curRow * floor(random(sourceImg.width));
    //let cy = curRow * floor(random(sourceImg.height));
    //let halfsize = pointSize/2;
    //editing the numbers below slows render but increases detail
    let halfsize = 5;
    let pointSize1 = random(10,90);
    fill(pix);
    if(mask[0] > 128) {
      ellipse(x+halfsize, y+halfsize, pointSize1, pointSize1);
    }
    else {
      rect(x-halfsize, y-halfsize, pointSize, pointSize);    
    }
  }

  curRow = curRow + 1;
  if(curRow*pointSize > 1920) {
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
