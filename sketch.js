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
  return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}

let draw_pass = 0;
function draw () {
    let pointSize = 5;
    let halfSize = pointSize/2;
  for(let i=0;i<1080/pointSize;i++) {
    let x = int(i*pointSize);
    let y = int(pointSize*renderCounter);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    if(mask[0]<=128 && draw_pass==0) {//draws an ellipse with two offset light and dark ellipses on top
    let npix=([pix[0]/1.1,pix[1]/1.1,pix[2]/1.1]);
    let mpix=([pix[0]/1.4,pix[1]/1.4,pix[2]/1.4,pix[3]/2]);
      fill(pix);
      ellipse(x,y,pointSize,pointSize);
      fill(npix);
      noStroke();
      ellipse(x+random(-7,7),y+random(-7,7),pointSize/2,pointSize/2);
      fill(mpix);
      ellipse(x+random(-7,7),y+random(-7,7),pointSize/3,pointSize/3);
    }
    else if(mask[0]>128 && draw_pass==1){//draws lines within each point in mask
      fill(pix);
      stroke(pix);
      strokeWeight(1);
      for(var j =0;j<14;j++){
        var x1 = random(x-pointSize,x+pointSize);
        var x2 = random(x-pointSize,x+pointSize);
        var y1 = random(y-pointSize,y+pointSize);
        var y2 = random(y-pointSize,y+pointSize);
      line(x1,y1,x2,y2);
    }
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/pointSize) {
if(draw_pass ==0){
  renderCounter=0;
  draw_pass=1;
  }
    else {
      console.log("Done!")
      noLoop();      
    }
}
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
