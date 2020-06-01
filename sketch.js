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
  noStroke();
  background(104, 115, 114);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const squareHeight=20;
const squareWidth=20;

function draw () {
  for(let i=0;i<2000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix[0], pix[1], pix[2], 60);

//if the mask is close to black
    if(mask[0]) {
      rect(x,y, squareWidth,squareHeight);
      Sea();
    }
    //if the mask isn't black
    if(mask[255]) {
      rect(x, y, squareWidth,squareHeight);
      Earth();
    }
    //if the mask isn't black
    if(mask[97]) {
      rect(x, y, squareWidth,squareHeight);
      Sky();
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

//draw on the black parts of the mask (the sea)
function Sea(){
  //noStroke();
//  ellipse(x,y, 5,5);


}

//draw on the white parts of the mask (the earth)
function Earth(){
    noStroke();
    ellipse(x,y, 5,5);
    ellipse(x*2,y*2, 5,5);
    ellipse(x*4,y*4, 5,5);
    ellipse(x*6,y*6, 5,5);
    ellipse(x*8,y*8, 5,5);
    rect(x,y, 10,10);
}
function Sky(){

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
