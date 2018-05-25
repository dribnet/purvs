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

const pointSize = 30;

function draw () {
  for(let i = 0; i < 1080 / pointSize * 2; i++) {
    let x = int(i * pointSize);
    let y = int(renderCounter * pointSize);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = pointSize/2;
    fill(pix);
    if(mask[0] < 128) {
		//polygon(x-halfSize, y-halfSize, pointSize, 6); 
      if(renderCounter % 2 == 0){
        x += pointSize/2;
      }
      //polygon(x-halfSize, y-halfSize,pointSize);
    }
    else {
        fill(0);
    	polygon(x, y, pointSize/1.8, 6);  
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