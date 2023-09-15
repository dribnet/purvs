/* Set to true to make final high-resolution version */
const finalVersion = true;

//variables
let circlepointSize = 20
let rectpointSize = 20;
let pointSize = 20;
let scaleSize = 40;


/* Override some variables with high-resolution final version */
if (finalVersion) {
let circlepointSize = 20
let rectpointSize = 20;
let pointSize = 20;
let scaleSize = 40;
}

let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
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
      
      //background square
      noStroke();
      fill(pix);
      rect(x-halfSize, y-halfSize, pointSize, pointSize);

      //Generates a random angle to rotate the cross
      let spin = random(0, 360);
      
      //Cross shape over the top of the background square
    push();
      translate(x, y);
      rotate(spin);
      scale(scaleSize/250.0);
      stroke(0);
      strokeWeight(1);
      // Draw the cross glyph
      fill(229, 238, 252); 
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

}
    else {
      //generates a random colour outline 
      let colourrd = random(0, 255); 
      //generates a random strokeweights from 0 weight to 2
      let strokerd = random(0, 2.5); 
      strokeWeight(strokerd);
      stroke(colourrd, colourrd, colourrd);
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