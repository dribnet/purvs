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
  for(let i=0;i<200;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 50;
    let halfSize = 25;
    fill(pix);
    if(mask[0] > 128) {
      noStroke();
      fill(0);
      rect(x-halfSize, y-halfSize, pointSize, pointSize);    
      stroke(pix);
      strokeWeight(3);
      line(x-halfSize,y-halfSize,x-halfSize,y+halfSize);
      line(x-halfSize*0.8,y-halfSize,x-halfSize*0.8,y+halfSize);
      line(x-halfSize*0.6,y-halfSize,x-halfSize*0.6,y+halfSize);
      line(x-halfSize*0.4,y-halfSize,x-halfSize*0.4,y+halfSize);
      line(x-halfSize*0.2,y-halfSize,x-halfSize*0.2,y+halfSize);
      line(x,y-halfSize,x,y+halfSize);
      line(x+halfSize,y-halfSize,x+halfSize,y+halfSize);
      line(x+halfSize*0.8,y-halfSize,x+halfSize*0.8,y+halfSize);
      line(x+halfSize*0.6,y-halfSize,x+halfSize*0.6,y+halfSize);
      line(x+halfSize*0.4,y-halfSize,x+halfSize*0.4,y+halfSize);
      line(x+halfSize*0.2,y-halfSize,x+halfSize*0.2,y+halfSize);
    } else {
      noStroke();
      fill(pix);
      quad(x-random(24,33),y-random(24,33),x-random(24,33),y+random(24,33),x+random(24,33),y+random(24,33),x+random(24,33),y-random(24,33));
    }
  }

  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
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


      
