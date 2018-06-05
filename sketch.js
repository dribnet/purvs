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
  background(55);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const pointSize = 20;

function draw () {
  for(let i=0;i<1080/pointSize;i++) {
    let x = int(i * pointSize);

    let y = int(renderCounter * pointSize);

    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = pointSize/2;
    fill(pix);
    stroke(pix)

    if(mask[0] > 128) {
      // noFill()
          strokeWeight(19)
      // line(x, y+40, x+40, y);
      // line(x+40, y+40, x, y);
      line(x+10,y,x+10,y+20)  
      line(x-10,y,x-10,y+20) 
    }
    
    else {
     noFill()
          strokeWeight(19)
      line(x,y+10,x+20,y+10)  
      line(x,y-10,x+20,y-10)  
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