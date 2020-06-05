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
  let pixMod = sourceImg.get(x, y);

  if (mask[0] < 128) {
    if(pix[0]<100 && pix[1]<100 && pix[2]<100){
    pixMod[0]=pix[0];
    pixMod[1]=pix[1]*1.2;
    pixMod[2]=pix[2]*1.4;
    fill(pixMod[0],pixMod[1],pixMod[2],20);
    }
    else{
       fill(pix[0],pix[1],pix[2],20);
    }

     let pointSize = 45;
     noStroke();
     // fill(pix[0],pix[1],pix[2],20);
     ellipse(x, y, pointSize*2, pointSize);
   }
 }
 for (let i = 0; i < 3000; i++) {
  let x = floor(random(sourceImg.width));
  let y = floor(random(sourceImg.height));
  let pix = sourceImg.get(x, y);
  let mask = maskImg.get(x, y);
  let pixMod = sourceImg.get(x, y);

  if (mask[0] > 128) {
    if(pix[0]>pix[1] && pix[0]>pix[2]){
      pixMod[0]=pix[0]*1.4;
      pixMod[1]=pix[1]*1.2;
      pixMod[2]=pix[2]*1.4;
      stroke(pixMod);
  }
  else{
    stroke(pix);
  }
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
  strokeWeight(6);
  for(var i = 0; i < 5; i++){
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
