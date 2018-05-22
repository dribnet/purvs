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
}

  let pointSize = 15;

function draw () {
  for(let i=0;i<1080/pointSize;i++) {
//    let x = floor(random(sourceImg.width));
//    let y = floor(random(sourceImg.height));

let x = int(i * pointSize);
let y = int(renderCounter * pointSize);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    
    let halfSize = pointSize/2;
    fill(pix);

var x1 = random(pointSize);
//stroke(1);
//rect(x, y, pointSize, pointSize);
    triangle(x+x1, y, x+pointSize, y+pointSize, x, y+pointSize);  
    

/*
    if(mask[0] > 128) {
      ellipse(x, y, pointSize, pointSize);
    }
    else {
      triangle(x, y, x+pointSize, y+pointSize, x, y+pointSize);    
    }
    */
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 200) {
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
