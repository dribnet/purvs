let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "output_1.png";

function preload() { // what happens before we kick off
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () { // do not change canvas! - can edit stroke, back colour etc
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 10;
const tileWidth = 10;
const tileHeight2 = 50;
const tileWidth2 = 50;
const tileHeight3 = 30;
const tileWidth3 = 30;

function draw () {



  for(var x2 = 0; x2 < sourceImg.width; x2 = x2+ tileWidth2){
    for(var y2 = 0; y2 < sourceImg.height; y2 = y2+ tileHeight2){
      let pix2 = sourceImg.get(x2, y2);
      let mask2 = maskImg.get(x2, y2);
      fill(pix2[0],pix2[1],pix2[2]);
      if (mask2[0] > 128){
        rect(x2,y2, tileWidth2, tileHeight2);
      }
    }
  }

  for(var x3 = 0; x3 < sourceImg.width; x3 = x3+ tileWidth3){
    for(var y3 = 0; y3 < sourceImg.height; y3 = y3+ tileHeight3){
      let pix3 = sourceImg.get(x3, y3);
      let mask3 = maskImg.get(x3, y3);
      fill(pix3[0],pix3[1],pix3[2]);
      if (mask3[0] > 50 & mask3[0] < 180){
        rect(x3,y3, tileWidth3, tileHeight3);

      }
    }
  }

  for(var x = 0; x < sourceImg.width; x = x+ tileWidth){
    for(var y = 0; y < sourceImg.height; y = y+ tileHeight){
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix[0],pix[1],pix[2]);
      if (mask[0] < 128){
        //rect(x,y, tileWidth, tileHeight);
        ellipse(x,y,tileWidth, tileHeight);
      }
    }
  }


  // for(let i=0;i<20;i++) {
  //   let x2 = floor(random(sourceImg.width));
  //   let y2 = floor(random(sourceImg.height));
  //   let pix = sourceImg.get(x2, y2);
  //   let mask = maskImg.get(x2, y2);
  //   fill(pix);
  //   stroke(pix);
  //
  //   let pointSize = 50;
  //   let dice = random(1,6);
  //   line(x, y, x+pointSize, y);
  //   }

    //drawThing(x, y, 10)



  renderCounter = renderCounter + 1;
  if(renderCounter > 5) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function drawThing(x, y, size){
  push();
  translate(x,y);
  line(size, 0, -size, 0);
  // for(var i = 0; i < 10; i++){
  //   line(size, 0, -size, 0);
  //   rotate(360/i);
  // }
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
