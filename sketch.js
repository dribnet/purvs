let sourceImg=null;
let maskImg=null;
let renderCounter=0;


function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_2.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const pointSize = 20;


function draw () {
  for(let i=0;i<1080;i++) {
    let x = int(i * pointSize);
    let y = int(renderCounter * pointSize);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = pointSize/2;

    if(mask[0] > 120) {
      if(mask[0] < 100){
      fill(255,160,255,50);
      stroke(5);
      strokeWeight(1);
      rect(x-halfSize, y-halfSize, pointSize, pointSize);
    }
  }
    if(mask[0] > 100) {
      fill(255,160,255,100);
      stroke(5);
      strokeWeight(1);
      rect(x-halfSize, y-halfSize, pointSize*3.5, pointSize*3.5);
    }
  }
    if(mask[0] > 80) {
      fill(255,160,255,90);
      stroke(5);
      strokeWeight(1);
      rect(x-halfSize, y-halfSize, pointSize*3, pointSize*3);
    }
    if(mask[0] > 60) {
      fill(255,160,255,80);
      stroke(5);
      strokeWeight(1);
      rect(x-halfSize, y-halfSize, pointSize*2.5, pointSize*2.5);
    }
    if(mask[0] > 40) {
      fill(255,160,255,70);
      stroke(5);
      strokeWeight(1);
      rect(x-halfSize, y-halfSize, pointSize*2, pointSize*2);
    }
    if(mask[0] > 20) {
      fill(255,160,255,60);
      stroke(5);
      strokeWeight(1);
      rect(x-halfSize, y-halfSize, pointSize*1.5, pointSize*1.5);
    }



    //else {
    //  fill(pix);
    //  noStroke();
    //  rect(x-halfSize, y-halfSize, pointSize, pointSize);    
    //}
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
