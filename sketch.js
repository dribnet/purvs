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
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<100;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 50;
    let halfSize = 25;
    if(mask[0] > 128) {
      if (brightness(color(pix))>=50) {
        fill(lerpColor(color(pix),color(255,255,255),0.3));
      } else {
        fill(lerpColor(color(pix),color(0,0,0),0.3));
      }
      quad(x-random(24,33),y-random(24,33),x-random(24,33),y+random(24,33),x+random(24,33),y+random(24,33),x+random(24,33),y-random(24,33));
      } else {
      fill(lerpColor(color(pix),color(0,0,0),0.6));
      quad(x-random(24,33),y-random(24,33),x-random(24,33),y+random(24,33),x+random(24,33),y+random(24,33),x+random(24,33),y-random(24,33));
      stroke(pix);
      noFill();
      ellipse(x,y,16,16);
      noStroke();
    }
  }

  renderCounter = renderCounter + 1;
  if(renderCounter > 20) {
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


      
