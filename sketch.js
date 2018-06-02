/* Set to true to make final high-resolution version */
const finalVersion = false;

/* Default versions of variables */
let circlepointSize = 40
let rectpointSize = 20;
let pointSize = 20;

/* Override some variables with high-resolution final version */
if (finalVersion) {
  pointSize = 20;
}

let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  angleMode(DEGREES);
  imageMode(CENTER);
  background(255, 254, 206);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<1080/pointSize;i++) {
    let x = int(i * pointSize);
    let y = int(renderCounter * pointSize);
    // let x = floor(random(sourceImg.width));
    // let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = pointSize/2;
    fill(pix);
    if(mask[0] > 128) {
      stroke(145, 156, 173);
      strokeWeight(1);
       ellipse(x, y, circlepointSize, circlepointSize);
       stroke(255);
       strokeWeight(1);
      fill(pix);
      ellipse(x, y, circlepointSize/1.2, circlepointSize/1.2);
      ellipse(x, y, circlepointSize/2, circlepointSize/2);
      ellipse(x, y, circlepointSize/3, circlepointSize/3);
      ellipse(x, y, circlepointSize/5, circlepointSize/5);
      

      // strokeWeight(2);
      // arc(x, y, halfSize, halfSize, 90, 270);
      // stroke(0);
      // arc(x, y, halfSize, halfSize, 270, 90);


    }
    else {
      let colourrd = random(150, 255);
      let strokerd = random(0, 2);
      strokeWeight(strokerd);
      stroke(colourrd);
      fill(pix);
      rect(x-halfSize, y-halfSize, rectpointSize, rectpointSize);
      
    
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