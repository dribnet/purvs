/* Set to true to make final high-resolution version */
let finalVersion = false;

/* Default versions of variables */
let elementSpacing = 40;
let squareSize = 40;
let circleSize = 50;

/* Override some variables with high-resolution final version*/
if (finalVersion){
  elementSpacing = 20;
  squareSize = 10;
  circleSize = 25;
}

let sourceImg=null;
let maskImg=null;
let curRow=0;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function convertRgbToHsluv(c){
  return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}

function draw () {
  for(let i=0;i<(1080/elementSpacing);i++) {
    //let dx = floor(random(elementSpacing/4));
    //let dy = floor(random(elementSpacing/4));
    let x = int(i * elementSpacing);
    let y = int(curRow * elementSpacing);

    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    
    fill(pix);
    if(mask[0] > 128) {
      //fill(pix);
      ellipse(x, y, circleSize, circleSize);
    }
    else {
      //let hsluvColor = convertRgbToHsluv(pix);
      //fillHsluv(0, 0, hsluvColor[2]);
      let halfSize = squareSize/2;
      //x = x + dx;
      //y = y + dy; 
      rect(x-halfSize, y-halfSize, squareSize, squareSize);    
    }
  }
  curRow = curRow + 1;
  
  if(curRow > 1920/elementSpacing) {
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
