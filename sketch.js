let sourceImg=null;
let maskImg=null;
let renderCounter=0;


function preload() {
  sourceImg = loadImage("input_2.jpg");
  maskImg = loadImage("mask_2.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  rectMode(CENTER);

  noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const pointSize = 10;

function draw () {

  //need to use due to use of rectMode CENTER

  translate(pointSize,pointSize);

  for(let i=0;i<1080;i++) {
    let x = int(i * pointSize);
    let y = int(renderCounter * pointSize);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = pointSize/2;

    let opc = map(mask[0],0,255,255,0);
    let size = map(mask[0],0,255,5,1);
    let str = map(mask[0],0,255,4,1);

    if(mask[0] < 255 && mask[0] > 0) {
      fill(150,200,255,opc);
      stroke(opc);
      strokeWeight(1);
      rect(x-halfSize, y-halfSize, pointSize*size, pointSize*size);
      //fill(pix);
      //rect(x-halfSize, y-halfSize, pointSize, pointSize);
    }

    else{
      noStroke();
      fill(pix);
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
