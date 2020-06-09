let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
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
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  let x = floor(random(sourceImg.width));
  let y = floor(random(sourceImg.height));
  let pix = sourceImg.get(x, y);
  let mask = maskImg.get(x, y);

  for(let i=0;i<50;i++) {
    let xPrev = x;
    let yPrev = y;

    x = floor(random(sourceImg.width));
    y = floor(random(sourceImg.height));
    pix = sourceImg.get(x, y);
    mask = maskImg.get(x, y);

    fill(red(pix),green(pix),blue(pix),red(mask)+10);
    if (i>0) {
      drawPointedTriangle(x,y,xPrev,yPrev,40,80)
    } else {

    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
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
