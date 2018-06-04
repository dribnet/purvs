let sourceImg=null;
let maskImg=null;
let curRow=0;
let renderCounter = 0;
let pointSize = 10;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(35);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<1080/pointSize;i++) {
    // let x = floor(random(sourceImg.width));
    // let y = floor(random(sourceImg.height));
    let x = i * pointSize;
    let y = curRow * pointSize;
    let pix = sourceImg.get(x, y);  
    let mask = maskImg.get(x, y);
 
    let halfSize = 10;
    fill(pix);
    if(mask[0] > 128) {
polygon(x,y,5,3)
    }

    else {
stroke(0,0,0);
strokeWeight(2);
polygon(x, y, 3, 6);
    }
  }

  function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * pointSize/1.5;
    var sy = y + sin(a) * pointSize/1.5;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
  curRow = curRow + 1;
  if(curRow > 1920/pointSize) {
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
