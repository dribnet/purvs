let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

let sourceFile = "input_1.jpg";
let maskFile = "mask_1.png";
let outputFile = "artwork_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw() {
  const numberOfPoints = 1000;
  for (let i = 0; i < numberOfPoints; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y); //gets the colour at the x & y of the images
    let mask = maskImg.get(x, y); // corresponding x&y in the mask
    let pointSize = 20;
    let halfSize = 50;
    fill(pix);

    //if the mask is more white that black -> draw ellipse o.w rectangle
    //TODO: change this logic bellow to our custom logic.
    // if (mask[0] > 128) {
      let randomOffSetX = random(0, pointSize);
      let randomOffSetY = random(0, pointSize);
      // for(let i =0; i< pointSize;i++){
      fill(sourceImg.get(x+randomOffSetX, y+randomOffSetY));
      stroke(sourceImg.get(x+randomOffSetX, y+randomOffSetY))
      strokeWeight(1)
      line(x, y, x+randomOffSetX, y+ randomOffSetY);
       randomOffSetX = random(0, pointSize);
       randomOffSetY = random(0, pointSize);
      line(x, y, x+randomOffSetX, y+ randomOffSetY);
      
      randomOffSetX = random(0, pointSize);
      randomOffSetY = random(0, pointSize);
      line(x, y, x+randomOffSetX, y+ randomOffSetY);
      
      randomOffSetX = random(0, pointSize);
      randomOffSetY = random(0, pointSize);
      line(x, y, x+randomOffSetX, y+ randomOffSetY);
    // }
    // } 
  }

  renderCounter = renderCounter + 1;
  if (renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
