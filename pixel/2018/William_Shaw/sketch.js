let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  //define sizes and spacing
    let shapeSize = 40;
    let elementSpacing = 10;
    let elementSpacing2 = 20;
    let backgroundSize = 40;
  // set variables inside for loop
  for(let i=0;i<1080/elementSpacing;i++) {
    let x = int (i * elementSpacing);
    let y = int (renderCounter * elementSpacing);
    let x2 = int (i * elementSpacing2);
    let y2 = int (renderCounter * elementSpacing2);
    //fit source image
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    //draw small pentagons for shape
    if(mask[0] > 128) {
      polygon(x, y, shapeSize/8, shapeSize/8);
    }
    //draw large pentagons for background
    else {
      polygon(x2, y2, backgroundSize/4, backgroundSize/8); 
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/elementSpacing) {
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
//function which creates a polygon
function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
