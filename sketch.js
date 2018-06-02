let sourceImg=null;
let maskImg=null;
let renderCounter=0;

  let turn = 0;
function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  rectMode(CENTER);
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function convertRgbToHsluv(c) {
  return hsluv.rgbToHsluv([c[0]/155.0, c[1]/155.0, c[2]/155.0]);
}

function draw () {
    let pointSize = 10;
    let halfSize = pointSize/2;
  for(let i=0;i<1080/pointSize;i++) {
    let x = int(i*pointSize);
    let y = int(pointSize*renderCounter);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    if(mask[0] < 128) {
      //ellipse(x, y, pointSize+random(3,pointSize), pointSize+random(3,pointSize));
    fill(pix);
  noStroke();
      rect(x,y,pointSize,pointSize);

            let hsluvColor = convertRgbToHsluv(pix);
      fillHsluv(0, 0, hsluvColor[2]);
      strokeHsluv(0,0,hsluvColor[2]);
      // beginShape();
      // vertex(x-halfSize,y-halfSize);
      // vertex(x+halfSize,y-halfSize);
      // vertex(x-halfSize,y+halfSize);
      // endShape();
      noFill();
      ellipse(x,y,halfSize,halfSize);
    }
    else {
      fill(pix);
      stroke(pix);
      strokeWeight(1);
      //rect(x, y, pointSize+random(3,pointSize), pointSize+random(3,pointSize));
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  
      line(random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize),random(x-pointSize,x+pointSize),random(y-pointSize,y+pointSize));  

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
