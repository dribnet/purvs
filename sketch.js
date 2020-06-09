let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile   = "mask_2.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  let segmentX = 10;
  let segmentY = 10;
  let x = floor(random(sourceImg.width/segmentX));
  let y = floor(random(sourceImg.height/segmentY));
  let pix = sourceImg.get(x, y);
  let mask = maskImg.get(x, y);

  for(let jx=1;jx<segmentX+1;jx++) {
  for(let jy=1;jy<segmentY+1;jy++) {
  for(let i=0;i<200/segmentX;i++) {
    let xPrev = x;
    let yPrev = y;

    x = floor(random((jx-1)*sourceImg.width/segmentX,(jx)*sourceImg.width/segmentX));
    y = floor(random((jy-1)*sourceImg.height/segmentY,(jy)*sourceImg.height/segmentY));
    pix = sourceImg.get(x, y);
    mask = maskImg.get(x, y);
    m = map(red(mask),0,255,0,150);

    fill(red(pix),green(pix),blue(pix),red(m));
    if (i>0) {
      drawPointedTriangle(x,y,xPrev,yPrev,20,40)
    } else {

    }
  }
  }
  }
  for(let jx=1;jx<segmentX+1;jx++) {
  for(let jy=1;jy<segmentY+1;jy++) {
  for(let k=0;k<75/segmentX;k++) {
    let xPrev = x;
    let yPrev = y;

    x = floor(random((jx-1)*sourceImg.width/segmentX,(jx)*sourceImg.width/segmentX));
    y = floor(random((jy-1)*sourceImg.height/segmentY,(jy)*sourceImg.height/segmentY));
    pix = sourceImg.get(x, y);
    mask = maskImg.get(x, y);

    fill(red(pix),green(pix),blue(pix),red(mask));
    if (k>0) {
      drawPointedTriangle(x,y,xPrev,yPrev,50,40)
    } else {

    }
  }
  }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}
function drawPointedTriangle(xPos,yPos,xTarget,yTarget,size,frontAngle) {
  angleMode(DEGREES);
  ellipseMode(CENTER);
  frontAngle = 360-frontAngle;
  let rotationAngle = atan2(yTarget-yPos,xTarget-yTarget);
  let frontPointX = xPos+size*cos(rotationAngle);
  let frontPointY = yPos+size*sin(rotationAngle);
  let backPoint1X = frontPointX-size*cos(rotationAngle+frontAngle/2);
  let backPoint1Y = frontPointY-size*sin(rotationAngle+frontAngle/2);
  let backPoint2X = frontPointX-size*cos(rotationAngle-frontAngle/2);
  let backPoint2Y = frontPointY-size*sin(rotationAngle-frontAngle/2);
  beginShape();
  vertex(frontPointX,frontPointY);
  vertex(backPoint1X,backPoint1Y);
  vertex(backPoint2X,backPoint2Y);
  endShape();
  // triangle(frontPointX, frontPointY, backPoint1X, backPoint1Y, backPoint2X, backPoint2Y);
  angleMode(RADIANS)
}
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
