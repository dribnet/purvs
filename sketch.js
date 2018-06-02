/* Set to true to make final high-resolution version */
const finalVersion = false;

//variables
let circlepointSize = 20
let rectpointSize = 20;
let pointSize = 20;
let scaleSize = 40;


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
  background(255);
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
    
    if(mask[0] > 128) {
      noStroke();
      fill(180);
      rect(x-halfSize, y-halfSize, pointSize, pointSize);
      
push();
translate(x, y);
scale(scaleSize/300.0);
stroke(0);
    strokeWeight(2);
      // Draw the cross glyph
      fill(pix); 
      beginShape();
      vertex(0, -25);
      vertex(-25, -50);
      vertex(-50, -25);
      vertex(-25, 0);
      vertex(-50, 25);
      vertex(-25, 50);
      vertex(0, 25);
      vertex(25, 50);
      vertex(50, 25);
      vertex(25, 0);
      vertex(50, -25);
      vertex(25, -50);
      vertex(0, -25);
      endShape();
  pop();

     





      // fill(255);
      // stroke(0);
      // strokeWeight(1);
      // //ellipse(x, y, circlepointSize/1.2, circlepointSize/1.2);
      // ellipse(x, y, circlepointSize/2, circlepointSize/2);
      // ellipse(x, y, circlepointSize/3, circlepointSize/3);
      // ellipse(x, y, circlepointSize/5, circlepointSize/5);
      
      // noStroke();
      // fill(pix);
      // rect(x-halfSize, y-halfSize, rectpointSize, rectpointSize);
      // // fill(255);
      // // rect(halfSize, halfSize, rectpointSize/2, rectpointSize/2);




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