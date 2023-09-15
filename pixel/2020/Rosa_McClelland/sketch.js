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
  angleMode(DEGREES);
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
  let pixMod = sourceImg.get(x, y);

  if (mask[0] < 50) { //black area of mask
     let pointSize = 45;
     noStroke();
      fill(pix[0],pix[1],pix[2],20);
     ellipse(x, y, pointSize*2, pointSize); //background blended effect
   }
 }

if (renderCounter>9){
 let x_step=2;
 let y_step=2;
 for (let x2 = 0; x2 < sourceImg.width; x2 = x2 + x_step) {
   for (let y2 = 0; y2 < sourceImg.height; y2 = y2 + y_step){
  let mask = maskImg.get(x2, y2);
  let sizeVary = random(-2,2);

 if (mask[0] < 150 && mask[0] > 100){ //grey area of mask
   noStroke();
   fill(164,179,198);
   ellipse(x2,y2,3+sizeVary); //grid of circles for graphic areas
 }
 }
 }
}

 for (let i2 = 0; i2 < 2000; i2++) {
  let x3 = floor(random(sourceImg.width));
  let y3 = floor(random(sourceImg.height));
  let pix = sourceImg.get(x3, y3);
  let mask = maskImg.get(x3, y3);
  let pixMod = sourceImg.get(x3, y3);

  if (mask[0] > 200) { //white area of mask
    if(pix[0]>pix[1] && pix[0]>pix[2] && pix[0]<160){ //making the red tones brighter
      pixMod[0]=pix[0]*1.6;
      pixMod[1]=pix[1]*1.2;
      pixMod[2]=pix[2]*1.4;
      stroke(pixMod);
  }
  else{
    stroke(pix);
  }
  drawPaint(x3,y3,8); //foreground paint effect
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
  strokeWeight(6);
  for(let i = 0; i < 5; i++){
    if(i==1 || i==3 || i==5){
      line(x+i*4,y,x+size+i*4,y+size);
    }
    else{
    line(x+i*3,y+7,x+size+i*3,y+size+7);
  }
    }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
