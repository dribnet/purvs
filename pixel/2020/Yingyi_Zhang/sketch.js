let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255,165,190);  // pink
  sourceImg.loadPixels();
  maskImg.loadPixels();
}


const tileWidth = 7;
const tileHeight = 12;

const x1_step = 7;
const y1_step = 12;

const x3_step = 20;
const y3_step = 15;

const starR = 26;


function draw () {
// background
  for(var x1 = 0; x1 < sourceImg.width; x1 = x1 + x1_step){
    for(var y1 = 0 ; y1 < sourceImg.height; y1 = y1 + y1_step){
      let pix = sourceImg.get(x1, y1);
      let mask = maskImg.get(x1, y1);

      fill(pix[0], pix[1], pix[2], 80);
      noStroke();
      ellipse(x1, y1, tileWidth, tileHeight);
    }
  }

// yellow line
  for (let i = 0; i < 2000; i++){
    let x2 = floor(random(sourceImg.width));
    let y2 = floor(random(sourceImg.height));
    let mask = maskImg.get(x2, y2);

    if(mask[0] > 200){
      drawStar(x2,y2);
    }
  }

// people
  for(var x3 = 0; x3 < sourceImg.width; x3 = x3 + x3_step){
    for(var y3 = 0 ; y3 < sourceImg.height; y3 = y3 + y3_step){
      let pix = sourceImg.get(x3, y3);
      let mask = maskImg.get(x3, y3);

        if(mask[0] == 144){
          drawHeart(x3,y3,27);
        }
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


function drawHeart(x, y, size){
  let pix = sourceImg.get(x, y);
  let mask = maskImg.get(x, y);

  fill(pix);
  stroke(255);
  strokeWeight(3.5);

  beginShape();
    vertex(x, y);
    bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);

  strokeWeight(3);
  fill(255,165,190);

  beginShape();
    vertex(x, y + size / 4.2);
    bezierVertex(x - size / 3.2, y + size / 4.2 - size / 3.2, x - size / 2.2, y + size / 4.2 + size / 4.2, x, y + size / 4.2 + size / 2.2);
    bezierVertex(x + size / 2.2, y + size / 4.2 + size / 4.2, x + size / 4.2, y + size / 4.2 - size / 3.2, x, y + size / 4.2);
  endShape(CLOSE);
}


function drawStar(x, y){
  fill(255,249,35); // yellow
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
