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
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  // pixelDensity(1);
}

const pointSize = 35;
const pointSize2 =35;

function draw () {
  for(let i=0;i<1080/pointSize;i++) {
    let x = int(i * pointSize);
    let y = int(renderCounter * pointSize);
    let pix = sourceImg.get(x, y);
    console.log(pix);
    let mask = maskImg.get(x, y);
    // let inc = 0.01;
    // console.log(mask);

    let halfSize = pointSize/2;
    fill(pix);
    noStroke();
    if(mask[0] > 128) {
      ellipse(x, y, pointSize, pointSize);
      fill(255);
      ellipse(x, y, pointSize/2, pointSize/2);
      fill(pix);
      ellipse(x, y, pointSize/3, pointSize/3);

    }
    // else if (mask[0] < 128 && mask[0] < 192) {
    //   ellipse(x, y, pointSize/2, pointSize/2);
    // }
    //
    // else if (mask[3] = 255) {
    //   fill(0)
    //   ellipse(x, y, pointSize, pointSize);
    // }

    else {
      fill(pix);
      rect(x-halfSize, y-halfSize, pointSize, pointSize);
      fill(255);
      rect(x-halfSize, y-halfSize, pointSize/2, pointSize/2);
    }

    if (pix[0] >= 255) {
      let color1 = random(100,255);
      // let color2 = random(0,255);
      // let color3 = random(0,255);

      fill(color1);
      ellipse(x,y,pointSize2,pointSize2);
      // fill(255);
      // ellipse(x,y,pointSize2/2, pointSize2/2);


    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/pointSize) {
    console.log("Done!")
    noLoop();

  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
