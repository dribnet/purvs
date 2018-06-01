let sourceImg=null;
let maskImg=null;
let sourceImg2=null;
let maskImg2=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  sourceImg2 = loadImage("input_2.jpg");
  maskImg = loadImage("mask_1.png");
  maskImg2 = loadImage("mask_2.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  sourceImg2.loadPixels();
  maskImg2.loadPixels();

}

const pointSize = 50;

function draw () {
  for(let i=0;i<1080;i++) {
    //let x = floor(random(sourceImg.width));
    //let y = floor(random(sourceImg.height));
    let x = int(i * pointSize);
    let y = int(renderCounter * pointSize);
    let x2 = int(i * pointSize);
    let y2 = int(renderCounter * pointSize);

    let pix = sourceImg.get(x, y);
    let pix2 = sourceImg2.get(x, y);

    let mask = maskImg.get(x, y);
    let mask2 = maskImg2.get(x, y);

    let halfSize = pointSize/2;
    fill(pix,pix2);
    stroke(255);
    if(mask[0],mask2[0] > 128) {
      beginShape();
      vertex(x, y);
      vertex(x2, y2);
      endShape();
      stroke(0);
      rect(x-halfSize, y-halfSize, pointSize, pointSize);
      rect(x2-halfSize, y2-halfSize, pointSize, pointSize);
    }
    else {
      stroke(0);
      rect(x-halfSize, y-halfSize, pointSize, pointSize);    
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920) {
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
