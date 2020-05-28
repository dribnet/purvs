let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "output_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 20;
const tileWidth = 20;
const gapX =25
const gapY = 25

function draw () {
  for(var x = 0; x < sourceImg.width; x= x +gapX){
    for(var y = 0; y < sourceImg.height; y = y+gapY){
      let pix = sourceImg.get(x,y);
      let mask = maskImg.get(x,y);
      fill(pix);
      stroke(pix);
      rect(x,y,tileWidth,tileHeight);
    }
  }

  // for(let i=0;i<2000;i++) {
  //   let x = floor(random(sourceImg.width));
  //   let y = floor(random(sourceImg.height));
  //   let pix = sourceImg.get(x, y);
  //   let mask = maskImg.get(x, y);
  //   fill(pix);
  //   stroke(pix);
  //   strokeWeight(1);
  //   let pointsize = 20
  //   let dice = random(1,10)
  //   if(mask[0] > 128){
  //     drawStar(x,y,8)
  //   }else{
  //     if(dice > 4){
  //     line(x,y,x+pointsize,y+pointsize)
  //   }else{
  //     push();
  //     translate(x,y)
  //     angleMode(DEGREES);
  //     rotate(135);
  //     line(pointsize,0,-pointsize,0)
  //
  //     pop();
  //   }
  // }

  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

// function drawStar(x,y,size){
//   push();
//   translate(x,y);
//   for(var i = 0; i < 10; i++){
//   line(size,0,-size,0);
//   rotate(360/i);
// }
// pop();
// }

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
