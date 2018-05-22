let sourceImg=null;
let maskImg=null;
let CurRow=0;

function preload() {
  sourceImg = loadImage("input_2.jpg");
  maskImg = loadImage("mask_2.png");
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

let pointSize = 12.5;

function draw () {
  for(let i=0;i<1080/pointSize;i++) {
    // let x = floor(random(sourceImg.width));
    // let y = floor(random(sourceImg.height));
    let x = i * pointSize;
    let y = CurRow * pointSize;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
   
    let halfSize = pointSize/2;
    fill(pix);
    if(mask[0] > 128) {
      ellipse(x, y, pointSize, pointSize);  

    }
    else {
      rect(x-halfSize, y-halfSize, pointSize, pointSize);    

    }

  }
  CurRow = CurRow + 1;
  if(CurRow*pointSize > 1920) {
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }    
  console.log(1*CurRow);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
