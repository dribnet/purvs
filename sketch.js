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
  for(let i=0;i<10;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    if (i>0) {
      drawPointedTriangle(x,y,xPrev,yPrev,100,180)
    } else {

    }
    var xPrev = x;
    var yPrev = x;
    // if(mask[0] > 128) {
    //   let pointSize = 50;
    //   ellipse(x, y, pointSize, pointSize);
    // }
    // else {
    //   let pointSize = 10;
    //   rect(x, y, pointSize, pointSize);
    // }
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
  angleMode(DEGREES)
  let rotationAngle = atan2(yTarget-yPos,xTarget-yTarget);
  let frontPointX = xPos+size*cos(rotationAngle);
  let frontPointY = yPos+size*sin(rotationAngle);
  let backPoint1X = xPos-size*cos(rotationAngle+frontAngle/2);
  let backPoint1Y = yPos-size*sin(rotationAngle+frontAngle/2);
  let backPoint2X = xPos-size*cos(rotationAngle-frontAngle/2);
  let backPoint2Y = yPos-size*sin(rotationAngle-frontAngle/2);
  triangle(frontPointX, frontPointY, backPoint1X, backPoint1Y, backPoint2X, backPoint2Y);
  angleMode(RADIANS)
}
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
