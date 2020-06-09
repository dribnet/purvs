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
  background(255,165,190);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileWidth = 7;
const tileHeight = 12;

const x_step = 7;
const y_step = 12;
const x_step1 = 20;
const y_step1 = 15;

const starR = 26;

function draw () {


  for(var x2 = 0;x2< sourceImg.width; x2 = x2+ x_step){
    for(var y2 = 0 ; y2 < sourceImg.height; y2 = y2+ y_step){
      let pix = sourceImg.get(x2,y2);
      let mask = maskImg.get(x2,y2);

      fill(pix[0],pix[1],pix[2],50);
      noStroke();
      ellipse(x2,y2,tileWidth,tileHeight);

  }
}

for (let i = 0; i<2000;i++){
  let x1 = floor(random(sourceImg.width));
  let y1 = floor(random(sourceImg.height));
  let mask = maskImg.get(x1,y1);

    if(mask[0]>200){
      // let starX = x1;
      // let starY = y1;
      // for(var j = 0; j<25;j++){

      drawStar(x1,y1);
     // starX = starX +random(-4,6);
     // starY = starY + random(-3,2);
    //}
    }
}

for(var x3 = 0;x3 < sourceImg.width; x3 = x3+ x_step1){
  for(var y3 = 0 ; y3 < sourceImg.height; y3 = y3+ y_step1){
    let pix = sourceImg.get(x3,y3);
    let mask = maskImg.get(x3,y3);
        if(mask[0]==144){
          // let coinX = x3;
          // let coinY = y3;
          // for(var k = 0; k<2; k++){
          // drawcoin(coinX,coinY,10)
          // coinX = coinX + random(-2,3);
          // coinY = coinY + random(3,-2);
          drawHeart(x3,y3,26);

        }
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


function drawHeart(x,y,size){
  let pix = sourceImg.get(x, y);
  let mask = maskImg.get(x, y);
  fill(pix);
  stroke(255);
  strokeWeight(3);
//   beginShape();
// vertex(x, y);
// bezierVertex(x+size,y, x+size,y+size*1.5, x, y+size*1.5);
// bezierVertex(x+size,y, x+size,y+size*1.5, x, y);
// endShape();
//
//   beginShape();
// vertex(x, y);
// bezierVertex(x-size,y, x-size,y+size*1.5, x, y+size*1.5);
// bezierVertex(x-size,y, x-size,y+size*1.5, x, y);
// endShape();
beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
  strokeWeight(2.3);
fill(255,165,190);
beginShape();
  vertex(x, y + size / 4.2);
  bezierVertex(x - size / 3.2, y + size / 4.2 - size / 3.2, x - size / 2.2, y + size / 4.2 + size / 4.2, x, y + size / 4.2 + size / 2.2);
  bezierVertex(x + size / 2.2, y + size / 4.2 + size / 4.2, x + size / 4.2, y + size / 4.2 - size / 3.2, x, y + size / 4.2);
  endShape(CLOSE);
}

function drawStar(x,y){
  fill(255,249,35);
  noStroke();
  beginShape();
vertex(x, y-starR);
quadraticVertex(x, y, x+starR, y);
  quadraticVertex(x,y,x,y+starR);
  quadraticVertex(x,y,x-starR,y);
  quadraticVertex(x,y,x,y-starR);
endShape();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
