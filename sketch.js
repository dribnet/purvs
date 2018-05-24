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


// const pointSize = 30;
let elementSpacing = 12.5;

function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {

    let x = int(i * elementSpacing);
    let y = int(renderCounter * elementSpacing);

    // let x = floor(random(sourceImg.width));
    // let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = elementSpacing/2;
    fill(pix);

    //change mask limitation to allow more things elements
    if(mask[0] > 128) {
      ellipse(x, y, elementSpacing, elementSpacing);
    }
    else {
      rect(x-halfSize, y-halfSize, elementSpacing, elementSpacing);    
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 100) {	//render counter = number of times it goes thru the algorithim.
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
