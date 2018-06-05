/* Set to true to make final high-resolution version */
const finalVersion = false;

/* Default versions of variables */
let elementSpacing = 40;
let circleSize = 50;
let squareSize = 20;

/* Override some variables with high-resolution final version */
if (finalVersion) {
  elementSpacing = 20;
  circleSize = 50;
  squareSize = 10;
}

let sourceImg=null;
let maskImg=null;
let renderCounter=0;
//xoff for my line function
var xoff = 0.0;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');
  noiseSeed(99);
  stroke(0, 10);
  imageMode(CENTER);
  noStroke();
  var c = color(255)
  background(c);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

// create rectangel for black mask
function rre(x, y, c, s) {
  push();
  translate(x, y);
  rect(30, 20, 55, 100, 20);
  pop();
}



function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
    let x = int(i * elementSpacing);
    let y = int(renderCounter * elementSpacing);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = squareSize/2;
    fill(pix);
    if(mask[0] > 128) {
      fill(pix);
      stroke(pix);
      strokeWeight(5)
      // use noise and line to create out the light came though position.
      xoff = xoff + .01;
      var n = noise(xoff) * width;
      line(-x, -y/10, n*2, height*1.5);
      line(x, -y/20, n*2, height*1.5);
    }
    else {
      noStroke(pix);
      strokeWeight(0)
      // add rre in
      rre(x, y, pix, 0.3);
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/elementSpacing) {
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