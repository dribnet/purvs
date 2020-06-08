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
  background(255,165,190);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileWidth = 7;
const tileHeight = 12;

const x_step = 7;
const y_step = 12;

function draw () {
  for(var x = 0;x< sourceImg.width; x = x+ x_step){
    for(var y = 0 ; y < sourceImg.height; y = y+ y_step){
      let pix = sourceImg.get(x,y);
      let mask = maskImg.get(x,y);
      if(mask[0]<30){
      fill(pix[0],pix[1],pix[2],50);
      noStroke();
      ellipse(x,y,tileWidth,tileHeight);
    }else{
      if(mask[0]>200){
        strokeWeight(10);
        stroke(255,249,35);
        line(x-20,y,x+20,y);
      }else{
        if(mask[0]==144){
          drawcoin(x,y,10)
        }
      }
    }
  }
  }


  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
  //  saveArtworkImage(outputFile);
  }
}

function drawcoin(x,y,size){
  let pix = sourceImg.get(x, y);
  let mask = maskImg.get(x, y);
  fill(pix);
  noStroke();
  stroke(255);
  strokeWeight(1.5);
  beginShape();
vertex(x, y);
bezierVertex(x+size,y, x+size,y+size*1.5, x, y+size*1.5);
bezierVertex(x+size,y, x+size,y+size*1.5, x, y);
endShape();

  beginShape();
vertex(x, y);
bezierVertex(x-size,y, x-size,y+size*1.5, x, y+size*1.5);
bezierVertex(x-size,y, x-size,y+size*1.5, x, y);
endShape();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
