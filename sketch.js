let sourceImg=null;
let maskImg=null;
let renderCounter=0;


let pointSize = 60;
let elementSpacing = 50/2;
let squareSize = 20;
let circleSize = 50/2;


function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
  maskImg2 = loadImage("mask_12.png")
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  maskImg2.loadPixels();
}


function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
    //let x = floor(random(sourceImg.width));
   // let y = floor(random(sourceImg.height));
    let x = i * elementSpacing;
    let a = i + 1;
    let y = renderCounter * elementSpacing;
    let x2 = floor(random(x-30, x+30));
    let y2 = floor(random(y-30,y+30));
    let dx = floor(random(elementSpacing/2));
    let dy = floor(random(elementSpacing/2));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let mask2 = maskImg2.get(x, y);
    let halfSize = squareSize/2;
    fill(pix);
    if(mask[0] > 128) {
      if(mask2[0] > 128){
       //ellipse(x,y, circleSize-10, circleSize-10);
       strokeWeight(circleSize);
       stroke(pix);
       strokeWeight(12);
       line(x, y+20, x2, y2*2);
       // strokeWeight(8);
       line(x, y-100, x2, y2);
       // line(x+20, y+20, x2/2, y2/2);
      }
      else{
        noStroke();
      squareBase2 = map(x, 0, 1920, 10, 120);
      squareSize2 = squareBase + floor(random(50, 80));
      arc(x, y, squareSize, squareSize,0,squareSize);
    }
    }
    else {
      noFill();
      stroke(pix);
      strokeWeight(3);
      squareBase = map(y, 0, 1080, 2, 45);
      squareSize = squareBase + floor(random(3, 15));
      rect(x-halfSize, y-halfSize, squareSize, squareSize);
      // noStroke();
      // x = x + dx;
      // y = y + dy;
      // squareSize2 = squareSize;
      // rect(x-halfSize, y-halfSize, squareSize, squareSize);
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter*elementSpacing > 1920) {
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