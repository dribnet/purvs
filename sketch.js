/* Set to true to make final high-resolution version */
const finalVersion = false;

/* Default versions of variables */
let elementSpacing = 60;
let circleSize = 50;
let squareSize = 30;
let pointSize = 30;
/* Override some variables with high-resolution final version */
if (finalVersion) {
  elementSpacing = 20;
  circleSize = 25;
  squareSize = 10;
}

let sourceImg=null;
let maskImg=null;
let maskImg2=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");

  maskImg2 = loadImage("mask_1.5.png");
  plx = loadImage("mask_1_final.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(80);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  maskImg2.loadPixels();
}

function convertRgbToHsluv(c) {
  return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}

function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
    let x = int(i * elementSpacing);
    let y = int(renderCounter * elementSpacing);
    let dx = floor(random(elementSpacing/2));
    let dy = floor(random(elementSpacing/2));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let mask2 = maskImg2.get(x,y);
    let halfSize = squareSize/2;
    if(mask[0] > 128) {

      // let hsluvColor = convertRgbToHsluv(pix);
      // fillHsluv(0, 0, hsluvColor[2]);
      // ellipse(x, y, circleSize, circleSize);
    }
    else {
      // add random offsets
      x = x + dx;
      y = y + dy;
      // convert to grayscale (remove color, keep brightness in hsluv colorspace)

      push();
      fill(pix);
      stroke(80);
      push(); 
      
      strokeWeight(10);
      rect(x-halfSize+15, y-halfSize-50, squareSize-10, squareSize+80);
      pop(); 
      strokeWeight(5);
      rect(x-halfSize-5, y-halfSize-20, squareSize+30, squareSize-10);   
  
      pop();   
    }
    if(mask2[0] >128){
      push();
      fill(pix);
      ellipse(x, y, circleSize, circleSize);
      pop();
    }
    else{
      push();
      fill(30,0,255,40);
      rect(x,y,circleSize,circleSize);
      pop();
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/elementSpacing) {
    console.log("Done!")
    noLoop();
    image(plx,550,980);
    // neck();
    // saveBlocksImages();
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}


