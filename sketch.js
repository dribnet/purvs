//https://bl.ocks.org/dribnet/2b5fdedb10367f0db717755169946832/b9eca66520db6771e0e0299da527af99496efb95
//Reference to Tom White's updated codes. a
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
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

  const pointSize = 12;

function draw () {
  for(let i=0;i<1080/pointSize;i++) {

    let x = int(i * pointSize);
    let y = int(renderCounter * pointSize);
    //let x = floor(random(sourceImg.width));
    //let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    //let pointSize = 50;
    //let halfSize = 50;
    let halfSize = pointSize/2;

    fill(pix);
    if(mask[0] > 128) {
        rect(x-halfSize, y-halfSize, pointSize, pointSize);
    }
    else {
        ellipse(x, y, pointSize, pointSize);  
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
