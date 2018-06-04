let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(100);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const pointSize = 16;
function draw () {
  for(let i=0;i<1080/pointSize;i++) {
    //let x = floor(random(sourceImg.width));
    //let y = floor(random(sourceImg.height));
    let x = int(i * pointSize);
    let y = int(renderCounter * pointSize);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    //let pointSize = 100;
    //let halfSize = 50;
    let halfSize = pointSize/2;
    fill(pix);
    if(mask[0] > 128) {
      push();
        beginShape();
        vertex(x,y-halfSize);
        vertex(x+halfSize,y-halfSize/2);
        vertex(x+halfSize,y+halfSize/2);
        vertex(x,y+halfSize);
        vertex(x-halfSize,y+halfSize/2);
        vertex(x-halfSize,y-halfSize/2);
        endShape(CLOSE);
      pop();
    }
    else {
      rect(x-halfSize, y-halfSize, pointSize, pointSize);    
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/pointSize) {
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
