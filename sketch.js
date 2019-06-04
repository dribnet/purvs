let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "artwork_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<5000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);
    if(mask[0] > 128) {
      let pointSize = 90; //higher the less density lines. I'm wanting it to slightly less to create a sketch effect.
      ellipse(x, y, pointSize, pointSize); //outside of the syrroundings, draws circle shapes
    }
    else {
      let pointSize = 9; //white space leaving
      let x2 = floor(random(sourceImg.width));
      let y2 = floor(random(sourceImg.height));
     //rect(x, y, pointSize, pointSize);
    //ellipse(x, y, pointSize, pointSize);
      line(x, y, x2, y2);    
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    saveArtworkImage(outputFile); //ensures it does not have the save dialog
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}