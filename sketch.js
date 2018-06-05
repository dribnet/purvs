let sourceImg=null;
let maskImg=null;
let renderCounter=0; // Rename to row counter

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
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

const pointSize = 50;

function draw () {
  for(let i = 0; i < 1080 / pointSize * 2; i++) {


    let x = int(i * pointSize);
    let y = int(renderCounter * pointSize);
    let dx = floor(random(pointSize/2));
    let dy = floor(random(pointSize/2));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = pointSize/2;
    fill(pix);
    if(mask[0] < 128) {
      x = x + dx;
      y = y + dy;
      //create round and rectangle to black
      fill(pix);
      ellipse(x, y, pointSize, pointSize);
      rect(x, y, pointSize, pointSize);
    }
    else {
      //create polygon to white mask
      fill(pix);
      polygon(x, y, pointSize, 6); 
      fill(pix);
      polygon(x, y, pointSize/4, 6);
    }
  }

  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/pointSize) {
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

//create polygon function
function polygon(x, y, radius, npoints) {
  angleMode(RADIANS);
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
