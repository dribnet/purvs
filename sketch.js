let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_3.png";
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
  background(20);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 8;
const tileWidth = 8;

const x_step = 8;
const y_step = 8;

function draw () {

  for (let i = 0; i < 3000; i++) {
     let x = floor(random(sourceImg.width));
     let y = floor(random(sourceImg.height));
     let pix = sourceImg.get(x, y);
     let mask = maskImg.get(x, y);
     fill(pix);
     stroke(pix);

     let pointSize = 90;
     let dice = random(1, 6);

     if (mask[0] > 128) {
       line(x, y, x + pointSize, y); //wind
     } else {
       if (dice > 5) {
         line(x, y, x + pointSize, y); //wind
       } else {
         line(x, y, x, y + pointSize); //rain

       }
     }
   }

   for (var x2 = 0; x2 < sourceImg.width; x2 = x2 + x_step) {
   for (var y2 = 0; y2 < sourceImg.height; y2 = y2 + y_step) {
     let pix = sourceImg.get(x2, y2);
     let mask = maskImg.get(x2, y2);
      fill(pix[0],pix[1],pix[2], 100);
      noStroke();
       if (mask[0] > 128) {
     rect(x2, y2, tileWidth, tileHeight);
   }
     //drawStar(x,y,10,pix);
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

function drawMover(x, y) {
  let curX = x;
  let curY = y;
  stroke(0);
  strokeWeight(0.5);

  for (var i = 0; i < 30; i++) {
    ellipse(curX, curY, 10, 10);

    curX = curX + random(-15, 10);
    curY = curY + random(-10, 10);
  }
}

function drawStar(x, y, size){
  push();
  strokeWeight(10);
  translate(x,y);
  for(var i = 0; i < 10; i++){
    line(size,0,-size,0);
      rotate(360/ i);
    }
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
