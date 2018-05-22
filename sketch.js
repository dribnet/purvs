let sourceImg=null;
let maskImg=null;
let currentRow=0;
let dotsize = 30;

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

let pointSize = 10;

function draw () {
  for(let i=0;i<1080/pointSize;i++) {
    let x = int(i * pointSize);
    let y = int(currentRow * pointSize);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = pointSize/2;
    fill(pix);
    if(mask[0] > 128) {
     	ellipse(x, y, pointSize, pointSize / 2);
     	ellipse(x, y, pointSize / 2, pointSize);

     	push();
     	ellipse(x + (dotsize/4) , y + (dotsize/4), pointSize/2, pointSize/2);
     	ellipse(x - (dotsize/4) , y + (dotsize/4), pointSize/2, pointSize/2);
     	ellipse(x - (dotsize/4) , y - (dotsize/4), pointSize/2, pointSize/2);
     	ellipse(x + (dotsize/4) , y - (dotsize/4), pointSize/2, pointSize/2);
     //	ellipse(x, y, pointSize, pointSize);
     	pop();
    }
    else {
      rect(x-halfSize, y-halfSize, pointSize, pointSize);    
    }
  }
  currentRow = currentRow + 1;
  if(currentRow > 1920/pointSize) {
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
