let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile   = "maskMain.png";
let extraMask = "maskExtra.png"
let outputFile = "output_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
  maskImgE = loadImage(extraMask);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(101,119,135);
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  maskImgE.loadPixels();
}

function draw () {
  let segmentX = 30;
  let segmentY = 1;
  let x = floor(random(sourceImg.width/segmentX));
  let y = floor(random(sourceImg.height/segmentY));

  for(let ix=1;ix<segmentX+1;ix++) {
    for(let iy=1;iy<segmentY+1;iy++) {
      for(let i=0;i<10000/segmentX;i++) {
        let xPrev = x;
        let yPrev = y;
        x = floor(random((ix-1)*sourceImg.width/segmentX,(ix)*sourceImg.width/segmentX));
        y = floor(random((iy-1)*sourceImg.height/segmentY,(iy)*sourceImg.height/segmentY));
        pix = sourceImg.get(x, y);
        mask = maskImg.get(x, y);
        m = map(red(mask),0,255,0,150);

        fill(red(pix),green(pix),blue(pix),red(m));
        if (i>0) {
          drawPointedTriangle(x,y,xPrev,yPrev,10,40)
        } else {

        }
      }
    }
  }
  for(let j=0;j<150;j++) {
    let xPrev = x;
    let yPrev = y;
    x = floor(random(sourceImg.width));
    y = floor(random(sourceImg.height));
    pix = sourceImg.get(x, y);
    mask = maskImg.get(x, y);

    fill(red(pix),green(pix),blue(pix),red(mask)+10);
    if (j>0) {
      drawPointedTriangle(x,y,xPrev,yPrev,30,40)
    } else {

    }
  }
  for(let j=0;j<150;j++) {
    let xPrev = x;
    let yPrev = y;
    x = floor(random(sourceImg.width));
    y = floor(random(sourceImg.height));
    pix = sourceImg.get(x, y);
    mask = maskImgE.get(x, y);

    fill(red(pix),green(pix),blue(pix),red(mask)*1.5);
    if (j>0) {
      drawPointedTriangle(x,y,xPrev,yPrev,50,40)
    } else {

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
    saveArtworkImage(outputFile);
  }
}
