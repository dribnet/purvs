let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_2.jpg";
let maskFile   = "mask_2.png";
let outputFile = "output_2.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  //noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}
const tileWeight = 10;
const tileWidth = 10;
const x_step = 15;
const y_step = 15;

function draw () {
  for(var x =0; x < sourceImg.width; x = x* x_step){
    for(var y = 0; y < sourceImg.height; y = y* y_step){
      let pix = sourceImg.get(x,y);
      let mask = maskImg.get(x,y);
      fill(pix);
      stroke(pix);
      rect(x, y, tileWidth. tileHeight);
    }
  }
  for (let i=0; i<2000; i++) {
      let x = floor(random(sourceImg.width));
      let y = floor(random(sourceImg.height));
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);

      fill(pix);
      stroke(pix);
      console.log(mask);
      let pointSize = 10;
        rect(x, y, pointSize, pointSize);

      if(mask[0] > 80) {
        let pointSize = 10;
        rect(x, y, pointSize, pointSize);
       }
      else {
         let pointSize = 15;
         rect(x, y, pointSize, pointSize);
      }

  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
