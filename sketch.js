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
  rectMode(CENTER);
  noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const pointSize = 15;

function draw () {
  for(let i=0;i<1080;i++) {
    let x = int(i * pointSize);
    let y = int(renderCounter * pointSize);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = pointSize/2;
    let opc = map(mask[0],0,255,255,0);

    if(mask[0] < 255) {
      if(mask[0] > 225) {
      fill(255,255,255,opc);
      stroke(5);
      strokeWeight(1);
      rect(x-halfSize, y-halfSize, pointSize*1.1, pointSize*1.1);
    }
  }
  
    if(mask[0] < 225) {
      if(mask[0] > 195) {
      fill(255,255,255,opc);
      stroke(5);
      strokeWeight(1);
      rect(x-halfSize, y-halfSize, pointSize*1.5, pointSize*1.5);
    }
  }
  
    if(mask[0] < 195) {
      if(mask[0] > 165) {
      fill(255,255,255,opc);
      stroke(5);
      strokeWeight(1);
      rect(x-halfSize, y-halfSize, pointSize*1.75, pointSize*1.75);
    }
  }
    if(mask[0] < 165) {
      if(mask[0] > 135) {
      fill(255,255,255,opc);
      stroke(5);
      strokeWeight(1);
      rect(x-halfSize, y-halfSize, pointSize*2, pointSize*2);
    }
  }
  
    if(mask[0] < 135) {
      if(mask[0] > 105) {
      fill(255,255,255,opc);
      stroke(5);
      strokeWeight(1);
      rect(x-halfSize, y-halfSize, pointSize*2.25, pointSize*2.25);
    }
  }
  
    if(mask[0] < 105) {
      if(mask[0] > 75) {
      fill(255,255,255,opc);
      stroke(5);
      strokeWeight(1);
      rect(x-halfSize, y-halfSize, pointSize*2.5, pointSize*2.5);
    }
  }

  if(mask[0] < 75) {
      if(mask[0] > 45) {
      fill(255,255,255,opc);
      stroke(5);
      strokeWeight(1);
      rect(x-halfSize, y-halfSize, pointSize*2.75, pointSize*2.75);
    }
  }

  if(mask[0] < 75) {
      if(mask[0] > 15) {
      fill(255,255,255,opc);
      stroke(5);
      strokeWeight(1);
      rect(x-halfSize, y-halfSize, pointSize*3, pointSize*3);
    }
  }

  if(mask[0] < 15) {
      if(mask[0] > 0) {
      fill(255,255,255,opc);
      stroke(5);
      strokeWeight(1);
      rect(x-halfSize, y-halfSize, pointSize*3.25, pointSize*3.25);
    }
  }

  else{
    fill(0);
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
