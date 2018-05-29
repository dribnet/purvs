let sourceImg=null;
let maskImg=null;
let renderCounter=0; // Rename to row counter

function preload() {
  sourceImg = loadImage("input_2.jpg");
  maskImg = loadImage("mask_2.png");
  maskImgB = loadImage("mask_2b.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  maskImgB.loadPixels();
}

const pointSize = 20;

function draw () {
  for(let i = 0; i < 1080 / pointSize * 2; i++) {
    let x = int(i * pointSize);
    let y = int(renderCounter * pointSize);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let maskB = maskImgB.get(x, y);
    let halfSize = pointSize/2;
    fill(pix);
    if(mask[0] < 128) {
      polygon(x, y, pointSize, 6);
      fill(255, 255, 255, 50);
      polygon(x, y, pointSize/1.5, 6);
      fill(pix);
      polygon(x, y, pointSize/2, 6);
      fill(255, 255, 255, 50);
      polygon(x, y, pointSize/3, 6);
      fill(pix);
      polygon(x, y, pointSize/3.5, 6);
      polygon(x, y, pointSize/2, 6);
      fill(255, 255, 255, 50);
      polygon(x, y, pointSize/4, 6); 
    }
    else if(maskB[0] < 128) {
    	fill(pix);
    	polygon(x, y, pointSize/2, 6);
    	fill(255, 255, 255);
    	polygon(x, y, pointSize/4, 6); 
    }
    else {
      fill(pix);
       ellipse(x, y, pointSize/2, pointSize/2);
       fill(255, 255, 255);
       ellipse(x, y, pointSize/4, pointSize/4);
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

//polygon code from https://p5js.org/es/examples/form-regular-polygon.html
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

z_color_helper.js