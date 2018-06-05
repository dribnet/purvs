let sourceImg=null;
let maskImg=null;
let renderCounter=0;

const colorBack = "#e3eded";

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(colorBack);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  let pointSize = 30;

  for(let i=0;i<1080/pointSize;i++) {
    let x = int(i * pointSize);
    let y = int(renderCounter * pointSize) - (4*renderCounter);
    let halfSize = pointSize/2;
    let pix = sourceImg.get(x+halfSize, y+halfSize);
    let mask = maskImg.get(x+halfSize, y+halfSize);
    fill(pix)

    //circles
    // if(mask[0] < 128) {
    //   if(renderCounter%2 == 0){
    //     ellipse(x+halfSize, y, pointSize);
    //   }
    //   else{
    //     ellipse(x, y, pointSize);
    //   }
    // }
    //pentagons
    if(mask[0] < 128) {
      if(renderCounter%2 == 0){
        fill(pix);
        hexagon(x+(pointSize/2), y, pointSize);
        fill(255);
        hexagon(x+(pointSize/2), y, pointSize-(pointSize/5));
        fill(pix);
        hexagon(x+(pointSize/2), y, pointSize-(pointSize/2));
      }
      else{
        fill(pix);
        hexagon(x, y, pointSize);
        fill(255);
        hexagon(x, y, pointSize-(pointSize/5));
        fill(pix);
        hexagon(x, y, pointSize-(pointSize/2));
      }
    }
    else {
      if(renderCounter%2 == 0){
        hexagon(x+(pointSize/2), y, pointSize);
      }
      else{
        hexagon(x, y, pointSize);
      }
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > sourceImg.height/(pointSize/2)) {
    console.log("Done!")
    noLoop();
    //saveBlocksImages();
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}

function hexagon(x, y, radius) {
  var angle = TWO_PI / 6;
  beginShape();
  for (var a = -PI/2; a < TWO_PI*3/4; a += angle) {
    var sx = x + cos(a) * radius/2;
    var sy = y + sin(a) * radius/2;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}