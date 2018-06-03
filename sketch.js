var sourceImg=null;
var maskImg=null;
var renderCounter=0;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  strokeImg1 = loadImage("Stroke1.png");
  strokeImg2 = loadImage("Stroke2.png");
  strokeImg3 = loadImage("Stroke3.png");
  strokeImg4 = loadImage("Stroke4.png");
  strokeImg5 = loadImage("Stroke5.png");
  strokeImg6 = loadImage("Stroke6.png");
  maskImg = loadImage("BrushMask.png");
}

function setup () {
  var main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(var i=0;i<50;i++) {
    var x = floor(random(sourceImg.width));
    var y = floor(random(sourceImg.height));
    var pix = sourceImg.get(x, y);
    var mask = maskImg.get(x, y);
    var pointSize = 15;
    var halfSize = 50;
    tint(pix);
    // if(mask[0] < 60) {
    //   image(strokeImg1,x-pointSize, y-(3.33*pointSize), pointSize, 3.33*pointSize);
    // }
    if(60 < mask[0] < 90) {
      image(strokeImg2,x-pointSize, y-(3.33*pointSize), pointSize, 3.33*pointSize);
    }
    if(90 < mask[0] < 140) {
      image(strokeImg3,x-pointSize, y-(3.33*pointSize), pointSize, 3.33*pointSize);
    }
    if(140< mask[0] < 200) {
      image(strokeImg4,x-pointSize, y-(3.33*pointSize), pointSize, 3.33*pointSize);
    }
    if(200 < mask[0] < 255) {
      image(strokeImg5,x-pointSize, y-(3.33*pointSize), pointSize, 3.33*pointSize);
    }
    // else {
    //   fill(pix);
    //   rect(x-halfSize, y-halfSize, pointSize, pointSize);  
    // }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 300) {
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }
}

function brush(x,y){
  beginShape();
    
  endShape();
}
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
