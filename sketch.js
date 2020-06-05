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
  angleMode(DEGREES);
//  noStroke();
  background(164,179,198);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
 for (let i = 0; i < 1500; i++) {
  let x = floor(random(sourceImg.width));
  let y = floor(random(sourceImg.height));
  let pix = sourceImg.get(x, y);
  let mask = maskImg.get(x, y);
  fill(pix);
  stroke(pix);

  if (mask[0] < 128) {
     let pointSize = 45;
     noStroke();
     fill(pix[0],pix[1],pix[2],20);
     ellipse(x, y, pointSize*2, pointSize);
   }
 }
 for (let i = 0; i < 3000; i++) {
  let x = floor(random(sourceImg.width));
  let y = floor(random(sourceImg.height));
  let pix = sourceImg.get(x, y);
  let mask = maskImg.get(x, y);
  fill(pix);
  stroke(pix);

  if (mask[0] > 128) {
    drawPaint(x,y,8);
  }
}

  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}


function drawPaint(x,y,size){
  push();
  strokeWeight(6);
  translate(x,y);
  for(var i = 0; i < 5; i++){
    if(i==1 || i==3 || i==5){
      line(0+i*4,0,size+i*4,size);
    }
    else{
    line(0+i*3,7,size+i*3,size+7);
  }
    }
  pop();

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
