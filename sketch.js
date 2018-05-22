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
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

// let pointSize = 12.5;
let triSize = 10;
let elementSpacing = 12.5;
let squareSize = 12.5
let circleSize = 12.5

function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
    // let x = floor(random(sourceImg.width));
    // let y = floor(random(sourceImg.height));
    let x = i * elementSpacing;
    let y = renderCounter * elementSpacing;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
   
    let halfSize = squareSize/2;
    fill(pix);
    push();
    if(mask[0] > 128) {
      stroke(0)
      rect(x, y, squareSize*2, squareSize*2);
      // fill(255, 100, 0);
      // ellipse(x, y, circleSize, circleSize);
      pop();
      // triangle(x, y, x-halfSize, y-pointSize, x+halfSize, y-pointSize);

    }
    else {
      // rect(x-halfSize, y-halfSize, pointSize, pointSize); 
      triangle(x, y+10, x-triSize, y-triSize, x+triSize, y-triSize);
      // fill(100);   
      // triangle(x, y+10, x-triSize/2, y-triSize/2, x+triSize/2, y-triSize/2);   

    }

  }
  renderCounter = renderCounter + 1;
  if(renderCounter*elementSpacing > 1920) {
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }    
  console.log(1*renderCounter);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
